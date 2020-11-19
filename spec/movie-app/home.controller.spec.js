describe('Home Controller', () => {
  const results = [
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      imdbID: 'tt0076759'
    },
    {
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      imdbID: 'tt0080684'
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      imdbID: 'tt0086190'
    }
  ];
  let $scope;
  let $interval;

  beforeEach(module('movieApp'));
  beforeEach(inject((_$q_, _PopularMovies_) => {
    spyOn(_PopularMovies_, 'get').and.callFake(() => {
      const deferred = _$q_.defer();
      deferred.resolve(['tt0076759', 'tt0080684', 'tt0086190']);
      return deferred.promise;
    });
  }));
  beforeEach(inject((_$q_, _omdbApi_) => {
    spyOn(_omdbApi_, 'find').and.callFake(() => {
      const deferred = _$q_.defer();
      const args = _omdbApi_.find.calls.mostRecent().args[0];
      if (args === 'tt0076759') {
        deferred.resolve(results[0]);
      } else if (args === 'tt0080684') {
        deferred.resolve(results[1]);
      } else if (args === 'tt0086190') {
        deferred.resolve(results[2]);
      } else {
        deferred.reject();
      }
      return deferred.promise;
    });
  }));
  beforeEach(inject((_$controller_, _$interval_, _$rootScope_, _omdbApi_, _PopularMovies_) => {
    $scope = {};
    $interval = _$interval_;
    _$controller_('HomeController', {
      $scope,
      $interval: _$interval_,
      omdbApi: _omdbApi_,
      PopularMovies: _PopularMovies_
    });
    _$rootScope_.$apply();
  }));

  it('should rotate movies every 5 seconds', () => {
    expect($scope.result.Title).toBe(results[0].Title);
    $interval.flush(5e3);
    expect($scope.result.Title).toBe(results[1].Title);
    $interval.flush(5e3);
    expect($scope.result.Title).toBe(results[2].Title);
    $interval.flush(5e3);
    expect($scope.result.Title).toBe(results[0].Title);
  });
});
