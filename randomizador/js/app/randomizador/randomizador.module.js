angular.module('app.randomizador', [])
    .component('app.randomizador', {
        templateUrl: '/js/app/templates/randomizador.template.html',
        controller: function($scope, imagens, $mdSidenav) {
            $scope.imagens = imagens;


            this.$onInit = function() {
                $scope.promise = $scope.imagens.carregar();
                $scope.template = angular.copy($scope.imagens.template);

                $scope.promise.then(function() {
                    $scope.imagens.atualizar();
                });
            };

            $scope.toggleLeft = buildToggler('left');

            function buildToggler(componentId) {
                return function() {
                    $mdSidenav(componentId).toggle();
                };
            }
        }
    });