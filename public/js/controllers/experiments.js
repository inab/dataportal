dataportal.controller('ExperimentsCtrl', ['$scope','$http','$templateCache','filterFilter','Experiments', function ($scope,$http,$templateCache,filterFilter,Experiments) {
    
	$scope.checked_experimenttypes = [];
	$scope.checked_filetypes = [];	
	
	
	$scope.filteredexperiments = [{'EXPERIMENT_ID':'NA12877',
					'category': 'primary_analyses',
					'EXPERIMENT_TYPE':'DNAseq',
				    'TYPE':'VCF',
				    'CENTER_NAME':'CNAG',
				    'FIRST_SUBMISSION_DATE':'Jan 2014',
				   },
				   {'EXPERIMENT_ID':'NA12878',
					'category': 'primary_analyses',
					'EXPERIMENT_TYPE':'DNAseq',
				    'TYPE':'VCF',
				    'CENTER_NAME':'CNAG',
				    'FIRST_SUBMISSION_DATE':'Jan 2014',
				   },
				   {'EXPERIMENT_ID':'NA12882',
					'category': 'primary_analyses',
					'EXPERIMENT_TYPE':'DNAseq',
				    'TYPE':'VCF',
				    'CENTER_NAME':'CNAG',
				    'FIRST_SUBMISSION_DATE':'Jan 2014',
				   },
				  ];						

  	$scope.all = function() {
  	
   		$http({method: 'GET', url: 'http://darthcaedus:1900/RDConnect/experiments', cache: $templateCache}).
        success(function(data, status, headers, config) {
            $scope.experiments  = data;  
             $scope.filteredexperiments = filterFilter($scope.experiments,function(value){
				
				           	
	            if ($scope.checked_experimenttypes.indexOf(value.EXPERIMENT_TYPE) != -1 ){
	            	return true
	            }else{
	            	
	            	return false
	            }		
            });   
              		                //set view model
        }).
        error(function(data, status, headers, config) {
           console.log(data);
        });
  	
    };
    
    $scope.gettypes = function() {
  
 
        $http({method: 'GET', url: 'http://darthcaedus:1900/RDConnect/experiment_types', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.experimenttypes  = data;     
                  		                //set view model
            }).
            error(function(data, status, headers, config) {
               console.log(data);
            });
        
    };
    
    $scope.getfiletypes = function() {
  
 
        $http({method: 'GET', url: 'http://darthcaedus:1900/RDConnect/file_types', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.filetypes  = data;     
                  		                //set view model
            }).
            error(function(data, status, headers, config) {
               console.log(data);
            });
        
    };
    
    $scope.getinstitutions = function() {
  
 
        $http({method: 'GET', url: '/experiments/getinstitutions', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.institutions  = data;     
                  		                //set view model
            }).
            error(function(data, status, headers, config) {
               console.log(data);
            });
        
    };

}]);
