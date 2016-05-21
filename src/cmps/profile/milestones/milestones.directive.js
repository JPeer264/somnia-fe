angular
    .module('profile.milestones')
    .directive('milestones', milestonesDirective);

/**
 * @ngdoc directive
 * @name cmps.profile:milestones
 *
 * @description
 * Generates a single userbar component for
 * the header to log out or manage the useraccout
 */
function milestonesDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'MilestonesCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/profile/milestones/milestones.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {

            }
        };
};
