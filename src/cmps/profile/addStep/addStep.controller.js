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
    var vm = this;

    /**
     * @ngdoc method
     * @name vm.addStep
     * @methodOf cmps.profile:AddStepCtrl
     *
     * @description
     * add a step to the step scope
     */
    vm.addStep = function () {
        var stepObj = vm.stepInfo;
        var steps = $scope.home.steps;
        var user = $scope.currentUser;
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

            steps.unshift(data.step);
        });
    }
}
