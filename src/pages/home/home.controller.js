angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 * @requires project
 *
 * @description
 * HomeCtrl for the home page
 */
HomeController.$inject = [
    '$scope',
    'project'
];

function HomeController($scope, project) {

    /**
     * @ngdoc property
     * @name $scope.getUser
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * example of a property
     */
    $scope.getUser = 'users';

    project.getAll().then(function(data) {
        console.log(data);
    });
}
