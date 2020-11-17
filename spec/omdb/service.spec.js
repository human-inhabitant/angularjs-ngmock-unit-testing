describe('omdb service', () => {
  const movieData = {
    Search: [{
      Title: 'Star Wars: Episode IV - A New Hope', Year: '1977', imdbID: 'tt0076759', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode V - The Empire Strikes Back', Year: '1980', imdbID: 'tt0080684', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode VI - Return of the Jedi', Year: '1983', imdbID: 'tt0086190', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode VII - The Force Awakens', Year: '2015', imdbID: 'tt2488496', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode I - The Phantom Menace', Year: '1999', imdbID: 'tt0120915', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode III - Revenge of the Sith', Year: '2005', imdbID: 'tt0121766', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode II - Attack of the Clones', Year: '2002', imdbID: 'tt0121765', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode VIII - The Last Jedi', Year: '2017', imdbID: 'tt2527336', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'
    }, {
      Title: 'Rogue One: A Star Wars Story', Year: '2016', imdbID: 'tt3748528', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'
    }, {
      Title: 'Star Wars: Episode IX - The Rise of Skywalker', Year: '2019', imdbID: 'tt2527338', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg'
    }],
    totalResults: '551',
    Response: 'True'
  };
  const movieDataById = {
    Title: 'Star Wars: Episode IV - A New Hope', Year: '1977', Rated: 'PG', Released: '25 May 1977', Runtime: '121 min', Genre: 'Action, Adventure, Fantasy, Sci-Fi', Director: 'George Lucas', Writer: 'George Lucas', Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing', Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.", Language: 'English', Country: 'USA', Awards: 'Won 6 Oscars. Another 52 wins & 29 nominations.', Poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', Ratings: [{ Source: 'Internet Movie Database', Value: '8.6/10' }, { Source: 'Rotten Tomatoes', Value: '92%' }, { Source: 'Metacritic', Value: '90/100' }], Metascore: '90', imdbRating: '8.6', imdbVotes: '1,213,873', imdbID: 'tt0076759', Type: 'movie', DVD: 'N/A', BoxOffice: 'N/A', Production: 'Lucasfilm Ltd.', Website: 'N/A', Response: 'True'
  };
  let omdbApi = {};

  beforeEach(angular.mock.module('omdb'));

  beforeEach(angular.mock.inject((_omdbApi_) => {
    omdbApi = _omdbApi_;
  }));

  it('should return search movie data', () => {
    console.info(angular.mock.dump(movieData));
    expect(omdbApi.search('star wars')).toEqual(movieData);
  });

  it('should return movie data by id', () => {
    expect(omdbApi.find('tt0076759')).toEqual(movieDataById);
  });
});
