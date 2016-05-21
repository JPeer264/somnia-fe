angular
    .module('profile.addStep')
    .controller('AddStepCtrl', AddStepController);

/**
 * @ngdoc controller
 * @name cmps.profile:AddStepCtrl
 *
 * @requires $scope
 * @requires service.step
 *
 * @description
 * AddStep directive controller
 */
AddStepController.$inject = [
    '$scope',
    'step'
];

function AddStepController($scope, step) {

    $scope.addStep = function () {
        var stepObj = $scope.step;
        var user =$scope.currentUser;
        var milestones = user.project.milestones;
        var milestoneId;

        // get the first milestoneId of "done === false"
        for (var milestone of milestones) {
            if (!milestone.done) {
                milestoneId = milestone.id;
                break;
            }
        }

        step.create(milestoneId, stepObj).then(function(data) {
            var data = data.plain();

            $scope.steps.unshift(data.step);
        });
    }
}
