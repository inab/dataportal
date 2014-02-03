dataportal.controller('OmimsCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
	$scope.checkedOmims = Global.checkedOmims;
	$scope.omims = [];

    $scope.getOmims = function() {
		
		$scope.omims = [{'number':'108500','fullname':'EPISODIC ATAXIA, TYPE 2; EA2'},
							];
        
    };

}]);
