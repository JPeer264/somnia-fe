(function () {
    
    'use strict';

    angular
        .module('pages.edit')
        .controller('EditCtrl', EditCtrl);

    EditCtrl.$inject = [
        'project', 'milestone'
    ];

    function EditCtrl(
        project, milestone
    ) {
        var vm = this;
        
        //vars
        vm.editMode         = false;
        
        //function
        vm.toggleEditMode   = toggleEditMode;
        vm.saveProjectTitle = saveProjectTitle;
        vm.addMilestone     = addMilestone;
        

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
        
        function addMilestone(){
            if(vm.newMilestone && vm.newMilestone.dueDate && vm.newMilestone.title){
                console.log('valid');
                
                milestone.create(vm.project.id,{
                    title: vm.newMilestone.title,
                    dueDate: (new Date(vm.newMilestone.dueDate)).getTime()
                }).then(function(data){
                    data = data.plain();
                    console.log("response from creating milestone:");
                    console.log(data);
                    vm.milestones.push(data.milestone);
                    vm.newMilestone = null;
                }, function(err){
                    console.log("error from creating milestone:");
                    console.log(err);
                });
            }

            
        }
        

    }

})();

