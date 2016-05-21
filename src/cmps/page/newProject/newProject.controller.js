angular
    .module('page.newProject')
    .controller('NewProjectCtrl', NewProjectController);

/**
 * @ngdoc controller
 * @name cmps.page:NewProjectCtrl
 *
 * @requires $scope
 * @requires $state
 * @requires service.user
 *
 * @description
 * NewProjectCtrl for the newProject directive
 */
NewProjectController.$inject = [
    '$scope',
    '$state',
    'user',
    '$timeout'
];

function NewProjectController($scope, $state, user, $timeout) {
    // todo delete $timeout if user.create() is implemented

    $scope.register = function(formData) {
        // todo send a request user.create() with additional data
        // todo redirect at success to home page (for init the milestones)
        // todo if fails return $scope.user
        user.create(formData).then(function (data) {
            console.log(data);
        });
    }
}
