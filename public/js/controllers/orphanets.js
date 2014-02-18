dataportal.controller('OrphanetsCtrl', ['Global','$scope','$rootScope','$http','$templateCache','filterFilter', function (Global,$scope,$rootScope,$http,$templateCache,filterFilter) {
    
	$scope.orphanets = [];

    $scope.getOrphanets = function() {
		
		$scope.orphanets = [{'number':'ORPHA2585','fullname':'Ataxia - pancytopenia'},
							{'number':'ORPHA3128','fullname':'Sakati-Nyhan syndrome'}
							];
        
    };
    
    $scope.setItem = function(item) {

  		Global.checkedOrphanets = [item];
  		$rootScope.$emit('filtersUpdated');
  	};

}]);
