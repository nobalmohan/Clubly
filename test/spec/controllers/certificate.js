'use strict';

describe('Controller: CertificateCtrl', function () {

  // load the controller's module
  beforeEach(module('clublyApp'));

  var CertificateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CertificateCtrl = $controller('CertificateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
