// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare var require: any;

export const environment = {
  production: false,
  url_api_TMDb: 'https://api.themoviedb.org/3',
  url_site_TMDb: 'https://www.themoviedb.org',
  apiKey: 'c294f48b4949777fe5217d302ae7a71d',
  version: require('../../package.json').version,
  urlVersionFile: 'http://localhost:4200/version.json'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
