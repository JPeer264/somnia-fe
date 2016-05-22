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
    'project', 'milestone',
    '_'
];

function HomeController($scope, project, milestone, _) {

    /**
     * @ngdoc property
     * @name $scope.getUser
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * example of a property
     */
    $scope.getUser = 'users';

    project.getAll().then(function(data) {
        data = data.plain();

        $scope.project = data.user.project;

        var milestones = data.user.project.milestones;
        var steps = [];
        var cachedMilestone;

        for (var milestone of milestones) {
            if (!milestone.done) {
                steps.push(milestone.step);
                break;
            }
        }

        var flatten = _.flatten(steps);

        $scope.steps = flatten.slice().reverse();

        // update milestones
        $scope.milestones = data.user.project.milestones.sort(function(a,b){
            return a.dueDate - b.dueDate;
        });
    });
}


