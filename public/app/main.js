require.config({
  paths: {
    //vendor
    'jquery': '/javascripts/jquery-1.11.3',
    'bootstrap': '/javascripts/bootstrap',
    'common': '/javascripts/common',
    'angular': '/javascripts/angular',
    'angular-animate': '/javascripts/angular-animate',
    'angular-route': '/javascripts/angular-route',
    'ui-select': '/javascripts/select',
    'ui-bootstrap': '/javascripts/ui-bootstrap-tpls-0.13.3',
    'ng-toaster': '/javascripts/toaster',
    //js文件
    'app': '/app/app',
    'app.router': '/app/app.route'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-animate': {
      deps: ['angular'],
      exports: 'angular-animate'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'angular-route'
    },
    'ui-select': {
      deps: ['angular'],
      exports: 'ui-select'
    },
    'ui-bootstrap': {
      deps: ['angular'],
      exports: 'ui-bootstrap'
    },
    'ng-toaster': {
      deps: ['angular','angular-animate'],
      exports: 'ng-toaster'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'common': {
      deps: ['jquery'],
      exports: 'common'
    }
  }
});

require(['jquery', 'angular','common', 'bootstrap', 'app', 'app.router'],
  function (jquery, angular) {
    angular.bootstrap(document, ['myApp']);
  }
);