/*global Heineken, Backbone*/

Heineken.Routers = Heineken.Routers || {};

(function () {
    'use strict';

    Heineken.Routers.AppRoutes = Backbone.Router.extend({
        routes :{
            "cities" : "cities",
            "curator" : "curator",
            "scenemap" : "scenemap"
        },
        cities : function () {
            // kick off intro code
            console.log('at login route');
            Heineken.Views.cities = new Heineken.Views.Cities();
            Heineken.Views.cities.render();
        },
        curator : function () {
            // kick off intro code
            console.log('at login route');
            Heineken.Views.curator = new Heineken.Views.Curator();
            Heineken.Views.curator.render();
        },
        scenemap : function() {
            console.log('at scenemap route');
            Heineken.Views.scenemap = new Heineken.Views.SceneMap();
            Heineken.Views.scenemap.render();

        }

    });

})();
