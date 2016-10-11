angular
    .module('profile.updateMilestones')
    .controller('UpdateMilestonesCtrl', UpdateMilestonesController);

/**
 * @ngdoc controller
 * @name cmps.profile:UpdateMilestonesCtrl
 *
 * @requires $scope
 *
 * @description
 * AddStep directive controller
 */
UpdateMilestonesController.$inject = [
    '$scope',
    'project',
    'milestone',
    '$window'
];

function UpdateMilestonesController($scope, project, milestone, $window) {
    var vm = this;

    _getMileStones();

    /**
     * @ngdoc method
     * @name vm.project
     * @methodOf cmps.profile:UpdateMilestonesCtrl
     *
     * @description
     * update a milestone and check if its the last one
     */
    vm.currentDone = function(){
        milestone.update(vm.current.id,{
            finishedDate: new Date().getTime()
        }).then(function(data){
            data = data.plain();

            if (data.last){
                _finishProject();
            } else {
                _getMileStones();
            }

            $window.location.assign('.');
        }, function(err){
            console.log('update current error:');
            console.log(err);

        });
    };

    /**
     * @ngdoc property
     * @name vm.project
     * @propertyOf cmps.profile:UpdateMilestonesCtrl
     *
     * @description
     * all projects from the current user
     */
    /**
     * @ngdoc property
     * @name vm.milestones
     * @propertyOf cmps.profile:UpdateMilestonesCtrl
     *
     * @description
     * all milestones from the currentuser
     */
    /**
     * @ngdoc property
     * @name vm.current
     * @propertyOf cmps.profile:UpdateMilestonesCtrl
     *
     * @description
     * set the current milestone
     */
    /**
     * @ngdoc property
     * @name vm.next
     * @propertyOf cmps.profile:UpdateMilestonesCtrl
     *
     * @description
     * set the next milestone
     */
    function _getMileStones(){
        project.getAll().then(function(data) {
            data = data.plain();

            var count = 0;
            var milestones = data.user.project.milestones;
            var cachedMilestone;
            var updatedMilestones = data.user.project.milestones.sort(function(a,b){
                return a.dueDate - b.dueDate;
            });

            vm.project = data.user.project;
            vm.milestones = updatedMilestones;

            // find and set the current milestone
            // find and set the next milestone
            for (var milestone of vm.milestones) {
                if (count === 0 && !vm.milestones[0].done) {
                    vm.current = vm.milestones[0];
                    vm.next = vm.milestones[1];
                    break;
                }

                if (cachedMilestone !== undefined) {
                    if (cachedMilestone.done && !milestone.done) {
                        vm.current = vm.milestones[count];
                        vm.next = vm.milestones[count+1];
                        break;
                    }
                }

                cachedMilestone = milestone;
                count++;
            }

            if (vm.current) {
                var date1 = new Date();
                var date2 = new Date(vm.current.dueDate);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                vm.current.dueIn = diffDays;
            }
        });
    }

    function _finishProject(){
        project.update(vm.project.id,{
            finishedDate: new Date().getTime()
        }).then(function(data){
            data = data.plain();
            console.log('response from finishProject:');
            console.log(data);

        });
    }
}
