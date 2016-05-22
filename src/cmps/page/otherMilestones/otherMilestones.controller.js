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
    'project'
];

function OtherMilestonesController($scope,project) {
    
    //vars
    var vm = this;
    
    //functions
    vm.projects = projects;

    _init();
    ///////////
    function _init(){
        projects();
    }

    function projects() {
        project.getLatestProjects().then(function (data) {
            vm.projectdata = data.plain();
        })
    }

}
