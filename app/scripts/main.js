/*global Heineken, $*/


window.Heineken = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    Heineken.init();
    Heineken.Routers.intro = new Heineken.Routers.Intro();
    Heineken.Routers.login = new Heineken.Routers.Login();
    Heineken.Routers.appRoutes = new Heineken.Routers.AppRoutes();
    Backbone.history.start();

});
