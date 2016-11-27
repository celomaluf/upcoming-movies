var upcomingMovies = angular.module('upcoming-movies');
upcomingMovies.controller('ViewController', ['$scope', '$stateParams', 'viewService', 'imageUrl', function($scope, $stateParams, viewService, imageUrl) {
	$scope.imageURLw500 = imageUrl.imageUrlw500;

	viewService.findMovieById($stateParams.movieId, function(movie) {
		$scope.movie = movie;
	}, function (error) {
		console.log(error);
	});	
}]);
