angular
    .module('profile.userbar')
    .controller('UserbarCtrl', UserbarController);

/**
 * @ngdoc controller
 * @name cmps.profile:UserbarCtrl
 *
 * @requires $scope
 * @requires service.auth
 * @requires $window
 * @requires $cookies
 * @requires COOKIE
 * @requires $location
 *
 * @description
 * Hello App controller
 */
UserbarController.$inject = [
    '$scope',
    'auth',
    '$window',
    '$cookies',
    'COOKIE',
    '$location',
];

function UserbarController($scope, auth, $window, $cookies, COOKIE, $location) {
    var vm = this;

    /**
     * @ngdoc method
     * @name vm.logout
     * @methodOf cmps.profile:UserbarCtrl
     *
     * @description
     * call the auth.logout() service
     */
    vm.logout = function() {
        auth.logout();
    }
}
