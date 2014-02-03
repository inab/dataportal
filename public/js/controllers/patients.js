dataportal.controller('PatientsCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
    $scope.checkedInstitutions  	= Global.checkedInstitutions;
    $scope.checkedGenders 			= Global.checkedGenders;
    $scope.patients 	  			= [];	

    $scope.getgenders = function() {
		
		$scope.genders = [{'name':'Male'},
						  {'name':'Female'}
						 ];
    };
    
    $scope.all = function() {
  	
        $scope.patients  = [{'id':'xxx','institution':'CNAG','gender':'Male','genes':22000,'mutations':70000}
        					];  
   
    };
    
    $scope.filteredPatients = function(value){
		
		institutionsFlag 		= true;
		genderFlag 				= true;
		
		if($scope.checkedInstitutions.length != 0){
	    	if ($scope.checkedInstitutions.indexOf(value.institution) == -1)
	    		institutionsFlag = false;	
    	}
    	if($scope.checkedGenders.length != 0){
	    	if ($scope.checkedGenders.indexOf(value.gender) == -1)
	    		genderFlag = false;	
    	}
		
		if (institutionsFlag && genderFlag)
    		return true;
    	else
    		return false;
          	
    }; 

}]);
