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

    /**
     * @ngdoc property
     * @name vm.userName
     * @propertyOf cmps.page:OtherMilestonesCtrl
     *
     * @description
     * the user name
     * todo update description
     */
    vm.userName = [];

    //functions
    /**
     * @ngdoc method
     * @name vm.projects
     * @methodOf cmps.page:OtherMilestonesCtrl
     *
     * @description
     * async calling of get latest projects
     */
    vm.projects = projects;

    _init();
    ///////////
    function _init(){
        projects();
    }

    /**
     * @ngdoc method
     * @name vm.projectdata
     * @methodOf cmps.page:OtherMilestonesCtrl
     *
     * @description
     * get the latest project of the user
     */
    function projects() {
        var name = []
        project.getLatestProjects().then(function (data) {
            vm.projectdata = data.plain();
            vm.projectdata.forEach(function (pjt) {
                user.getSpecificUser(pjt.owner).then(function (data) {
                    pjt.user = data;
                })
            })
        })
    }

}
