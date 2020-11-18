describe('MoviesCore', () => {
  let PopularMovies;
  let $httpBackend;

  beforeEach(angular.mock.module('movieCore'));
  beforeEach(angular.mock.inject((_PopularMovies_, _$httpBackend_) => {
    PopularMovies = _PopularMovies_;
    $httpBackend = _$httpBackend_;
  }));
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should create popular movie', () => {
    const expectedData = { movieId: 'tt0076759', description: 'Great movie!' };
    $httpBackend.expectPOST(/./, expectedData).respond(201);

    const popularMovie = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Great movie!'
    });
    popularMovie.$save();
    expect($httpBackend.flush).not.toThrow();
  });

  it('should get popular movie by id', () => {
    $httpBackend
      .expectGET('popular/tt0076759')
      .respond(200);
    PopularMovies.get({ movieId: 'tt0076759' });
    expect($httpBackend.flush).not.toThrow();
  });

  it('should update popular movie', () => {
    $httpBackend
      .expectPUT('popular')
      .respond(200);
    const popularMovie = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Great movie!'
    });
    popularMovie.$update();
    expect($httpBackend.flush).not.toThrow();
  });

  it('should authenticate request', () => {
    // { "authToken": "jXNd9gvNq7jwnK", "Accept": "application/json, text/plain, */*" }
    const headerData = (headers) => {
      return angular.fromJson(headers).authToken === 'jXNd9gvNq7jwnK';
    };
    const matchAny = /.*/;

    $httpBackend.whenGET(matchAny, headerData).respond(200);
    $httpBackend.expectPOST(matchAny, matchAny, headerData).respond(200);
    $httpBackend.expectPUT(matchAny, matchAny, headerData).respond(200);
    $httpBackend.expectDELETE(matchAny, headerData).respond(200);

    const popularMovie = { id: 'tt0076759', description: 'This movie is great!' };

    PopularMovies.query();
    PopularMovies.get({ id: 'tt0076759' });
    new PopularMovies(popularMovie).$save();
    new PopularMovies(popularMovie).$update();
    new PopularMovies(popularMovie).$remove();

    expect($httpBackend.flush).not.toThrow();
  });
});
