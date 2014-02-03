dataportal.controller('OrphanetsCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
	$scope.checkedOrphanets = Global.checkedOrphanets;
	$scope.orphanets = [];

    $scope.getOrphanets = function() {
		
		$scope.orphanets = [{'number':'ORPHA2585','fullname':'Ataxia - pancytopenia'},
							{'number':'ORPHA3128','fullname':'Sakati-Nyhan syndrome'}
							];
        
    };

}]);
