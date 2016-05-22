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

    _getMileStones();

    $scope.currentDone = function(){
        milestone.update($scope.current.id,{
            finishedDate: new Date().getTime()
        }).then(function(data){
            data = data.plain();

            if (data.last){
                _finishProject();
            } else {
                _getMileStones();
            }

            $window.location.assign('/');

        }, function(err){
            console.log('update current error:');
            console.log(err);

        });
    };

    function _finishProject(){
        project.update($scope.project.id,{
            finishedDate: new Date().getTime()
        }).then(function(data){
            data = data.plain();
            console.log('response from finishProject:');
            console.log(data);

        });
    }

    function _getMileStones(){
        project.getAll().then(function(data) {
            data = data.plain();

            $scope.project = data.user.project;

            var milestones = data.user.project.milestones;
            var cachedMilestone;
            var updatedMilestones = data.user.project.milestones.sort(function(a,b){
                return a.dueDate - b.dueDate;
            });

            // update milestones
            $scope.milestones = updatedMilestones;

            var count = 0;
            for (var milestone of $scope.milestones) {
                if (count === 0 && !$scope.milestones[0].done) {
                    $scope.current = $scope.milestones[0];
                    $scope.next = $scope.milestones[1];
                    break;
                }

                if (cachedMilestone !== undefined) {
                    if (cachedMilestone.done && !milestone.done) {
                        $scope.current = $scope.milestones[count];
                        $scope.next = $scope.milestones[count+1];
                        break;
                    }
                }

                cachedMilestone = milestone;
                count++;
            }

            if ($scope.current) {
                var date1 = new Date();
                var date2 = new Date($scope.current.dueDate);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                $scope.current.dueIn = diffDays;
            }
        });
    }
}
