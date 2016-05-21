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
                var $dates = $formElem.find('input[type=date]')

                // todo delete
                $formElem.css({
                    // 'transform': 'translate3d(-' + $formElem.outerWidth(true) + 'px, 0px, 0px)'
                });

                // set min date for input date
                $dates.each(function (key, value) {
                    $(this).attr('min', new Date().toISOString().substring(0, 10));
                });

                // transform logic
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

                            //only do this for first try - in case sb has to submit more than once (e.g. email already taken)
                            if(!scope.user.project.milestones){
                                var temp = [
                                    {
                                        "title": scope.user.project.milestone[0].title,
                                        "dueDate": (new Date(scope.user.project.milestone[0].date)).getTime()/1000
                                    },
                                    {
                                        "title": scope.user.project.milestone[1].title,
                                        "dueDate": (new Date(scope.user.project.milestone[1].date)).getTime()/1000
                                    },
                                    {
                                        "title": scope.user.project.milestone[2].title,
                                        "dueDate": (new Date(scope.user.project.milestone[2].date)).getTime()/1000
                                    }
                                ];

                                scope.user.project.milestone = null;
                                delete scope.user.project.milestone;
                                scope.user.project.milestones = temp;

                                //todo: get real date
                                scope.user.project.dueDate = 1923790502134;
                            }

                            scope.register(scope.user);
                        }

                    });
                });
            }
        };
};
