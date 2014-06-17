/*global Heineken, Backbone, JST*/

Heineken.Views = Heineken.Views || {};

(function () {
    'use strict';

    Heineken.Views.Login = Backbone.View.extend({

        template: JST['app/scripts/templates/login.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
//            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
//            this.$el.html(this.template(this.model.toJSON()));
            console.log('login view rendered');
            $.ajaxSetup({ cache: true });
            $.getScript('//connect.facebook.net/en_UK/all.js', function(){
                FB.init({
                    appId: '258416451012526',
                });
                $('#loginbutton,#feedbutton').removeAttr('disabled');
//                FB.getLoginStatus(updateStatusCallback);
            });
            var scene = new Heineken.Models.Map();
            scene.fetch({
                success: function (model, response, options) {
                    console.log('Success model fetch ',model, response, options);
                    debugger
                },
                error: function(model, response, options){
                    console.log('Error ', arguments);
                }
            });
            $('#content').html(this.$el.html(this.template()));
            return this;
        }

    });

})();
