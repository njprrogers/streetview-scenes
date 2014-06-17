/*global Heineken, Backbone*/

Heineken.Collections = Heineken.Collections || {};

(function () {
    'use strict';

    Heineken.Collections.Maps = Backbone.Collection.extend({

        model: Heineken.Models.Maps,
        url: 'http://localhost:8888/heineken-music/api/Scene'

    });

})();
