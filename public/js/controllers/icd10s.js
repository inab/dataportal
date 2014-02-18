dataportal.controller('Icd10sCtrl', ['Global','$scope','$rootScope','$http','$templateCache','filterFilter', function (Global,$scope,$rootScope,$http,$templateCache,filterFilter) {
    
	$scope.icd10s = [];

    $scope.getIcd10s = function() {
		
		$scope.icd10s = [{'number':'A00.0','fullname':'Cholera due to Vibrio cholerae 01, biovar cholerae'},
							];
    };
 
    $scope.setItem = function(item) {
  		Global.checkedIcd10s = [item];
  		$rootScope.$emit('filtersUpdated');
  	};
  	

}]);
