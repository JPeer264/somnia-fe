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
    var ctrl = this;
    
    ctrl.editMode = false;

    //function
    ctrl.edit = edit;
    
    ///////////////////////
    function edit(msId, msTitle, msDueDate) {

        msDueDate = msDueDate.getTime();
        console.log(msDueDate);

        if(ctrl.editMode){
            milestone.update(msId, {
                title: msTitle,
                dueDate: msDueDate
            }).then(function(data){
                data = data.plain();
                console.info("response from saving:");
                console.log(data);
            });
        }
        ctrl.editMode = !ctrl.editMode;
        
    }
}
