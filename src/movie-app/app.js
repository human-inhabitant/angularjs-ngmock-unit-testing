angular
  .module('movieApp', ['ngRoute', 'omdb', 'movieCore'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: '/src/movie-app/home.html',
        controller: 'HomeController'
      })
      .when('/results', {
        templateUrl: '/src/movie-app/results.html',
        controller: 'ResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
