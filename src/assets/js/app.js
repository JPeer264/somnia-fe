angular.module('superpowerteam', [
    'ui.router',
    'LocalStorageModule',
    'superpowerteam.templates',
    'pages',
    'service',
    'cmps',
    'ngCookies',
    'ngMaterial',
]);

angular
    .module('superpowerteam')
    .config(config)
    .run(run);

// config method
config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    'localStorageServiceProvider',
];

function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    // redirect to home state when we call the page without route information
    // activate in proudction and set mod_rewrite to index.html
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/error');

    // setup header and footer templates
    var templates = {
        header: {
            template: 'pages/header/header.html',
            controller: 'HeaderCtrl'
        },
        footer: {
            template: 'pages/footer/footer.html',
            controller: 'FooterCtrl'
        },
    }

    $stateProvider
        .state('index', {
            url: '/',
            views: {
                header: {
                    templateUrl: templates.header.template,
                    controller: templates.header.controller
                },
                main: {
                    templateUrl: 'pages/home/home.html',
                    controller: 'HomeCtrl'
                },
                footer: {
                    templateUrl: templates.footer.template,
                    controller: templates.footer.controller
                },
            },
            data: {
                activetab: 'home'
            },
        })
        .state('profile', {
            url: '/user/{id}',
            views: {
                header: {
                    templateUrl: templates.header.template,
                    controller: templates.header.controller
                },
                main: {
                    templateUrl: 'pages/profile/profile.html',
                    controller: 'ProfileCtrl'
                },
                footer: {
                    templateUrl: templates.footer.template,
                    controller: templates.footer.controller
                },
            },
            data: {
                activetab: 'profile'
            }
        })
        .state('error', {
            url: '/error',
            views: {
                header: {
                    templateUrl: templates.header.template,
                    controller: templates.header.controller
                },
                main: {
                    templateUrl: 'pages/error/error.html',
                    controller: 'ErrorCtrl'
                },
                footer: {
                    templateUrl: templates.footer.template,
                    controller: templates.footer.controller
                },
            }
        });

    localStorageServiceProvider
        .setPrefix('superpowerteam')
        .setStorageType('localStorage');
};

// run method
run.$inject = [
    '$rootScope',
    '$stateParams'
];

function run($rootScope, $stateParams) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        // useful for current states
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;
    });
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['superpowerteam']);
});
