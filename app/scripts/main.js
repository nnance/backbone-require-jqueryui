/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jqueryui: {
            deps: ['jquery']
        },
    },
    paths: {
        modernizr: '../bower_components/modernizr/modernizr',
        jquery: '../bower_components/jquery/jquery',
        jqueryui: '../bower_components/jquery.ui/ui',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'modernizr',
    'backbone',
    'routes/main',
    'views/header',
    'views/body'
], function (Modernizr, Backbone, MainRouter, HeaderView, BodyView) {
    var header = new HeaderView({el: '.header'});
    var footer = new Backbone.View({el: '.footer'});
    var body = new BodyView({el: '#body'});
    var mainRouter = new MainRouter({bodyView: body});
    Backbone.history.start();
});
