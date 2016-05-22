angular
    .module('pages.header')
    .controller('HeaderCtrl', HeaderController);

/**
 * @ngdoc controller
 * @name pages.header:HeaderCtrl
 *
 * @requires $scope
 * @requires service.user
 * @requires service.auth
 *
 * @description
 * HeaderCtrl for the header page
 */
HeaderController.$inject = [
    '$scope',
    'user',
    'auth'
];

function HeaderController($scope,user,auth) {

    var vm = this;
    vm.user = "";

    if(auth.isAuthorized){
        user.get().then(function(data){
            data = data.plain();
            vm.user = data.user.email;
        });
    }
}