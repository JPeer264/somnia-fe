angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 * @requires project
 *
 * @description
 * HomeCtrl for the home page
 */
HomeController.$inject = [
    '$scope',
    'project',
    '_'
];

function HomeController($scope, project, _) {

    /**
     * @ngdoc property
     * @name $scope.getUser
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * example of a property
     */
    $scope.getUser = 'users';

    /**
     * @ngdoc property
     * @name $scope.steps
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * All the steps of the current user
     */
    project.getAll().then(function(data) {
        data = data.plain();
        var milestones = data.user.project.milestones;
        var steps = [];

        for (var milestone of milestones) {
            steps.push(milestone.step);
        }

        $scope.steps = _.flatten(steps);
    });
}
