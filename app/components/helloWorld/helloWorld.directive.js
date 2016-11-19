'use strict';

angular.module("myApp.hello", [
    'toastr',
    'ui.bootstrap'])

.directive('helloWorld', [function(){
    return{
        templateUrl: 'components/helloWorld/helloWorld.tmpl.html',
        replace: true,
        /*
         * Only match on tags
         */
        restrict: "E",

        scope:{
            config: '='
        },
        controller: ['$scope', 'toastr', '$uibModal', function($scope, toastr, $uibModal){
            $scope.editValues = function(callback){
                var modal = $uibModal.open({
                   templateUrl: 'components/helloWorld/helloWorld.modal.tmpl.html',
                   controller: 'helloWorldModalCtrl',
                   size: 'lg',
                   resolve: {
                       values: function(){
                           return $scope.config.values
                       }
                   }
               })
                modal.result.then(function (values) { //confirm
                    $scope.config.values = values
                }, function () { //cancel
                    toastr.info("Cancelled editing values")
                })
            }
            $scope.removeValue = function(idx){
                $scope.config.values.splice(idx, 1)
            }
        }]
    }
}])

.controller('helloWorldModalCtrl', ['$scope', 'values', '$uibModalInstance',
    function($scope, values, $uibModalInstance){
        $scope.selectedValues = angular.copy(values)
        $scope.values = ["javascript", "angularJS", "jQuery", "bower", "nodeJS", "reactJS", "React Native"]
        $scope.toggleValue = function(val){
            var idx = $scope.selectedValues.indexOf(val)
            if(idx != -1){
                $scope.selectedValues.splice(idx, 1)
            } else {
                $scope.selectedValues.push(val)
            }
        }
        $scope.ok = function(){
            $uibModalInstance.close($scope.selectedValues)
        }
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel')
        }
    }
]);