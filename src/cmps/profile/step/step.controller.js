angular
    .module('profile.step')
    .controller('StepCtrl', StepController);

/**
 * @ngdoc controller
 * @name cmps.profile:StepCtrl
 *
 * @requires $scope
 * @requires service.project
 *
 * @description
 * Step directive controller
 */
StepController.$inject = [
    '$scope',
    'project'
];

function StepController($scope, project) {

    $scope.edit = function(id) {
        // todo call edit page
    }
}
