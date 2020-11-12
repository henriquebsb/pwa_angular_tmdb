declare var require: any;

export const environment = {
  production: false,
  url_api_TMDb: 'https://api.themoviedb.org/3',
  url_site_TMDb: 'https://www.themoviedb.org',
  apiKey: 'c294f48b4949777fe5217d302ae7a71d',
  version: require('../../package.json').version,
  urlVersionFile: 'https://henriquebsb.github.io/pwa_angular_tmdb/version.json'
};
