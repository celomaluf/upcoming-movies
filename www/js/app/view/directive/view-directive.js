var movieDirectives = angular.module('movieDirectives');
movieDirectives.directive('movieView',[ function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        imageurlw500 : '@',
        posterpath: '@',
        originaltitle: '@',
        genre : '@',
        releasedate : '@',
        overview : '@'
    };
    ddo.templateUrl = 'js/app/view/directive/template/movie-view.html';

    return ddo;
}]);
