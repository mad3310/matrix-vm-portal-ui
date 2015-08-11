require.config({
    paths: {
        //vendor
        'jquery': '/javascripts/jquery-1.11.3.js',
        'angular': '/javascripts/angular.js',
        'bootstrap': '/javascripts/bootstrap.js',
        'angular-route': '/javascripts/angular-route.js',
        //js文件
        'app': '/app/app.js',
        'app.router': '/app/app.route.js'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

require([ 'jquery','angular','bootstrap','app','app.router'],
    function(jquery,angular){
        angular.bootstrap(document,['myApp']);
    }
);