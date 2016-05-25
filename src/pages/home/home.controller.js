angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 * @requires service.project
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
    var vm = this;

    /**
     * @ngdoc property
     * @name vm.project
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * get all projects
     */
    /**
     * @ngdoc property
     * @name vm.steps
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * get all steps from the current active milestone
     * the milestones are sorted upsidedown
     */
    /**
     * @ngdoc property
     * @name vm.milestones
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * milestones sorted by duedate
     */
    project.getAll().then(function(data) {
        data = data.plain();

        vm.project = data.user.project;

        var milestones = data.user.project.milestones;
        var steps = [];
        var cachedMilestone;
        var flatten;

        // get the first milestone which is not done
        // and save those steps into `steps`
        for (var milestone of milestones) {
            if (!milestone.done) {
                steps.push(milestone.step);
                break;
            }
        }

        flatten = _.flatten(steps);
        vm.steps = flatten.slice().reverse();

        // update milestones
        vm.milestones = data.user.project.milestones.sort(function(a,b){
            return a.dueDate - b.dueDate;
        });
    });
}


