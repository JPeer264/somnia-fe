angular
    .module('page.navbar')
    .controller('NavbarCtrl', NavbarController);

/**
 * @ngdoc controller
 * @name cmps.page:NavbarCtrl
 *
 * @requires $scope
 * @requires $state
 *
 * @description
 * Hello App controller
 */
NavbarController.$inject = [
    '$scope',
    '$state'
];

function NavbarController($scope, $state) {

    /**
     * @ngdoc property
     * @name $state
     * @propertyOf cmps.page:NavbarCtrl
     *
     * @description
     * The $state object
     */
    $scope.$state = $state;
}
