angular
    .module('profile.login')
    .controller('LoginCtrl', LoginController);

/**
 * @ngdoc controller
 * @name cmps.profile:LoginCtrl
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
LoginController.$inject = [
    '$scope',
    'auth',
    '$window',
    '$cookies',
    'COOKIE',
    '$location',
];

function LoginController($scope, auth, $window, $cookies, COOKIE, $location) {

    /**
     * @ngdoc method
     * @name login
     * @methodOf cmps.profile:LoginCtrl
     *
     * @description
     * call the auth.login() service and set token if it not fail
     */
    $scope.login = function() {

        auth.login($scope.user).then(function (data) {
            $cookies.put(COOKIE.TOKEN, data.token);
            $cookies.put(COOKIE.USER_ID, data.user.id);
            $window.location.assign('/');
        }, function (data) {
            // function for errors
            if (data.status === 401) {
                $scope.error = 'ERROR_WRONG_CREDENTIALS';
            }
        });
    }

    /**
     * @ngdoc method
     * @name signup
     * @methodOf cmps.profile:LoginCtrl
     *
     * @description
     * go to signup page
     */
    $scope.signup=function(){
        $location.path( '/signup' );
    }

}
