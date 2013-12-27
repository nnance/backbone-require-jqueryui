/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BodyView = Backbone.View.extend({

        swapView: function(view) {
            if (this.existingView) {
                this.existingView.remove();
            }
            this.$el.append(view.render().el);

            this.existingView = view;
        }

    });

    return BodyView;
});
