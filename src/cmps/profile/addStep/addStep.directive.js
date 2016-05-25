angular
    .module('profile.addStep')
    .directive('addStep', addStepDirective);

/**
 * @ngdoc directive
 * @name cmps.profile:addStep
 *
 * @description
 * A input field to update the tasks
 */
function addStepDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'AddStepCtrl',
            controllerAs: 'addStep',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/profile/addStep/addStep.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {

            }
        };
};
