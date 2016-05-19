angular
    .module('pages.header')
    .controller('HeaderCtrl', HeaderController);

/**
 * @ngdoc controller
 * @name pages.header:HeaderCtrl
 *
 * @requires $scope
 * @requires service.user
 * @requires service.auth
 *
 * @description
 * HeaderCtrl for the header page
 */
HeaderController.$inject = [
    '$scope',
];

function HeaderController($scope) {

    /**
     * @ngdoc method
     * @name headerScope
     * @methodOf pages.header:HeaderCtrl
     *
     * @description
     * call the auth.logout() service and check logged in status
     *
     * @return {Boolean} auth.isAuthorized()
     */
    $scope.headerScope = function() {
        return 'Headerzeugs';
    }

}