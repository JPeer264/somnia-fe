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

        console.log($scope.current);
        milestone.update($scope.current.id,{
            finishedDate: new Date().getTime()
        }).then(function(data){
            data = data.plain();
            console.log('update current success');
            console.log(data);
            if(data.last){
                _finishProject();
            }else{
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
            console.log(data);
            $scope.project = data.user.project;
            
            var milestones = data.user.project.milestones;
            var steps = [];

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

            $scope.current = $scope.milestones.filter(function(milestone){
                return !milestone.done;
            })[0];

            if($scope.current){

                var date1 = new Date();
                var date2 = new Date($scope.current.dueDate);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                $scope.current.dueIn = diffDays;
            }

        });

    }
}


