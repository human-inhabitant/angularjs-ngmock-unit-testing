angular.module('movieCore', ['ngResource']);

angular
  .module('movieCore')
  .factory('PopularMovies', ($resource) => {
    const token = 'jXNd9gvNq7jwnK';
    return $resource('popular/:movieId', { movieId: '@id' }, {
      update: {
        method: 'PUT',
        headers: { authToken: token }
      },
      get: {
        method: 'GET',
        headers: { authToken: token }
      },
      query: {
        method: 'GET',
        headers: { authToken: token }
      },
      save: {
        method: 'POST',
        headers: { authToken: token }
      },
      remove: {
        method: 'DELETE',
        headers: { authToken: token }
      },
    });
  });
