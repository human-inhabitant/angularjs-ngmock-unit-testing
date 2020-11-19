angular
  .module('movieApp')
  .controller('HomeController', homeController);

homeController.$inject = ['$scope', '$interval', 'omdbApi', 'PopularMovies'];

function homeController($scope, $interval, omdbApi, PopularMovies) {
  let results = [];
  let idx = 0;

  function findMovie(id) {
    omdbApi
      .find(id)
      .then((data) => {
        console.info(data);
        $scope.result = data;
      });
  }

  // PopularMovies
  //  .get()
  //  .then((data) => {
  //    console.info('data', data);
  const data = ['tt0076759', 'tt0080684', 'tt0086190'];
  results = data;
  findMovie(results[0]);
  $interval(() => {
    idx += 1;
    $scope.result = findMovie(results[idx % results.length]);
  }, 5e3);
  //  });
}
