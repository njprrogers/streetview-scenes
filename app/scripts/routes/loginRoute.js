/*global Heineken, Backbone*/

Heineken.Routers = Heineken.Routers || {};

(function () {
    'use strict';

    Heineken.Routers.Login = Backbone.Router.extend({
        routes :{
            "login" : "login"
        },
        login : function () {
            // kick off intro code
            console.log('at login route');
            Heineken.Views.login = new Heineken.Views.Login();
            Heineken.Views.login.render();
        }
    });

})();
