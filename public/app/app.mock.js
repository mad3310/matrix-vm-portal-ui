define(['app'], function (app) {
  app.config(['$httpProvider', 'ngRapProvider', function (httpProvider, ngRapProvider) {
    // replace nnn with your project id
    ngRapProvider.script = 'http://rap.alibaba-inc.com/rap.plugin.js?projectId=nnn';
    ngRapProvider.enable({
      mode: 3
    });
    httpProvider.interceptors.push('rapMockInterceptor');
  }]);
});


