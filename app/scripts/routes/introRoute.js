/*global Heineken, Backbone*/

Heineken.Routers = Heineken.Routers || {};

(function () {
    'use strict';

    Heineken.Routers.Intro = Backbone.Router.extend({
        routes :{
            "" : "intro",
            "/" : "intro",
            "intro" : "intro"
        },
        intro : function () {
            // kick off intro code
            console.log('beautiful intro');
            Heineken.Views.intro = new Heineken.Views.Intro();
            Heineken.Views.intro.render();
        }
    });

})();
