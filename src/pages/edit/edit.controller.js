(function () {
    
    'use strict';

    angular
        .module('pages.edit')
        .controller('EditCtrl', EditCtrl);

    EditCtrl.$inject = [
        'project'
    ];

    function EditCtrl(
        project
    ) {
        var vm = this;
        
        //vars
        vm.editMode         = false;
        
        //function
        vm.toggleEditMode = toggleEditMode;
        vm.saveProjectTitle = saveProjectTitle;
        

        _init();


        /////////////////////

        function _init() {

            project.getAll().then(function(data){
                data = data.plain();
                vm.project = data.user.project;
                vm.milestones = vm.project.milestones;
                console.log(vm.milestones);
            });

        }

        function toggleEditMode(){
            vm.editMode = !vm.editMode;

        }
        
        function saveProjectTitle(){
            project.update(vm.project.id, {
                title: vm.project.title
            }).then(function(data){

                data = data.plain();
                vm.project = data.project;
                toggleEditMode();
            });
        }
        

    }

})();

