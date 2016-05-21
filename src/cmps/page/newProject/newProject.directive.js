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
                            // transform milestones to array
                            // todo: insert real timestamp
                            var temp = [
                                {
                                    "title": scope.user.project.milestone[0].title,
                                    "dueDate": 1063790502134
                                },
                                {
                                    "title": scope.user.project.milestone[1].title,
                                    "dueDate": 1163790502134
                                },
                                {
                                    "title": scope.user.project.milestone[0].title,
                                    "dueDate": 1023790502134
                                }
                            ];

                            scope.user.project.milestone = null;
                            delete scope.user.project.milestone;
                            scope.user.project.milestones = temp;

                            scope.user.project.dueDate = 1923790502134;

                            scope.register(scope.user);
                        }

                    });
                });
            }
        };
};
