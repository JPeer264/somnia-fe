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
    var vm = this;

    /**
     * @ngdoc method
     * @name vm.login
     * @methodOf cmps.profile:LoginCtrl
     *
     * @description
     * call the auth.login() service and set token if it not fail
     */
    vm.login = function() {
        auth.login($scope.userdata).then(function (data) {
            $cookies.put(COOKIE.TOKEN, data.token);
            $cookies.put(COOKIE.USER_ID, data.user.id);
            $window.location.assign('/');
        });
    }

    /**
     * @ngdoc method
     * @name vm.signup
     * @methodOf cmps.profile:LoginCtrl
     *
     * @description
     * go to signup page
     */
    vm.signup=function(){
        $location.path( '/signup' );
    }

}
