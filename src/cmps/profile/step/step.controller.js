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
    var changeId = 0;

    $scope.changeId = function (id) {
        changeId = id === undefined ? changeId : id;

        return changeId;
    }

    $scope.edit = function (id) {
        $scope.changeId(0);

        if (!$scope.step.edit) {
            return;
        }

        step.update(id, {title: $scope.step.edit}).then(function (data) {
            data = data.plain();
            $scope.step.title = data.step.title;
        });
    }

    $scope.openEdit = function (id) {
        $scope.changeId(id);
    }
}
