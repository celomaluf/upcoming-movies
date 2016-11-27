var movieDirectives = angular.module('movieDirectives');
movieDirectives.directive('movieList',[ function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        movieid : '@',
        imageurlw92 : '@',
        noimageurl : '@',
        posterpath: '@',
        originaltitle: '@',
        genre : '@',
        releasedate : '@'
    };
    ddo.templateUrl = 'js/app/list/directive/template/movie-list.html';

    return ddo;
}]);
