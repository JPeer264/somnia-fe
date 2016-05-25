angular
    .module('profile.login')
    .directive('login', loginDirective);

/**
 * @ngdoc directive
 * @name cmps.profile:login
 *
 * @description
 * Generates a single login component
 */
function loginDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'LoginCtrl',
            controllerAs: 'login',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/profile/login/login.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                var vm = controller;
                var elem = new Foundation.Reveal($('#login'));

                $(document).on('click', '.submit-login', function() {
                    vm.login();
                });
            }
        };
};
