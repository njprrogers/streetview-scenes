/*global Heineken, Backbone, JST*/

Heineken.Views = Heineken.Views || {};

(function () {
    'use strict';

    Heineken.Views.Cities = Backbone.View.extend({

        template: JST['app/scripts/templates/cities.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "click .city-button" : "cityClick"
        },

        initialize: function () {
//            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
//            this.$el.html(this.template(this.model.toJSON()));
            console.log('login view rendered');

            $('#content').html(this.$el.html(this.template()));
            return this;
        },

        cityClick : function () {
            console.log('Scene Map');
            Heineken.Routers.appRoutes.navigate("scenemap", {trigger: true});
        }

    });

})();
