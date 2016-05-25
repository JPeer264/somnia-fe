angular
    .module('profile.step')
    .controller('StepCtrl', StepController);

/**
 * @ngdoc controller
 * @name cmps.profile:StepCtrl
 *
 * @requires $scope
 * @requires service.step
 *
 * @description
 * Step directive controller
 */
StepController.$inject = [
    '$scope',
    'step'
];

function StepController($scope, step) {
    var vm = this;
    var changeId = 0;

    /**
     * @ngdoc method
     * @name $scope.changeId
     * @methodOf cmps.profile:StepCtrl
     *
     * @description
     * getter and setter to change the id which step is currently changing
     */
    vm.changeId = function (id) {
        changeId = id === undefined ? changeId : id;

        return changeId;
    }

    /**
     * @ngdoc method
     * @name $scope.edit
     * @methodOf cmps.profile:StepCtrl
     *
     * @description
     * update the step into the database
     */
    vm.edit = function (id) {
        vm.changeId(0);

        if (!vm.stepInfo) {
            return;
        }

        step.update(id, {title: vm.stepInfo.edit}).then(function (data) {
            data = data.plain();

            // update the scope step
            $scope.step.title = data.step.title;
        });
    }

    /**
     * @ngdoc method
     * @name $scope.openEdit
     * @methodOf cmps.profile:StepCtrl
     *
     * @description
     * toggles the input fields
     */
    vm.openEdit = function (id) {
        vm.changeId(id);
    }
}
