var upcomingMovies = angular.module('upcoming-movies');
upcomingMovies.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('list', {
			url: '/list',
			templateUrl: 'partials/list.html',
			controller: 'ListController'
		})
		.state('view', {
			url: '/view/:movieId',
			templateUrl: 'partials/view.html',
			controller: 'ViewController'
		});
	$urlRouterProvider.otherwise("list");
}]);
