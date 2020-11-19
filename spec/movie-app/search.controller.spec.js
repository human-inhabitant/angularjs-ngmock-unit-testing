describe('Search Controller', () => {
  let $scope;
  let $httpBackend;
  let $location;
  let $timeout;

  beforeEach(module('movieApp'));
  beforeEach(inject((_$controller_, _$httpBackend_, _$location_, _$timeout_) => {
    $scope = {};
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $timeout = _$timeout_;
    _$controller_('SearchController', {
      $scope,
      $httpBackend: _$httpBackend_,
      $location: _$location_,
      $timeout: _$timeout_
    });
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

  it('should redirect after 1 second of keyboard inactivity', () => {
    $scope.query = 'star wars';
    $scope.keyup();
    $httpBackend.whenGET('/src/movie-app/results.html').respond(200, '');
    $timeout.flush();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('should cancel timeout in keydown', () => {
    $scope.query = 'star wars';
    $scope.keyup();
    $scope.keydown();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });

  it('should cancel timeout on search', () => {
    $scope.query = 'star wars';
    $scope.keyup();
    $scope.search();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });
});
