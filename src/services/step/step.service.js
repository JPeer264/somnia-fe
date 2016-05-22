/**
 * @ngdoc service
 * @name service.step
 *
 * @requires $rootScope
 * @requires Restangular
 */
angular
    .module('service.step')
    .service('step', step);

step.$inject = [
    '$rootScope',
    'Restangular',
    '$httpParamSerializer'
];

function step($rootScope, Restangular, $httpParamSerializer) {
    var self = this;

    /**
     * @ngdoc method
     * @name service.step#getAllByMilestoneId
     * @methodOf service.step
     *
     * @description
     * Get all steps by a specific milestone id
     *
     * @param   {Integer}   milestoneId the specific milestone id
     * @returns {Promise}               Returns a promise with all steps
     */
    self.getAllByMilestoneId = function(milestoneId) {
        return Restangular.one('milestone', milestoneId).customPOST($httpParamSerializer(formData));
    }

    /**
     * @ngdoc method
     * @name service.step#create
     * @methodOf service.step
     *
     * @description
     * Adds a specific step to a milestone
     *
     * @param   {Integer}   milestoneId     the milestone where the step has to be added
     * @param   {Object}    formData        the form data
     * @returns {Promise}   Returns         a promise with the callback data
     */
    self.create = function(milestoneId, formData) {
        return Restangular.one('milestone', milestoneId).one('step').customPOST($httpParamSerializer(formData));
    }

    /**
     * @ngdoc method
     * @name service.step#update
     * @methodOf service.step
     *
     * @description
     * Adds a specific step to a milestone
     *
     * @param   {Integer}   id          the milestone where the step has to be added
     * @param   {Object}    formData    the form data
     * @returns {Promise}   Returns     a promise with the callback data
     */
    self.update = function(id, formData) {
        return Restangular.one('step', id).customPUT($httpParamSerializer(formData));
    }

    /**
     * @ngdoc method
     * @name service.step#delete
     * @methodOf service.step
     *
     * @description
     * Deletes a specific step by id
     *
     * @param   {Integer} id    the specific step
     * @returns {Promise}       Returns a promise with the callback data
     */
    self.delete = function(id) {
        return Restangular.one('step', id).customDELETE();
    }
}
