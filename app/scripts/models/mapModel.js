/*global Heineken, Backbone*/

Heineken.Models = Heineken.Models || {};

(function () {
    'use strict';

    Heineken.Models.Map = Backbone.Model.extend({

        url: 'http://localhost:9000/heineken-music/api/Scene',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
