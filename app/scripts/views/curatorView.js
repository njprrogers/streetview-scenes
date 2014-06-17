/*global Heineken, Backbone, JST*/

Heineken.Views = Heineken.Views || {};

(function () {
    'use strict';

    Heineken.Views.Curator = Backbone.View.extend({

        template: JST['app/scripts/templates/curator.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
//            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
//            this.$el.html(this.template(this.model.toJSON()));
            console.log('curator view rendered');
            $('#content').html(this.$el.html(this.template()));
            return this;
        }

    });

})();
