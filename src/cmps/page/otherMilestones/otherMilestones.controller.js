angular
    .module('page.otherMilestones')
    .controller('OtherMilestonesCtrl', OtherMilestonesController);

/**
 * @ngdoc controller
 * @name cmps.page:OtherMilestonesCtrl
 *
 * @requires $scope
 *
 * @description
 * OtherMilestonesCtrl for the otherMilestones directive
 */
OtherMilestonesController.$inject = [
    '$scope',
    'project',
    'user'
];

function OtherMilestonesController($scope,project,user) {
    
    //vars
    var vm = this;
    vm.userName = [];

    //functions
    vm.projects = projects;

    _init();
    ///////////
    function _init(){
        projects();
    }

    function projects() {
        var name = []
        project.getLatestProjects().then(function (data) {
            vm.projectdata = data.plain();
            vm.projectdata.forEach(function(pjt){
                user.getSpecificUser(pjt.owner).then(function (data) {
                    pjt.user = data;
                })
            })
        })
    }

}
