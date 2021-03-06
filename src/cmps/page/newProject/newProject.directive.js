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
            controllerAs: 'newProject',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/page/newProject/newProject.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                var vm = controller;
                var $self = $(this);
                var $formElem = $('#newProject .transform');
                var $forms = $formElem.find('form');
                var $dates = $formElem.find('input[type=date]');

                // transform variables
                var formElemWidth = $formElem.outerWidth(true);
                var index;
                var newWidth;

                // resize fix
                $(window).resize(function() {
                    formElemWidth = $formElem.outerWidth(true);
                    newWidth = formElemWidth * index;

                    $formElem.css({
                        'transform': 'translate3d(-' + newWidth + 'px, 0px, 0px)'
                    });
                });

                $(document).on('click', 'button[data-back]', function (data) {

                    if (index === 1) {
                        vm.isFirstForm = true;
                    }

                    index--;
                    newWidth = newWidth - formElemWidth;

                    $formElem.css({
                        'transform': 'translate3d(-' + newWidth + 'px, 0px, 0px)'
                    });

                    vm.$apply();
                });

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
                        vm.isFirstForm = false;
                        index = (key + 1);
                        newWidth = formElemWidth * index;

                        e.preventDefault();

                        if (index !== $forms.length) {
                            $formElem.css({
                                'transform': 'translate3d(-' + newWidth + 'px, 0px, 0px)'
                            });
                        } else {
                            // the last one
                            // transform milestones to array

                            //only do this for first try - in case sb has to submit more than once (e.g. email already taken)
                            if(!vm.user.project.milestones){
                                var temp = [
                                    {
                                        "title": vm.user.project.milestone[0].title,
                                        "dueDate": (new Date(vm.user.project.milestone[0].date)).getTime()
                                    },
                                    {
                                        "title": vm.user.project.milestone[1].title,
                                        "dueDate": (new Date(vm.user.project.milestone[1].date)).getTime()
                                    },
                                    {
                                        "title": vm.user.project.milestone[2].title,
                                        "dueDate": (new Date(vm.user.project.milestone[2].date)).getTime()
                                    }
                                ];

                                vm.user.project.milestone = null;
                                delete vm.user.project.milestone;
                                vm.user.project.milestones = temp;

                                //todo: get real date
                                vm.user.project.dueDate = (new Date(vm.user.project.dueDate)).getTime();
                            }
                            vm.register(vm.user);
                        }
                        vm.$apply();
                    });
                });
            }
        };
};
