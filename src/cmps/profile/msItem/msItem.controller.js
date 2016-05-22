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
    function edit(ms) {
        if(ctrl.editMode){
            console.log(ms);
        }
        ctrl.editMode = !ctrl.editMode;
        
    }
}
