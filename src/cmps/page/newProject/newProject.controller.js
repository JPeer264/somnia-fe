angular
    .module('page.newProject')
    .controller('NewProjectCtrl', NewProjectController);

/**
 * @ngdoc controller
 * @name cmps.page:NewProjectCtrl
 *
 * @requires $scope
 * @requires $state
 * @requires $cookies
 * @requires $window
 * @requires service.user
 * @requires service.auth
 * @requires COOKIE
 *
 * @description
 * NewProjectCtrl for the newProject directive
 */
NewProjectController.$inject = [
    '$scope',
    '$state',
    '$cookies',
    '$window',
    'user',
    'auth',
    'COOKIE',
];

function NewProjectController($scope, $state, $cookies, $window, user, auth, COOKIE) {

    /**
     * @ngdoc property
     * @name $scope.register
     * @propertyOf cmps.page:NewProjectCtrl
     *
     * @description
     * create an user via user.create() and
     * login directly after the user has been created
     *
     * @param {Object} formData the userdata
     */
    $scope.register = function(formData) {
        // todo if fails show error
        user.create(formData).then(function (data) {
                var data = data.plain();
                console.log(data);
                $cookies.put(COOKIE.TOKEN, data.token);
                $cookies.put(COOKIE.USER_ID, data.user.id);
                $window.location.assign('/');
        });
    }
}
