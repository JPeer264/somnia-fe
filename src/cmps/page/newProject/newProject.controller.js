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
        user.create(formData).then(function (data) {
            var data = data.plain();

            $cookies.put(COOKIE.TOKEN, data.token);
            $cookies.put(COOKIE.USER_ID, data.user.id);
            $window.location.assign('/');
        }, function(err){
            // todo if fails show error
            console.info("Error from registerall");
            console.error(err);

            if(err.data.originalError == "email is already taken!"){
                alert(err.data.originalError);
            }

        });
    }

    /**
     * @ngdoc property
     * @name $scope.isFirstForm
     * @propertyOf cmps.page:NewProjectCtrl
     *
     * @description
     * setter and getter from isFirstForm
     *
     * @param   {Boolean} boo   the new boolesn * not required
     * @return  {Boolean}       isFirstForm
     */
    $scope.isFirstForm = true;
}
