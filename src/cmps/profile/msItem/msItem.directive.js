angular
    .module('profile.step')
    .directive('msItem', msItemDirective);

function msItemDirective(){
    
    return {
        controller:'msItemCtrl as ctrl',
        templateUrl: 'cmps/profile/msItem/msItem.html',
        replace: true,
        link: function(scope, element, attrs, ctrl){
            scope.milestone.dueDate = new Date(scope.milestone.dueDate);
            //console.log(scope.milestone.dueDate);

            var day = scope.milestone.dueDate.getDate();
            var monthIndex = scope.milestone.dueDate.getMonth()+1;
            var year = scope.milestone.dueDate.getFullYear();
            
            scope.milestone.formatDate = day + "." + monthIndex + "." + year;

            scope.$watch('milestone.dueDate', function(newValue, oldValue) {

                var day = scope.milestone.dueDate.getDate();
                var monthIndex = scope.milestone.dueDate.getMonth()+1;
                var year = scope.milestone.dueDate.getFullYear();

                scope.milestone.formatDate = day + "." + monthIndex + "." + year;
            });

            //console.log(scope.milestone.formatDate);
            
        }
    };
    
}