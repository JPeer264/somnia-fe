angular
    .module('page.otherMilestones')
    .directive('otherMilestones', otherMilestonesDirective);

/**
 * @ngdoc directive
 * @name cmps.page:otherMilestones
 *
 * @description
 * Generates a single otherMilestones component
 */
function otherMilestonesDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'OtherMilestonesCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/page/otherMilestones/otherMilestones.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                // var elem = new Foundation.Orbit($('.orbit'));
            }
        };
};
