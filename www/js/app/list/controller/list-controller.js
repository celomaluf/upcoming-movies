var upcomingMovies = angular.module('upcoming-movies');
upcomingMovies.controller('ListController', ['$scope', 'listService', 'infiniteScrollManager', 'imageUrl', function($scope, listService, infiniteScrollManager, imageUrl) {
    $scope.imageURLw92 = imageUrl.imageUrlw92;

    $scope.keepLoading = function() {
        infiniteScrollManager.manage(function (allowToLoadMoreData) {
            if (!allowToLoadMoreData) {
                return;
            }
        });
        listService.listMovies(function(moviesItens) {
            $scope.movies = moviesItens;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }, function (error) {
            console.log(error);
        });
    };

    listService.loadGenres();
}]);
