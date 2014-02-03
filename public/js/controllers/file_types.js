dataportal.controller('FileTypesCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
    $scope.checkedAnalysisCategories = Global.checkedAnalysisCategories;	
	$scope.checkedExperimentTypes	 = Global.checkedExperimentTypes;	
	$scope.checkedAnalysisTypes  	 = Global.checkedAnalysisTypes;
	$scope.checkedInstitutions  	 = Global.checkedInstitutions;
	$scope.checkedFileTypes 		 = Global.checkedFileTypes;
	$scope.modalTitle = '';
	$scope.modalBody = '';						


    $scope.getFileTypes = function() {
		
		$scope.fileTypes = [{'category':'primary_analyses','experimentTypes':['dna_seq','ran_seq','chip_seq'],'name':'FastQ','description':'The fastq format was developed to provide a convenient way of storing the sequence and the quality scores in the same file. '},
							{'category':'secondary_analyses','experimentTypes':['dna_seq','ran_seq','chip_seq'],'name':'BAM','description':'The fastq format was developed to provide a convenient way of storing the sequence and the quality scores in the same file. '}
							
							];
        
    };
    
     $scope.filterFileTypes = function(value){
    	categoriesFlag 		= true;
    	experimentTypesFlag 	= true;
    	
    	if($scope.checkedAnalysisCategories.length == 0 && $scope.checkedExperimentTypes.length == 0)
    		return true;
    	
    	if($scope.checkedAnalysisCategories.length != 0){
	    	if ($scope.checkedAnalysisCategories.indexOf(value.category) == -1)
	    		categoriesFlag = false;	
    	}
    	if($scope.checkedExperimentTypes.length != 0){
    		found = 0;
    		for (var i = 0,l=value.experimentTypes.length;i<l;i++){
	    		if ($scope.checkedExperimentTypes.indexOf(value.experimentTypes[i]) != -1)
	    			found++;	
    		}
	    	if (found == 0)
	    		experimentTypesFlag = false;	
    	}
    	if (categoriesFlag && experimentTypesFlag)
    		return true;
    	else
    		return false;
    }

}]);
