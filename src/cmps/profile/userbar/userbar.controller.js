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

    /**
     * @ngdoc property
     * @name $scope.logout
     * @propertyOf pages.userbar:UserbarCtrl
     *
     * @description
     * call the auth.logout() service
     */
    $scope.logout = function() {
        auth.logout();
    }
}
