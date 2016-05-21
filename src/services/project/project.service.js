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
        return $timeout(function() {
            return {
                "project": {
                    "milestones": [
                        {
                            "title": "My First Milestone",
                            "dueDate": "2035-05-26T00:00:00.000Z",
                            "project": "57403c45b3833cc825ea756f",
                            "createdAt": "2016-05-21T10:48:48.643Z",
                            "updatedAt": "2016-05-21T10:48:48.643Z",
                            "id": "57403d10b4dcdca7263b20e1",
                            "done": true
                        },
                        {
                            "title": "My Second Milestone",
                            "dueDate": "2035-05-26T00:00:00.000Z",
                            "project": "57403c45b3833cc825ea756f",
                            "createdAt": "2016-05-21T10:48:52.012Z",
                            "updatedAt": "2016-05-21T10:48:52.012Z",
                            "id": "57403d14b4dcdca7263b20e2",
                            "done": false
                        },
                        {
                            "title": "My Third Milestone",
                            "dueDate": "2035-05-26T00:00:00.000Z",
                            "project": "57403c45b3833cc825ea756f",
                            "createdAt": "2016-05-21T10:48:52.012Z",
                            "updatedAt": "2016-05-21T10:48:52.012Z",
                            "id": "57403d14b4dcdca7263b20e3",
                            "done": false
                        }
                    ],
                    "owner": "573f9eb09e2c67bbe47feb87",
                    "title": "new new title",
                    "dueDate": "2003-09-17T00:00:00.000Z",
                    "createdAt": "2016-05-21T09:46:12.777Z",
                    "updatedAt": "2016-05-21T09:46:19.179Z",
                    "id": "57402e644bb5f9e40d050837",
                    "done": false
                }
            }
        }, 500);
    };

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
}
