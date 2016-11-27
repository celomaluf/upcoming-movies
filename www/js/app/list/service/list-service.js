var movieServices = angular.module('movieServices');
movieServices.factory('listService', ['$http', 'query', 'cachedData', function($http, query, cachedData) {
	var genres = new Map();
	var currentPage = 0;
	var totalPages = 0;

	var organizeGenre = function () {
		angular.forEach(cachedData.movies, function(value, key) {
			value.genre = '';
			angular.forEach(value.genre_ids, function(v, k) {
				value.genre = value.genre.concat(genres[v], ', ');
			});
			value.genre = value.genre.substring(value.genre.length -2, '');
		});
	};

	this.listMovies = function(callback) {
		if (currentPage == totalPages && totalPages > 0){
			return;
		}
		currentPage ++;
		query.movieUpcoming.get({page: currentPage}, function(data) {
			totalPages = data.total_pages;
			cachedData.movies = cachedData.movies.concat(data.results);
			organizeGenre();
			callback(cachedData.movies);
		}, function(error) {
			console.log(error);
		});
	};

	this.loadGenres = function() {
		query.genreMovieList.get(function(data) {
			angular.forEach(data.genres, function(value, key) {
				genres[value.id] = value.name;
			});
		}, function (error) {
			console.log(error);
		});
	};

	return this;
}]);
