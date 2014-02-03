dataportal.controller('Icd10sCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
	$scope.checkedIcd10s = Global.checkedIcd10s;
	$scope.icd10s = [];

    $scope.getIcd10s = function() {
		
		$scope.icd10s = [{'number':'A00.0','fullname':'Cholera due to Vibrio cholerae 01, biovar cholerae'},
							];
        
    };

}]);
