angular
  .module('movieApp')
  .controller('SearchController', searchController);

searchController.$inject = ['$scope', '$location'];

function searchController($scope, $location) {
  $scope.search = () => {
    if ($scope.query) {
      $location.path('/results').search('q', $scope.query);
    }
  };
}
