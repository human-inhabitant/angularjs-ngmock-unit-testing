angular
  .module('movieApp')
  .controller('SearchController', searchController);

searchController.$inject = ['$scope', '$location', '$timeout'];

function searchController($scope, $location, $timeout) {
  let timeout;
  $scope.keyup = () => {
    timeout = $timeout(() => {
      $scope.search();
    }, 1e3);
  };
  $scope.keydown = () => {
    $timeout.cancel(timeout);
  };
  $scope.search = () => {
    $timeout.cancel(timeout);
    if ($scope.query) {
      $location.path('/results').search('q', $scope.query);
    }
  };
}
