/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'jqueryui/jquery.ui.core',
    'jqueryui/jquery.ui.widget',
    'jqueryui/jquery.ui.button',
    'jqueryui/jquery.ui.datepicker',
    'jqueryui/jquery.ui.spinner'
], function ($, _, Backbone, JST, JQCore, JQWidget, JQButton, JQDatePicker, JQSpinner) {
    'use strict';

    var SamplesView = Backbone.View.extend({
        template: JST['app/scripts/templates/samples.ejs'],

        render: function() {
            this.$el.html( this.template( this ) );
            this.$('#datepicker').datepicker();
            this.$('#spinner').spinner();
            return this;
        },

    });

    return SamplesView;
});
