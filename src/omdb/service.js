angular.module('omdb', []);

angular
  .module('omdb')
  .factory('omdbApi', ($http, $q) => {
    const service = {};
    const baseUrl = 'https://www.omdbapi.com/?apikey=a343c096&v=1&';

    function httpPromise(url) {
      console.info('url', url);
      const deferred = $q.defer();
      $http({ url, method: 'get' })
        .then((data) => {
          deferred.resolve(data.data);
        }, () => {
          deferred.reject();
        });
      return deferred.promise;
    }
    service.search = (query) => httpPromise(`${baseUrl}s=${encodeURIComponent(query)}`);
    service.find = (id) => httpPromise(`${baseUrl}i=${id}`);
    return service;
  });
