angular.module('superpowerteam', [
    'ui.router',
    'LocalStorageModule',
    'superpowerteam.templates',
    'pages',
    'service',
    'cmps',
    'restangular',
    'ngCookies',
    'ngMaterial'
]);

angular
    .module('superpowerteam')
    .config(config)
    .run(run)
    .constant("COOKIE", {
        "TOKEN": "tkn_u", // tkn_u = token_user
        "USER_ID": "u_i", // u_i = user_id
        "PREFLANGUAGE": "p_lang",
    })
    .constant('_', window._);

// config method
config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    'localStorageServiceProvider',
    '$mdThemingProvider',
    'RestangularProvider'
];

function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider, $mdThemingProvider, RestangularProvider) {
    var $cookies;

    angular.injector(['ngCookies']).invoke(['$cookies', function(_$cookies_) {
        $cookies = _$cookies_;
    }]);

    // redirect to home state when we call the page without route information
    // activate in proudction and set mod_rewrite to index.html
    // $locationProvider.html5Mode(true);

    // setup restangular basics
    RestangularProvider.setBaseUrl('http://localhost:1337/api/')
    .setDefaultHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer '+ $cookies.get('tkn_u')
    });

    $mdThemingProvider.definePalette('superpowerteam', {
        '50': 'E0F2F1',
        '100': 'ffffff',
        '200': 'ffffff',
        '300': 'ffffff',
        '400': 'ffffff',
        '500': '009688',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8980',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'E0F2F1',
    });
      $mdThemingProvider.theme('default')
        .primaryPalette('superpowerteam')

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/error');

    // setup header and footer templates
    var templates = {
        header: {
            template: 'pages/header/header.html',
            controller: 'HeaderCtrl as vm'
        },
        footer: {
            template: 'pages/footer/footer.html',
            controller: 'FooterCtrl'
        },
    }

    $stateProvider
        .state('secure', {
            abstract: true,
            resolve: {
                authorize: ['auth',
                    function(auth) {
                        return auth.authorize();
                    }
                ]
            },
            template: '<div class="view-header" data-ui-view="header"></div><div class="row small-up-1 medium-up-1 large-up-1"><div class="view-main column" data-ui-view="main"></div></div><div class="view-footer" data-ui-view="footer"></div>'
        })
        .state('secure.index', {
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
            }
        })
        .state('secure.profile', {
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
            }
        })
        .state('landing', {
            url: '/landing',
            views: {
                header: {
                    templateUrl: templates.header.template,
                    controller: templates.header.controller
                },
                main: {
                    templateUrl: 'pages/landing/landing.html',
                    controller: 'ProfileCtrl'
                },
                footer: {
                    templateUrl: templates.footer.template,
                    controller: templates.footer.controller
                },
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
    '$stateParams',
    'auth',
    'user'
];

function run($rootScope, $stateParams, auth, user) {

    $rootScope.isLoggedIn = function() {
        return auth.isAuthorized();
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        // todo check if loggedin user wants to see the landing page
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;

        // redirect to login page if not logged in and trying to access a restricted page
        if (user.isIdentityResolved()) {
            auth.authorize();
        }
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        // useful for current states
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;
    });
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['superpowerteam']);
});
