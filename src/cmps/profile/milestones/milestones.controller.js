angular
    .module('profile.milestones')
    .controller('MilestonesCtrl', MilestonesController);

/**
 * @ngdoc controller
 * @name cmps.profile:MilestonesCtrl
 *
 * @requires $scope
 * @requires service.project
 *
 * @description
 * Milestone directive controller
 */
MilestonesController.$inject = [
    '$scope',
    'project'
];

function MilestonesController($scope, project) {
    project.getAll().then(function (data) {

        $scope.project = data.project;
    });
}
