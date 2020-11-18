angular
  .module('movieApp')
  .controller('ResultsController', searchController);

searchController.$inject = ['$scope', '$location', 'omdbApi'];

function searchController($scope, $location, omdbApi) {
  const query = $location.search().q;
  omdbApi
    .search(query)
    .then((data) => {
      console.info(data);
      $scope.results = data.Search;
    }, () => {
      $scope.errorMessage = 'Something went wrong!';
    });
}
