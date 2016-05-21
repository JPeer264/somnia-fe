angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 *
 * @description
 * HomeCtrl for the home page
 */
HomeController.$inject = [
    '$scope',
    'user'
];

function HomeController($scope, user) {

    /**
     * @ngdoc property
     * @name $scope.getUser
     * @propertyOf pages.home:HomeCtrl
     *
     * @description
     * example of a property
     */
    $scope.getUser = 'users';

    user.get().then(function(data) {
        console.log(data);
    });
}
