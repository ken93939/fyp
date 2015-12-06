(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Member
 * @header lbServices.Member
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Member` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Member",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Members/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__findById__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__updateById__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.owns.findById() instead.
        "prototype$__findById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.destroyById() instead.
        "prototype$__destroyById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.updateById() instead.
        "prototype$__updateById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.requests.findById() instead.
        "prototype$__findById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.destroyById() instead.
        "prototype$__destroyById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.updateById() instead.
        "prototype$__updateById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__get__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries accessTokens of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Members/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__create__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Members/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__delete__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Members/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__count__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Counts accessTokens of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Members/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Member.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/Members/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/Members/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/Members/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/Members/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Member.owns() instead.
        "prototype$__get__owns": {
          isArray: true,
          url: urlBase + "/Members/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.create() instead.
        "prototype$__create__owns": {
          url: urlBase + "/Members/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Member.owns.destroyAll() instead.
        "prototype$__delete__owns": {
          url: urlBase + "/Members/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.count() instead.
        "prototype$__count__owns": {
          url: urlBase + "/Members/:id/owns/count",
          method: "GET"
        },

        // INTERNAL. Use Member.requests() instead.
        "prototype$__get__requests": {
          isArray: true,
          url: urlBase + "/Members/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/Members/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.destroyAll() instead.
        "prototype$__delete__requests": {
          url: urlBase + "/Members/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.count() instead.
        "prototype$__count__requests": {
          url: urlBase + "/Members/:id/requests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#create
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#createMany
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#upsert
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Members",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#exists
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Members/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#findById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Members/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#find
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Members",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#findOne
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Members/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#updateAll
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Members/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#deleteById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Members/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#count
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Members/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$updateAttributes
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Members/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#createChangeStream
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Members/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#login
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Members/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#logout
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Members/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#confirm
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Members/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#resetPassword
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Members/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#register
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "register": {
          url: urlBase + "/Members/register",
          method: "POST"
        },

        // INTERNAL. Use Ride.member() instead.
        "::get::Ride::member": {
          url: urlBase + "/Rides/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Own.member() instead.
        "::get::Own::member": {
          url: urlBase + "/Owns/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Request.memberId() instead.
        "::get::request::memberId": {
          url: urlBase + "/requests/:id/memberId",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#getCurrent
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Members" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Member#updateOrCreate
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Member#update
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Member#destroyById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Member#removeById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Member#getCachedCurrent
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Member#login} or
         * {@link lbServices.Member#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Member instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Member#isAuthenticated
         * @methodOf lbServices.Member
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Member#getCurrentId
         * @methodOf lbServices.Member
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Member#modelName
    * @propertyOf lbServices.Member
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Member`.
    */
    R.modelName = "Member";

    /**
     * @ngdoc object
     * @name lbServices.Member.rides
     * @header lbServices.Member.rides
     * @object
     * @description
     *
     * The object `Member.rides` groups methods
     * manipulating `Ride` instances related to `Member`.
     *
     * Call {@link lbServices.Member#rides Member.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#rides
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries rides of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#count
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Counts rides of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#create
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#createMany
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#destroyAll
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#destroyById
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#findById
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#updateById
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::Member::rides"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Member.owns
     * @header lbServices.Member.owns
     * @object
     * @description
     *
     * The object `Member.owns` groups methods
     * manipulating `Own` instances related to `Member`.
     *
     * Call {@link lbServices.Member#owns Member.owns()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#owns
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries owns of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#count
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Counts owns of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.owns.count = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::count::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#create
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.create = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::create::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#createMany
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.createMany = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::createMany::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#destroyAll
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Deletes all owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyAll = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::delete::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#destroyById
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Delete a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::destroyById::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#findById
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Find a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.findById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::findById::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#updateById
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Update a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.updateById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::updateById::Member::owns"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Member.requests
     * @header lbServices.Member.requests
     * @object
     * @description
     *
     * The object `Member.requests` groups methods
     * manipulating `Request` instances related to `Member`.
     *
     * Call {@link lbServices.Member#requests Member.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#requests
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries requests of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#count
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Counts requests of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requests.count = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::count::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#create
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#createMany
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#destroyAll
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Deletes all requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyAll = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::delete::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#destroyById
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Delete a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroyById::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#findById
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Find a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.findById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::findById::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#updateById
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Update a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.updateById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::updateById::Member::requests"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Vehicle
 * @header lbServices.Vehicle
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Vehicle` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Vehicle",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Vehicles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Vehicle.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vehicle.owns.findById() instead.
        "prototype$__findById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.destroyById() instead.
        "prototype$__destroyById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.updateById() instead.
        "prototype$__updateById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vehicle.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/Vehicles/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/Vehicles/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/Vehicles/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns() instead.
        "prototype$__get__owns": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.create() instead.
        "prototype$__create__owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.owns.destroyAll() instead.
        "prototype$__delete__owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.count() instead.
        "prototype$__count__owns": {
          url: urlBase + "/Vehicles/:id/owns/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#create
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Vehicles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#createMany
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Vehicles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#upsert
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Vehicles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#exists
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Vehicles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#findById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Vehicles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#find
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Vehicles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#findOne
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Vehicles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#updateAll
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Vehicles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#deleteById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Vehicles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#count
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Vehicles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#prototype$updateAttributes
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Vehicles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#createChangeStream
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Vehicles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ride.vehicle() instead.
        "::get::Ride::vehicle": {
          url: urlBase + "/Rides/:id/vehicle",
          method: "GET"
        },

        // INTERNAL. Use Own.vehicle() instead.
        "::get::Own::vehicle": {
          url: urlBase + "/Owns/:id/vehicle",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Vehicle#updateOrCreate
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#update
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#destroyById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#removeById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Vehicle#modelName
    * @propertyOf lbServices.Vehicle
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Vehicle`.
    */
    R.modelName = "Vehicle";

    /**
     * @ngdoc object
     * @name lbServices.Vehicle.rides
     * @header lbServices.Vehicle.rides
     * @object
     * @description
     *
     * The object `Vehicle.rides` groups methods
     * manipulating `Ride` instances related to `Vehicle`.
     *
     * Call {@link lbServices.Vehicle#rides Vehicle.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Vehicle#rides
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Queries rides of Vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#count
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Counts rides of Vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#create
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#createMany
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#destroyAll
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#destroyById
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#findById
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::Vehicle::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.rides#updateById
         * @methodOf lbServices.Vehicle.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::Vehicle::rides"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Vehicle.owns
     * @header lbServices.Vehicle.owns
     * @object
     * @description
     *
     * The object `Vehicle.owns` groups methods
     * manipulating `Own` instances related to `Vehicle`.
     *
     * Call {@link lbServices.Vehicle#owns Vehicle.owns()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Vehicle#owns
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Queries owns of Vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#count
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Counts owns of Vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.owns.count = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::count::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#create
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.create = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::create::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#createMany
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.createMany = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::createMany::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#destroyAll
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Deletes all owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyAll = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::delete::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#destroyById
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Delete a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::destroyById::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#findById
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Find a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.findById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::findById::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#updateById
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Update a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.updateById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::updateById::Vehicle::owns"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Ride
 * @header lbServices.Ride
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ride` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ride",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Rides/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Ride.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/Rides/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Ride.vehicle() instead.
        "prototype$__get__vehicle": {
          url: urlBase + "/Rides/:id/vehicle",
          method: "GET"
        },

        // INTERNAL. Use Ride.own() instead.
        "prototype$__get__own": {
          url: urlBase + "/Rides/:id/own",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.findById() instead.
        "prototype$__findById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.destroyById() instead.
        "prototype$__destroyById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.updateById() instead.
        "prototype$__updateById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.pickup() instead.
        "prototype$__get__pickup": {
          url: urlBase + "/Rides/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use Ride.destination() instead.
        "prototype$__get__destination": {
          url: urlBase + "/Rides/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins() instead.
        "prototype$__get__joins": {
          isArray: true,
          url: urlBase + "/Rides/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.create() instead.
        "prototype$__create__joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.destroyAll() instead.
        "prototype$__delete__joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.count() instead.
        "prototype$__count__joins": {
          url: urlBase + "/Rides/:id/joins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#create
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Rides",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#createMany
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Rides",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#upsert
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Rides",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#exists
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Rides/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#findById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Rides/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#find
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Rides",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#findOne
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Rides/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#updateAll
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Rides/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#deleteById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Rides/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#count
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#prototype$updateAttributes
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Rides/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#createChangeStream
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Rides/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#addRide
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "addRide": {
          url: urlBase + "/Rides/addRide",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.findById() instead.
        "::findById::Member::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.destroyById() instead.
        "::destroyById::Member::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.updateById() instead.
        "::updateById::Member::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.rides() instead.
        "::get::Member::rides": {
          isArray: true,
          url: urlBase + "/Members/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.create() instead.
        "::create::Member::rides": {
          url: urlBase + "/Members/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.createMany() instead.
        "::createMany::Member::rides": {
          isArray: true,
          url: urlBase + "/Members/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.destroyAll() instead.
        "::delete::Member::rides": {
          url: urlBase + "/Members/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.count() instead.
        "::count::Member::rides": {
          url: urlBase + "/Members/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.rides.findById() instead.
        "::findById::Vehicle::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.rides.destroyById() instead.
        "::destroyById::Vehicle::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.rides.updateById() instead.
        "::updateById::Vehicle::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vehicle.rides() instead.
        "::get::Vehicle::rides": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.rides.create() instead.
        "::create::Vehicle::rides": {
          url: urlBase + "/Vehicles/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.rides.createMany() instead.
        "::createMany::Vehicle::rides": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.rides.destroyAll() instead.
        "::delete::Vehicle::rides": {
          url: urlBase + "/Vehicles/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.rides.count() instead.
        "::count::Vehicle::rides": {
          url: urlBase + "/Vehicles/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.findById() instead.
        "::findById::Own::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.destroyById() instead.
        "::destroyById::Own::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.updateById() instead.
        "::updateById::Own::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Own.rides() instead.
        "::get::Own::rides": {
          isArray: true,
          url: urlBase + "/Owns/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.create() instead.
        "::create::Own::rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Own.rides.createMany() instead.
        "::createMany::Own::rides": {
          isArray: true,
          url: urlBase + "/Owns/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Own.rides.destroyAll() instead.
        "::delete::Own::rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.count() instead.
        "::count::Own::rides": {
          url: urlBase + "/Owns/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Join.ride() instead.
        "::get::Join::ride": {
          url: urlBase + "/Joins/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.findById() instead.
        "::findById::pickup::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.destroyById() instead.
        "::destroyById::pickup::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.updateById() instead.
        "::updateById::pickup::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.rides() instead.
        "::get::pickup::rides": {
          isArray: true,
          url: urlBase + "/pickups/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.create() instead.
        "::create::pickup::rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Pickup.rides.createMany() instead.
        "::createMany::pickup::rides": {
          isArray: true,
          url: urlBase + "/pickups/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Pickup.rides.destroyAll() instead.
        "::delete::pickup::rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.count() instead.
        "::count::pickup::rides": {
          url: urlBase + "/pickups/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.findById() instead.
        "::findById::destination::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.destroyById() instead.
        "::destroyById::destination::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.updateById() instead.
        "::updateById::destination::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.rides() instead.
        "::get::destination::rides": {
          isArray: true,
          url: urlBase + "/destinations/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.create() instead.
        "::create::destination::rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Destination.rides.createMany() instead.
        "::createMany::destination::rides": {
          isArray: true,
          url: urlBase + "/destinations/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Destination.rides.destroyAll() instead.
        "::delete::destination::rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.count() instead.
        "::count::destination::rides": {
          url: urlBase + "/destinations/:id/rides/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Ride#updateOrCreate
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Ride#update
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Ride#destroyById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Ride#removeById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Ride#modelName
    * @propertyOf lbServices.Ride
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ride`.
    */
    R.modelName = "Ride";


        /**
         * @ngdoc method
         * @name lbServices.Ride#member
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Ride::member"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#vehicle
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R.vehicle = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::Ride::vehicle"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#own
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.own = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::Ride::own"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Ride.joins
     * @header lbServices.Ride.joins
     * @object
     * @description
     *
     * The object `Ride.joins` groups methods
     * manipulating `Join` instances related to `Ride`.
     *
     * Call {@link lbServices.Ride#joins Ride.joins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Ride#joins
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Queries joins of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#count
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Counts joins of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.joins.count = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::count::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#create
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#createMany
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#destroyAll
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Deletes all joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyAll = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::delete::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#destroyById
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Delete a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroyById::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#findById
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Find a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.findById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::findById::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#updateById
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Update a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.updateById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::updateById::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#pickup
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R.pickup = function() {
          var TargetResource = $injector.get("Pickup");
          var action = TargetResource["::get::Ride::pickup"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#destination
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R.destination = function() {
          var TargetResource = $injector.get("Destination");
          var action = TargetResource["::get::Ride::destination"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Own
 * @header lbServices.Own
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Own` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Own",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Owns/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Own.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/Owns/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Own.vehicle() instead.
        "prototype$__get__vehicle": {
          url: urlBase + "/Owns/:id/vehicle",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Own.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/Owns/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Own.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/Owns/:id/rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#create
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Owns",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#createMany
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Owns",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#upsert
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Owns",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#exists
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Owns/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#findById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Owns/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#find
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Owns",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#findOne
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Owns/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#updateAll
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Owns/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#deleteById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Owns/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#count
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Owns/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#prototype$updateAttributes
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Owns/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#createChangeStream
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Owns/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#getVehicle
         * @methodOf lbServices.Own
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `vehicle` – `{object=}` - 
         */
        "getVehicle": {
          url: urlBase + "/Owns/getVehicle",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.findById() instead.
        "::findById::Member::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.destroyById() instead.
        "::destroyById::Member::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.updateById() instead.
        "::updateById::Member::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.owns() instead.
        "::get::Member::owns": {
          isArray: true,
          url: urlBase + "/Members/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.create() instead.
        "::create::Member::owns": {
          url: urlBase + "/Members/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Member.owns.createMany() instead.
        "::createMany::Member::owns": {
          isArray: true,
          url: urlBase + "/Members/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Member.owns.destroyAll() instead.
        "::delete::Member::owns": {
          url: urlBase + "/Members/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.count() instead.
        "::count::Member::owns": {
          url: urlBase + "/Members/:id/owns/count",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.findById() instead.
        "::findById::Vehicle::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.destroyById() instead.
        "::destroyById::Vehicle::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.updateById() instead.
        "::updateById::Vehicle::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vehicle.owns() instead.
        "::get::Vehicle::owns": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.create() instead.
        "::create::Vehicle::owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.owns.createMany() instead.
        "::createMany::Vehicle::owns": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.owns.destroyAll() instead.
        "::delete::Vehicle::owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.count() instead.
        "::count::Vehicle::owns": {
          url: urlBase + "/Vehicles/:id/owns/count",
          method: "GET"
        },

        // INTERNAL. Use Ride.own() instead.
        "::get::Ride::own": {
          url: urlBase + "/Rides/:id/own",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Own#updateOrCreate
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Own#update
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Own#destroyById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Own#removeById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Own#modelName
    * @propertyOf lbServices.Own
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Own`.
    */
    R.modelName = "Own";


        /**
         * @ngdoc method
         * @name lbServices.Own#member
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Own::member"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own#vehicle
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Fetches belongsTo relation vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R.vehicle = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::Own::vehicle"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Own.rides
     * @header lbServices.Own.rides
     * @object
     * @description
     *
     * The object `Own.rides` groups methods
     * manipulating `Ride` instances related to `Own`.
     *
     * Call {@link lbServices.Own#rides Own.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Own#rides
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Queries rides of Own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#count
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Counts rides of Own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#create
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#createMany
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#destroyAll
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#destroyById
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#findById
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#updateById
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::Own::rides"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Join
 * @header lbServices.Join
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Join` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Join",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Joins/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Join.ride() instead.
        "prototype$__get__ride": {
          url: urlBase + "/Joins/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use Join.requests() instead.
        "prototype$__get__requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Join.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Join.requests.update() instead.
        "prototype$__update__requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "PUT"
        },

        // INTERNAL. Use Join.requests.destroy() instead.
        "prototype$__destroy__requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Join.icon() instead.
        "prototype$__get__icon": {
          url: urlBase + "/Joins/:id/icon",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#create
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Joins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#createMany
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Joins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#upsert
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Joins",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#exists
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Joins/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#findById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Joins/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#find
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Joins",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#findOne
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Joins/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#updateAll
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Joins/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#deleteById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Joins/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#count
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Joins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#prototype$updateAttributes
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Joins/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#createChangeStream
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Joins/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.findById() instead.
        "::findById::Ride::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.destroyById() instead.
        "::destroyById::Ride::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.updateById() instead.
        "::updateById::Ride::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.joins() instead.
        "::get::Ride::joins": {
          isArray: true,
          url: urlBase + "/Rides/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.create() instead.
        "::create::Ride::joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.createMany() instead.
        "::createMany::Ride::joins": {
          isArray: true,
          url: urlBase + "/Rides/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.destroyAll() instead.
        "::delete::Ride::joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.count() instead.
        "::count::Ride::joins": {
          url: urlBase + "/Rides/:id/joins/count",
          method: "GET"
        },

        // INTERNAL. Use Request.joins() instead.
        "::get::request::joins": {
          url: urlBase + "/requests/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Request.joins.create() instead.
        "::create::request::joins": {
          url: urlBase + "/requests/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Request.joins.createMany() instead.
        "::createMany::request::joins": {
          isArray: true,
          url: urlBase + "/requests/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Request.joins.update() instead.
        "::update::request::joins": {
          url: urlBase + "/requests/:id/joins",
          method: "PUT"
        },

        // INTERNAL. Use Request.joins.destroy() instead.
        "::destroy::request::joins": {
          url: urlBase + "/requests/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.findById() instead.
        "::findById::Icon::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.destroyById() instead.
        "::destroyById::Icon::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.updateById() instead.
        "::updateById::Icon::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Icon.joins() instead.
        "::get::Icon::joins": {
          isArray: true,
          url: urlBase + "/Icons/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.create() instead.
        "::create::Icon::joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Icon.joins.createMany() instead.
        "::createMany::Icon::joins": {
          isArray: true,
          url: urlBase + "/Icons/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Icon.joins.destroyAll() instead.
        "::delete::Icon::joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.count() instead.
        "::count::Icon::joins": {
          url: urlBase + "/Icons/:id/joins/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Join#updateOrCreate
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Join#update
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Join#destroyById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Join#removeById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Join#modelName
    * @propertyOf lbServices.Join
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Join`.
    */
    R.modelName = "Join";


        /**
         * @ngdoc method
         * @name lbServices.Join#ride
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Fetches belongsTo relation ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.ride = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Join::ride"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Join.requests
     * @header lbServices.Join.requests
     * @object
     * @description
     *
     * The object `Join.requests` groups methods
     * manipulating `Request` instances related to `Join`.
     *
     * Call {@link lbServices.Join#requests Join.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Join#requests
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Fetches hasOne relation requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::Join::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.requests#create
         * @methodOf lbServices.Join.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::Join::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.requests#createMany
         * @methodOf lbServices.Join.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::Join::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.requests#destroy
         * @methodOf lbServices.Join.requests
         *
         * @description
         *
         * Deletes requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroy = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroy::Join::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.requests#update
         * @methodOf lbServices.Join.requests
         *
         * @description
         *
         * Update requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.update = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::update::Join::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join#icon
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Fetches belongsTo relation icon.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        R.icon = function() {
          var TargetResource = $injector.get("Icon");
          var action = TargetResource["::get::Join::icon"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Request
 * @header lbServices.Request
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Request` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Request",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/requests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Request.memberId() instead.
        "prototype$__get__memberId": {
          url: urlBase + "/requests/:id/memberId",
          method: "GET"
        },

        // INTERNAL. Use Request.joins() instead.
        "prototype$__get__joins": {
          url: urlBase + "/requests/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Request.joins.create() instead.
        "prototype$__create__joins": {
          url: urlBase + "/requests/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Request.joins.update() instead.
        "prototype$__update__joins": {
          url: urlBase + "/requests/:id/joins",
          method: "PUT"
        },

        // INTERNAL. Use Request.joins.destroy() instead.
        "prototype$__destroy__joins": {
          url: urlBase + "/requests/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Request.pickup() instead.
        "prototype$__get__pickup": {
          url: urlBase + "/requests/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use Request.destination() instead.
        "prototype$__get__destination": {
          url: urlBase + "/requests/:id/destination",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#create
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/requests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#createMany
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/requests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#upsert
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/requests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#exists
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/requests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#findById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/requests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#find
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/requests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#findOne
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/requests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#updateAll
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/requests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#deleteById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/requests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#count
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/requests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#prototype$updateAttributes
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/requests/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#createChangeStream
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/requests/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#addRequest
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "addRequest": {
          url: urlBase + "/requests/addRequest",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.findById() instead.
        "::findById::Member::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.destroyById() instead.
        "::destroyById::Member::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.updateById() instead.
        "::updateById::Member::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.requests() instead.
        "::get::Member::requests": {
          isArray: true,
          url: urlBase + "/Members/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.create() instead.
        "::create::Member::requests": {
          url: urlBase + "/Members/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.createMany() instead.
        "::createMany::Member::requests": {
          isArray: true,
          url: urlBase + "/Members/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.destroyAll() instead.
        "::delete::Member::requests": {
          url: urlBase + "/Members/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.count() instead.
        "::count::Member::requests": {
          url: urlBase + "/Members/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Join.requests() instead.
        "::get::Join::requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Join.requests.create() instead.
        "::create::Join::requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Join.requests.createMany() instead.
        "::createMany::Join::requests": {
          isArray: true,
          url: urlBase + "/Joins/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Join.requests.update() instead.
        "::update::Join::requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "PUT"
        },

        // INTERNAL. Use Join.requests.destroy() instead.
        "::destroy::Join::requests": {
          url: urlBase + "/Joins/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.findById() instead.
        "::findById::pickup::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.destroyById() instead.
        "::destroyById::pickup::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.updateById() instead.
        "::updateById::pickup::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.requests() instead.
        "::get::pickup::requests": {
          isArray: true,
          url: urlBase + "/pickups/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.create() instead.
        "::create::pickup::requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Pickup.requests.createMany() instead.
        "::createMany::pickup::requests": {
          isArray: true,
          url: urlBase + "/pickups/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Pickup.requests.destroyAll() instead.
        "::delete::pickup::requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.count() instead.
        "::count::pickup::requests": {
          url: urlBase + "/pickups/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.findById() instead.
        "::findById::destination::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.destroyById() instead.
        "::destroyById::destination::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.updateById() instead.
        "::updateById::destination::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.requests() instead.
        "::get::destination::requests": {
          isArray: true,
          url: urlBase + "/destinations/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.create() instead.
        "::create::destination::requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Destination.requests.createMany() instead.
        "::createMany::destination::requests": {
          isArray: true,
          url: urlBase + "/destinations/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Destination.requests.destroyAll() instead.
        "::delete::destination::requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.count() instead.
        "::count::destination::requests": {
          url: urlBase + "/destinations/:id/requests/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Request#updateOrCreate
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Request#update
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Request#destroyById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Request#removeById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Request#modelName
    * @propertyOf lbServices.Request
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Request`.
    */
    R.modelName = "Request";


        /**
         * @ngdoc method
         * @name lbServices.Request#memberId
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches belongsTo relation memberId.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.memberId = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::request::memberId"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Request.joins
     * @header lbServices.Request.joins
     * @object
     * @description
     *
     * The object `Request.joins` groups methods
     * manipulating `Join` instances related to `Request`.
     *
     * Call {@link lbServices.Request#joins Request.joins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Request#joins
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches hasOne relation joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::request::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.joins#create
         * @methodOf lbServices.Request.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::request::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.joins#createMany
         * @methodOf lbServices.Request.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::request::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.joins#destroy
         * @methodOf lbServices.Request.joins
         *
         * @description
         *
         * Deletes joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroy = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroy::request::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.joins#update
         * @methodOf lbServices.Request.joins
         *
         * @description
         *
         * Update joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.update = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::update::request::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request#pickup
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches belongsTo relation pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R.pickup = function() {
          var TargetResource = $injector.get("Pickup");
          var action = TargetResource["::get::request::pickup"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request#destination
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches belongsTo relation destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R.destination = function() {
          var TargetResource = $injector.get("Destination");
          var action = TargetResource["::get::request::destination"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Pickup
 * @header lbServices.Pickup
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pickup` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Pickup",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/pickups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Pickup.requests.findById() instead.
        "prototype$__findById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.destroyById() instead.
        "prototype$__destroyById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.updateById() instead.
        "prototype$__updateById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.requests() instead.
        "prototype$__get__requests": {
          isArray: true,
          url: urlBase + "/pickups/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Pickup.requests.destroyAll() instead.
        "prototype$__delete__requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.count() instead.
        "prototype$__count__requests": {
          url: urlBase + "/pickups/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/pickups/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Pickup.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/pickups/:id/rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#create
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/pickups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#createMany
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/pickups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#upsert
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/pickups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#exists
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/pickups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#findById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/pickups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#find
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/pickups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#findOne
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/pickups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#updateAll
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/pickups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#deleteById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/pickups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#count
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/pickups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#prototype$updateAttributes
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/pickups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#createChangeStream
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/pickups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ride.pickup() instead.
        "::get::Ride::pickup": {
          url: urlBase + "/Rides/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use Request.pickup() instead.
        "::get::request::pickup": {
          url: urlBase + "/requests/:id/pickup",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Pickup#updateOrCreate
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Pickup#update
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Pickup#destroyById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Pickup#removeById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Pickup#modelName
    * @propertyOf lbServices.Pickup
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Pickup`.
    */
    R.modelName = "Pickup";

    /**
     * @ngdoc object
     * @name lbServices.Pickup.requests
     * @header lbServices.Pickup.requests
     * @object
     * @description
     *
     * The object `Pickup.requests` groups methods
     * manipulating `Request` instances related to `Pickup`.
     *
     * Call {@link lbServices.Pickup#requests Pickup.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Pickup#requests
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Queries requests of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#count
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Counts requests of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requests.count = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::count::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#create
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#createMany
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#destroyAll
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Deletes all requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyAll = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::delete::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#destroyById
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Delete a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroyById::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#findById
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Find a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.findById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::findById::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#updateById
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Update a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.updateById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::updateById::pickup::requests"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Pickup.rides
     * @header lbServices.Pickup.rides
     * @object
     * @description
     *
     * The object `Pickup.rides` groups methods
     * manipulating `Ride` instances related to `Pickup`.
     *
     * Call {@link lbServices.Pickup#rides Pickup.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Pickup#rides
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Queries rides of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#count
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Counts rides of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#create
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#createMany
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#destroyAll
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#destroyById
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#findById
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#updateById
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::pickup::rides"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Destination
 * @header lbServices.Destination
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Destination` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Destination",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/destinations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Destination.requests.findById() instead.
        "prototype$__findById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.destroyById() instead.
        "prototype$__destroyById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.updateById() instead.
        "prototype$__updateById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.requests() instead.
        "prototype$__get__requests": {
          isArray: true,
          url: urlBase + "/destinations/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Destination.requests.destroyAll() instead.
        "prototype$__delete__requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.count() instead.
        "prototype$__count__requests": {
          url: urlBase + "/destinations/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/destinations/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Destination.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/destinations/:id/rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#create
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/destinations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#createMany
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/destinations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#upsert
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/destinations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#exists
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/destinations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#findById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/destinations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#find
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/destinations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#findOne
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/destinations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#updateAll
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/destinations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#deleteById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/destinations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#count
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/destinations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#prototype$updateAttributes
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/destinations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#createChangeStream
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/destinations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ride.destination() instead.
        "::get::Ride::destination": {
          url: urlBase + "/Rides/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use Request.destination() instead.
        "::get::request::destination": {
          url: urlBase + "/requests/:id/destination",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Destination#updateOrCreate
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Destination#update
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Destination#destroyById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Destination#removeById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Destination#modelName
    * @propertyOf lbServices.Destination
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Destination`.
    */
    R.modelName = "Destination";

    /**
     * @ngdoc object
     * @name lbServices.Destination.requests
     * @header lbServices.Destination.requests
     * @object
     * @description
     *
     * The object `Destination.requests` groups methods
     * manipulating `Request` instances related to `Destination`.
     *
     * Call {@link lbServices.Destination#requests Destination.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Destination#requests
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Queries requests of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#count
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Counts requests of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requests.count = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::count::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#create
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#createMany
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#destroyAll
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Deletes all requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyAll = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::delete::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#destroyById
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Delete a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroyById::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#findById
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Find a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.findById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::findById::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#updateById
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Update a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.updateById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::updateById::destination::requests"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Destination.rides
     * @header lbServices.Destination.rides
     * @object
     * @description
     *
     * The object `Destination.rides` groups methods
     * manipulating `Ride` instances related to `Destination`.
     *
     * Call {@link lbServices.Destination#rides Destination.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Destination#rides
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Queries rides of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#count
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Counts rides of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#create
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#createMany
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#destroyAll
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#destroyById
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#findById
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#updateById
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::destination::rides"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Icon
 * @header lbServices.Icon
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Icon` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Icon",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Icons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Icon.joins.findById() instead.
        "prototype$__findById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.destroyById() instead.
        "prototype$__destroyById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.updateById() instead.
        "prototype$__updateById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Icon.joins() instead.
        "prototype$__get__joins": {
          isArray: true,
          url: urlBase + "/Icons/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.create() instead.
        "prototype$__create__joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Icon.joins.destroyAll() instead.
        "prototype$__delete__joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.count() instead.
        "prototype$__count__joins": {
          url: urlBase + "/Icons/:id/joins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#create
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Icons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#createMany
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Icons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#upsert
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Icons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#exists
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Icons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#findById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Icons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#find
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Icons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#findOne
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Icons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#updateAll
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Icons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#deleteById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Icons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#count
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Icons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#prototype$updateAttributes
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Icons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#createChangeStream
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Icons/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Join.icon() instead.
        "::get::Join::icon": {
          url: urlBase + "/Joins/:id/icon",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Icon#updateOrCreate
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Icon#update
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Icon#destroyById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Icon#removeById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Icon#modelName
    * @propertyOf lbServices.Icon
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Icon`.
    */
    R.modelName = "Icon";

    /**
     * @ngdoc object
     * @name lbServices.Icon.joins
     * @header lbServices.Icon.joins
     * @object
     * @description
     *
     * The object `Icon.joins` groups methods
     * manipulating `Join` instances related to `Icon`.
     *
     * Call {@link lbServices.Icon#joins Icon.joins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Icon#joins
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Queries joins of Icon.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#count
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Counts joins of Icon.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.joins.count = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::count::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#create
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#createMany
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#destroyAll
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Deletes all joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyAll = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::delete::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#destroyById
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Delete a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroyById::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#findById
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Find a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.findById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::findById::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#updateById
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Update a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.updateById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::updateById::Icon::joins"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
