angular
    .module('profile.updateMilestones')
    .directive('updateMilestones', updateMilestonesDirective);

/**
 * @ngdoc directive
 * @name cmps.profile:updateMilestones
 *
 * @description
 * A input field to update the tasks
 */
function updateMilestonesDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'UpdateMilestonesCtrl',
            controllerAs: 'updateMilestones',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/profile/updateMilestones/updateMilestones.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {

            }
        };
};
