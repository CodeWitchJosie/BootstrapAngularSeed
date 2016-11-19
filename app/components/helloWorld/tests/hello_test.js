'use strict';

describe('helloWorld directive', function() {
  var compile, scope, directiveElem;

  beforeEach(function(){

    module('myApp.hello');
    module('myApp.templates');

    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });
    scope.config={
      values: []
    };

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var compiledDirective = compile(angular.element('<hello-world config="config"></hello-world>'))(scope);
    scope.$digest();
    return compiledDirective;
  }
  it('should be defined', function(){
    console.info(directiveElem)
    expect(directiveElem).toBeDefined()
  })

  it('isolated scope should have the property assigned', function () {
    var isolatedScope = directiveElem.isolateScope();

    expect(isolatedScope.config).toBeDefined();
  });

  it('config on isolated scope should be two-way bound', function(){
    var isolatedScope = directiveElem.isolateScope();

    isolatedScope.config.values = ["value1"]
    expect(scope.config.values).toBeDefined()
    expect(scope.config.values[0]).toEqual('value1')
  });
});
