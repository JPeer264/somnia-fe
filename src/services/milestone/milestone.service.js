/**
 * @ngdoc service
 * @name service.milestone
 *
 * @requires $rootScope
 * @requires Restangular
 */
angular
    .module('service.milestone')
    .service('milestone', milestone);

milestone.$inject = [
    '$rootScope',
    '$httpParamSerializer',
    'Restangular'
];

function milestone($rootScope, $httpParamSerializer, Restangular) {
    var self = this;

    /**
     * @ngdoc method
     * @name service.milestone#get
     * @methodOf service.milestone
     *
     * @description
     * Get a specific milestone with additional data
     *
     * @param   {Integer} id    the specific milestone id
     * @returns {Promise}       Returns a promise
     */
    self.get = function(id) {
        return Restangular.one('milestone', id).get();
    }

    /**
     * @ngdoc method
     * @name service.milestone#create
     * @methodOf service.milestone
     *
     * @description
     * Adds a specific milestone to a project
     *
     * @param   {Integer}   projectId   the project where the milestone has to be added
     * @param   {Object}    formData    the form data
     * @returns {Promise}   Returns     a promise with the callback data
     */
    self.create = function(projectId, formData) {
        return Restangular.one('project', projectId).one('milestone').customPOST($httpParamSerializer(formData));
    }

    /**
     * @ngdoc method
     * @name service.milestone#update
     * @methodOf service.milestone
     *
     * @description
     * Update a specific milestone
     *
     * @param   {Integer}   id          the specific milestone id
     * @param   {Object}    formData    the form data
     * @returns {Promise}   Returns     a promise with the callback data
     */
    self.update = function(id, formData) {
        return Restangular.one('milestone', id).customPUT($httpParamSerializer(formData));
    }

    /**
     * @ngdoc method
     * @name service.milestone#delete
     * @methodOf service.milestone
     *
     * @description
     * Deletes a specific milestone by id
     *
     * @param   {Integer} id    the specific milestone
     * @returns {Promise}       Returns a promise with the callback data
     */
    self.delete = function(id) {
        return Restangular.one('milestone', id).customDELETE();
    }
}
