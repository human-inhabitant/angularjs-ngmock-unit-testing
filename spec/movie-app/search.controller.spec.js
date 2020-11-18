describe('Search Controller', () => {
  let $scope;
  let $location;

  beforeEach(module('movieApp'));
  beforeEach(inject((_$controller_, _$location_) => {
    $scope = {};
    $location = _$location_;
    _$controller_('SearchController', { $scope, $location });
  }));

  it('should redirect to the query results page for non-empty query', () => {
    $scope.query = 'star wars';
    $scope.search();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('should not redirect to query results page for empty query', () => {
    $scope.query = '';
    $scope.search();
    expect($location.url()).toBe('');
  });
});
