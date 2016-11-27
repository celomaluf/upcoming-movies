var upComingMoviesConfig = angular.module('upcoming-movies.config', []);
upComingMoviesConfig.constant('APP_CONSTANTS', {
	//CORE
	API_KEY: '1f54bd990f1cdfb230adb312546d765d',
	WS_URL: 'http://api.themoviedb.org/3/',

	//IMAGES
	IMAGE_URL_W92: 'https://image.tmdb.org/t/p/w92',
	IMAGE_URL_W500: 'https://image.tmdb.org/t/p/w500',

	//WS SIGNATURE
	MOVIE_UPCOMING: 'movie/upcoming?api_key=',
	GENRE_MOVIE_LIST: 'genre/movie/list?api_key=',

	//WS PARAMS
	PARAM_PAGE: '&page='
});
