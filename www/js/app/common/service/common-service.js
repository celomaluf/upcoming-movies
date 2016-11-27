var movieServices = angular.module('movieServices');
movieServices.service('query', ['$resource', 'APP_CONSTANTS',  function($resource, APP_CONSTANTS) {
	return {
			'movieUpcoming' : $resource(APP_CONSTANTS.WS_URL +
										APP_CONSTANTS.MOVIE_UPCOMING +
										APP_CONSTANTS.API_KEY +
										APP_CONSTANTS.PARAM_PAGE+':page'),

	 		'genreMovieList': $resource(APP_CONSTANTS.WS_URL +
										APP_CONSTANTS.GENRE_MOVIE_LIST +
										APP_CONSTANTS.API_KEY)
		   };
}]);

movieServices.factory('imageUrl', ['APP_CONSTANTS', function(APP_CONSTANTS) {
	return {
		imageUrlw92 : APP_CONSTANTS.IMAGE_URL_W92,
		imageUrlw500 : APP_CONSTANTS.IMAGE_URL_W500,
		noImageUrl : APP_CONSTANTS.IMAGE_URL_NO_IMAGEURL
	};
}]);

movieServices.factory('cachedData', ['APP_CONSTANTS', function(APP_CONSTANTS) {
	return {
		movies : []
	};
}]);

movieServices.factory('infiniteScrollManager', ['$timeout', function ($timeout) {
	var loadMoreData = true;
    var allowToLoadMoreData = function () {
        loadMoreData = true;
    };

    this.manage = function (callback) {
        if ( !loadMoreData ) {
            callback(false);
        }
        loadMoreData = false;
        $timeout(allowToLoadMoreData, 1000);
        callback(true);
    };
	return this;
}]);
