const path = require('path');
const fs = require('fs');
const util = require('util');

// get application version from package.json
const appVersion = require('./package.json').version;

// promisify core API's
const readDir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

console.log('\nRunning post-build tasks');

// our version.json will be in the dist folder
const versionFilePath = path.join(__dirname + '/dist/version.json');

let mainHash = '';
let mainFile = '';

// RegExp to find main.bundle.js, even if it doesn't include a hash in it's name (dev build)
let mainRegexp = /^main.?([a-z0-9]*)?.js$/;
//let mainBundleRegexp = /^main.?([a-z0-9]*)?(\.bundle)?.js$/;

// read the dist folder files and find the one we're looking for
readDir(path.join(__dirname, '/dist/'))
  .then(files => {
    mainFile = files.find(f => mainRegexp.test(f));
    console.log(`File: ${mainFile}`);

    if (mainFile) {
      let matchHash = mainFile.match(mainRegexp);

      // if it has a hash in it's name, mark it down
      if (matchHash.length > 1 && !!matchHash[1]) {
        mainHash = matchHash[1];
      }
    }

    console.log(`Writing version and hash to ${versionFilePath}`);
    console.log(`{"version": "${appVersion}", "hash": "${mainHash}"}`);

    // write current version and hash into the version.json file
    const src = `{"version": "${appVersion}", "hash": "${mainHash}"}`;
    return writeFile(versionFilePath, src);
  }).then(() => {
    // main bundle file not found, dev build?
    if (!mainFile) {
      console.log('main bundle file not found, dev build?');
      return;
    }

    console.log(`Replacing hash in the ${mainFile}`);

    // replace hash placeholder in our main.js file so the code knows it's current hash
    const mainFilepath = path.join(__dirname, './dist/', mainFile);
    return readFile(mainFilepath, 'utf8')
      .then(mainFileData => {
        const replacedFile = mainFileData.replace('{{AFTER_BUILD_ENTERS_HASH_HERE}}', mainHash);

        return writeFile(mainFilepath, replacedFile);
      });
  }).catch(err => {
    console.log('Error with after build:', err);
  });
