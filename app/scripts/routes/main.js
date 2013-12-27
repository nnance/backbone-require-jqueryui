/*global define*/

define([
    'jquery',
    'backbone',
    'views/main',
    'views/samples'
], function ($, Backbone, MainView, SamplesView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'showMain',
            'samples': 'showSamples'
        },

        initialize: function(options) {
            if (!options && !options.bodyView)
                throw new Error('Missing bodyView option');
            this.bodyView = options.bodyView;
        },

        showMain: function() {
            var view = new MainView();
            this.bodyView.swapView(view.render());
        },

        showSamples: function() {
            var view = new SamplesView();
            this.bodyView.swapView(view.render());
        }
    });

    return MainRouter;
});
