/**
 * @ngdoc service
 * @name service.user
 *
 * @requires $rootScope
 * @requires Restangular
 * @requires $httpParamSerializer
 * @requires $cookies
 * @requires COOKIE
 * @requires $q
 */
angular
    .module('service.user')
    .service('user', user);

user.$inject = [
    '$rootScope',
    'Restangular',
    '$httpParamSerializer',
    '$cookies',
    '$timeout'
];


function user($rootScope, Restangular, $httpParamSerializer, $cookies, $timeout) {
    // cache all promises - private
    var _identity = undefined;
    var _authenticated = false;
    var _promiseCache = {
        get: {}, // saves the id of every saved person
    }

    this.isIdentityResolved = function() {
        return angular.isDefined(_identity);
    }

    this.isAuthenticated = function() {
        return _authenticated;
    }

    /**
     * @ngdoc method
     * @name service.user#getCurrent
     * @methodOf service.user
     *
     * @description
     * Get the ID and Name from the logged in user
     *
     * @returns {Promise} promise for the current user
     */
    this.getCurrent = function() {
        var currentUserId = $cookies.get('user_id');

        if (!_promiseCache.current) {
            _promiseCache.current = this.get(currentUserId);
        }

        return _promiseCache.current;
    }

    /**
     * @ngdoc method
     * @name service.user#currentUser
     * @methodOf service.user
     *
     * @description
     * Data of the current user - run setCurrent() before use
     */
    /**
     * @ngdoc method
     * @name service.user#setCurrent
     * @methodOf service.user
     *
     * @description
     * Set the rootscope of currentUser
     */
    this.setCurrent = function() {
        return (this.getCurrent()).then(function(data) {
            var userdata = data;
            _identity = userdata;
            _authenticated = true;
            $rootScope.currentUser = userdata;
        });
    }

    /**
     * @ngdoc method
     * @name service.user#get
     * @methodOf service.user
     *
     * @description
     * Get a specific user
     *
     * @param {Object} id - the id from the user
     *
     * @returns {Promise} returns promise
     */
    this.get = function(id) {
        return $timeout(function() {
            return {
                id: 3,
                name: 'Simon'
            };
        }, 1000);
        // return Restangular.one('user', id).get();
    }

    /**
     * @ngdoc method
     * @name service.user#create
     * @methodOf service.user
     *
     * @description
     * Create a new user with goal
     *
     * @param {Object} formData - the data from the user
     *
     * @returns {Promise} returns promise
     */
    this.create = function(formData) {
        return Restangular.one('register').customPOST($httpParamSerializer(formData));
    }
}