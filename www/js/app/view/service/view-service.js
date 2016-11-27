var movieServices = angular.module('movieServices');
movieServices.factory('viewService', ['$http', 'cachedData', function($http, cachedData) {
	this.findMovieById = function(id, callback) {
		var movie = cachedData.movies.filter(function(entry) {
			return entry.id == id;
		})[0];
		callback(movie);
	};
	return this;
}]);
