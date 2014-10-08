/*globals inject, beforeEach, describe, it, expect, module*/
describe('xd.views.Welcome', function () {

  beforeEach( module('xd.views.Welcome'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('welcomeCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('WelcomeCtrl');
  });

});