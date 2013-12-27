/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        initialize: function() {
            this.listenTo(Backbone.history, 'route', this.routeSelected);
        },

        routeSelected: function(router, route, params) {
            var href = "#";
            if (Backbone.history.location.hash.length > 0)
                href = Backbone.history.location.hash;

            $('.nav li').removeClass('active');
            $('.nav li a[href="' + href + '"]').parent().addClass('active');
        }
    });

    return HeaderView;
});
