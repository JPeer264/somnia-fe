angular
    .module('profile.msItem')
    .controller('msItemCtrl', msItemCtrl);

/**
 * @ngdoc controller
 * @name cmps.profile:msItemCtrl
 *
 * @requires $scope
 * @requires service.project
 *
 * @description
 * ms-item directive controller
 */
msItemCtrl.$inject = [
    '$scope',
    'milestone'
];

function msItemCtrl($scope, milestone) {
    //vars
    var vm = this;

    /**
     * @ngdoc property
     * @name vm.isEditMode
     * @propertyOf cmps.profile:UserbarCtrl
     *
     * @description
     * check if the edit mode is activated
     */
    vm.isEditMode = false;

    //function
    /**
     * @ngdoc method
     * @name vm.edit
     * @methodOf cmps.profile:UserbarCtrl
     *
     * @description
     * update the milestone
     *
     * @param {Integer} mdId        the id of the to edit milestone
     * @param {String}  msTitle     the new title
     * @param {Integer} msDueDate   the new date
     */
    vm.edit = edit;

    ///////////////////////
    function edit(msId, msTitle, msDueDate) {

        msDueDate = msDueDate.getTime();
        console.log(msDueDate);

        if(vm.isEditMode){
            milestone.update(msId, {
                title: msTitle,
                dueDate: msDueDate
            }).then(function(data){
                data = data.plain();
                console.info("response from saving:");
                console.log(data);
            });
        }
        vm.isEditMode = !vm.isEditMode;

    }
}
