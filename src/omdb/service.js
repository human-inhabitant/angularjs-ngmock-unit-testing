angular.module('omdb', []);

angular
  .module('omdb')
  .factory('omdbApi', ($http, $q) => {
    const service = {};
    const baseUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=a343c096&v=1&';

    function httpPromise(url) {
      const deferred = $q.defer();
      $http({ url, method: 'get' })
        .then((data) => {
          deferred.resolve(data);
        }, () => {
          deferred.reject();
        });
      return deferred.promise;
    }
    service.search = (query) => httpPromise(`${baseUrl}s=${encodeURIComponent(query)}`);
    service.find = (id) => httpPromise(`${baseUrl}i=${id}`);
    return service;
  });
