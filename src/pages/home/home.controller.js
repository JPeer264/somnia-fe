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

    _getMileStones();

    $scope.currentDone = function(){
        milestone.update($scope.next.id,{
            finishedDate: new Date().getTime()
        }).then(function(data){
            data = data.plain();


            if (data.last){
                _finishProject();
            } else {
                _getMileStones();
            }

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

            $scope.milestones = data.user.project.milestones.sort(function(a,b){
                return a.dueDate - b.dueDate;
            });

            $scope.next = $scope.milestones.filter(function(milestone){
                if (cachedMilestone !== undefined) {
                    if (cachedMilestone.done) {
                        $scope.current = cachedMilestone;
                    }
                }

                cachedMilestone = milestone;
                return !milestone.done;
            })[0];

            if ($scope.next){
                var date1 = new Date();
                var date2 = new Date($scope.next.dueDate);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                $scope.next.dueIn = diffDays;
            }
        });
    }
}


