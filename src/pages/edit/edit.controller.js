angular
    .module('pages.edit')
    .controller('EditCtrl', EditCtrl);

/**
 * @ngdoc controller
 * @name pages.edit:EditCtrl
 *
 * @requires $scope
 * @requires service.project
 * @requires service.milestone
 *
 * @description
 * EditCtrl for the edit page
 */
EditCtrl.$inject = [
    'project',
    'milestone'
];

function EditCtrl (project, milestone) {
    var vm = this;

    // vars
    /**
     * @ngdoc property
     * @name vm.editMode
     * @propertyOf pages.edit:EditCtrl
     *
     * @description
     * toggles the editmode
     */
    vm.editMode = false;

    // function
    /**
     * @ngdoc method
     * @name vm.toggleEditMode
     * @methodOf pages.edit:EditCtrl
     *
     * @description
     * toggle the edit mode of the edit page
     */
    vm.toggleEditMode = toggleEditMode;
    /**
     * @ngdoc method
     * @name vm.saveProjectTitle
     * @methodOf pages.edit:EditCtrl
     *
     * @description
     * saves the project title into the database
     * updates the project scope
     */
    vm.saveProjectTitle = saveProjectTitle;
    /**
     * @ngdoc method
     * @name vm.addMilestone
     * @methodOf pages.edit:EditCtrl
     *
     * @description
     * creates a new milestone into the database
     * updats the milestone scope and reset the scope 'newMilestone'
     */
    vm.addMilestone = addMilestone;


    _init();

    /////////////////////

    function _init() {
        project.getAll().then(function (data) {
            data = data.plain();
            vm.project = data.user.project;
            vm.milestones = vm.project.milestones;
            console.log(vm.milestones);
        });
    }

    function toggleEditMode() {
        vm.editMode = !vm.editMode;
    }

    function saveProjectTitle() {
        project.update(vm.project.id, {
            title: vm.project.title
        }).then(function(data){
            data = data.plain();
            vm.project = data.project;
            toggleEditMode();
        });
    }

    function addMilestone() {
        if (vm.newMilestone && vm.newMilestone.dueDate && vm.newMilestone.title) {
            console.log('valid');

            milestone.create(vm.project.id, {
                title: vm.newMilestone.title,
                dueDate: (new Date(vm.newMilestone.dueDate)).getTime()
            }).then(function (data) {
                data = data.plain();
                console.log("response from creating milestone:");
                console.log(data);
                vm.milestones.push(data.milestone);
                vm.newMilestone = null;
            }, function (err) {
                console.log("error from creating milestone:");
                console.log(err);
            });
        }
    }
}

