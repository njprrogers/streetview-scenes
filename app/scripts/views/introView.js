/*global Heineken, Backbone, JST*/

Heineken.Views = Heineken.Views || {};

(function () {
    'use strict';

    Heineken.Views.Intro = Backbone.View.extend({

        template: JST['app/scripts/templates/intro.hbs'],

        tagName: 'div',

//        id: 'content',

        className: 'content',

        events: {},

        initialize: function () {
            console.log('intro view intialized');
//            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log('intro view rendered');


            $('#content').html(this.$el.html(this.template()));
            return this;
        }

    });

})();
