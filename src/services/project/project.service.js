/**
 * @ngdoc service
 * @name service.project
 *
 * @requires $rootScope
 * @requires Restangular
 * @requires $httpParamSerializer
 */
angular
    .module('service.project')
    .service('project', project);

project.$inject = [
    '$rootScope',
    'Restangular',
    '$httpParamSerializer',
    '$timeout'
];

function project($rootScope, Restangular, $httpParamSerializer, $timeout) {
    var self = this;
    // todo delete $timeout and add real request

    /**
     * @ngdoc method
     * @name service.project#getAll
     * @methodOf service.project
     *
     * @description
     * Get all the projects from this user
     *
     * @returns {Promise} Returns a promise with all the milestones
     */
    self.getAll = function () {
        return Restangular.one('getuser').get();
    }

    /**
     * @ngdoc method
     * @name service.project#create
     * @methodOf service.project
     *
     * @description
     * Creates a specific project
     *
     * @param   {Object}    formData    the data from the project
     * @returns {Promise}   Returns     a promise
     */
    self.create = function (formData) {
        return Restangular.one('project').customPOST($httpParamSerializer(formData));
    };

    /**
     * @ngdoc method
     * @name service.project#update
     * @methodOf service.project
     *
     * @description
     * Updates a specific project
     *
     * @param   {Object}  formData  the data from the project
     * @param   {Integer} id        the id of the project
     * @returns {Promise}           Returns a promise
     */
    self.update = function (id, formData) {
        return Restangular.one('project', id).customPUT($httpParamSerializer(formData));
    };

    /**
     * @ngdoc method
     * @name service.project#delete
     * @methodOf service.project
     *
     * @description
     * Deletes a specific project
     *
     * @param   {Integer} id        the id from the project
     * @param   {Object}  formData  the data from the project
     * @returns {Promise} Returns   a promise
     */
    self.delete = function (id, formData) {
        return Restangular.one('project', id).customPUT($httpParamSerializer(formData));
    }

    /**
     * @ngdoc method
     * @name service.project#getLatestProjects
     * @methodOf service.project
     *
     * @description
     * Gets the latest 6  projects
     *
     * @returns {Promise} Returns   a promise
     */
    self.getLatestProjects = function () {
        return Restangular.one('projects').get();
    }
}
