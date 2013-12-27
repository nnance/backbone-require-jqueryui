/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MainView = Backbone.View.extend({
        template: JST['app/scripts/templates/main.ejs'],

        render: function() {
            this.$el.html( this.template( this ) );
            return this;
        },
    });

    return MainView;
});
