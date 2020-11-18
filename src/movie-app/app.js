angular
  .module('movieApp', ['ngRoute', 'omdb'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/results', {
        templateUrl: 'src/movie-app/results.html',
        controller: 'ResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
