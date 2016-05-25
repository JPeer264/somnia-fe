angular
    .module('profile.step')
    .directive('msItem', msItemDirective);

/**
 * @ngdoc directive
 * @name cmps.profile:msItem
 *
 * @description
 * a milestone item to change the single milstones
 */
function msItemDirective(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller:'msItemCtrl',
        controllerAs: 'msItem',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'cmps/profile/msItem/msItem.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
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