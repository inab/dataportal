dataportal.controller('OmimsCtrl', ['Global','$scope','$rootScope','$http','$templateCache','filterFilter', function (Global,$scope,$rootScope,$http,$templateCache,filterFilter) {
    
	$scope.omims = [];

    $scope.getOmims = function() {
		
		$scope.omims = [{'number':'108500','fullname':'EPISODIC ATAXIA, TYPE 2; EA2'},
							];
        
    };
    
     $scope.setItem = function(item) {

  		Global.checkedOmims = [item];
  		$rootScope.$emit('filtersUpdated');
  	};

}]);
