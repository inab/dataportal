dataportal.controller('ExperimentTypesCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
    $scope.checkedAnalysisCategories = Global.checkedAnalysisCategories;	
	$scope.checkedExperimentTypes	 = Global.checkedExperimentTypes;	
	$scope.checkedAnalysisTypes  	 = Global.checkedAnalysisTypes;
	$scope.checkedInstitutions  	 = Global.checkedInstitutions;
	$scope.checkedExperimentTypes 	 = Global.checkedExperimentTypes;
	$scope.modalTitle = '';
	$scope.modalBody = '';						


    $scope.getExperimentTypes = function() {
		
		$scope.experimentTypes = [{'name':'DNA-seq','machineName':'dna_seq','fullname':''},
								  {'name':'RNA-seq','machineName':'rna_seq','fullname':''},
								  {'name':'ChIP-seq','machineName':'chip_seq','fullname':''},
								  {'name':'WGBS','machineName':'wgbs','fullname':''},
								];
        
    };
    
    
    
    $scope.populateExperimentTypeModal = function(institution){
		$scope.modalTitle = institution.fullname;
		$scope.modalBody = institution.description;
	}
}]);
