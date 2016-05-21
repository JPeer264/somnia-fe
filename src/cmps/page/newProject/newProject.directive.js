angular
    .module('page.newProject')
    .directive('newProject', newProject);

/**
 * @ngdoc directive
 * @name cmps.page:newProject
 *
 * @description
 * Generates a single newProject component
 */
function newProject() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'NewProjectCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/page/newProject/newProject.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                var $self = $(this);
                var $formElem = $('#newProject');
                var $forms = $formElem.find('form');

                $forms.each(function (key, value) {
                    $(this).submit(function (e) {
                        var formElemWidth = $formElem.outerWidth(true);
                        var index = (key + 1);
                        var newWidth = formElemWidth * index;

                        e.preventDefault();

                        if (index !== $forms.length) {
                            $formElem.css({
                                'transform': 'translate3d(-' + newWidth + 'px, 0px, 0px)'
                            });
                        } else {
                            // the last one
                            scope.register(scope.user);
                        }

                    });
                });
            }
        };
};
