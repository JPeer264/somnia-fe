angular
    .module('profile.step')
    .directive('msItem', msItemDirective);

function msItemDirective(){
    
    return {
        controller:'msItemCtrl as ctrl',
        templateUrl: 'cmps/profile/msItem/msItem.html',
        replace: true,
        scope:{
        },
        link: function(scope, element, attrs, ctrl){
        
        }
    };
    
}