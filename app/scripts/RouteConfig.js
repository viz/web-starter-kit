module.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/documents', {
      templateUrl: 'document_store.html',
      controller: 'DocumentStoreCtrl' })
    .otherwise({ redirectTo: '/'});
}]);
