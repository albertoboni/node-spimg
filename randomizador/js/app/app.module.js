angular.module('app', [
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngAria',

    'app.randomizador',
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('orange');
});;


