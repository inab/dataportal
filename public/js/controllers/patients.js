dataportal.controller('PatientsCtrl', ['Global','$scope','$rootScope','$http','$templateCache','patientsFilter','genesFilter','variantsFilter','ejsResource', function (Global,$scope,$rootScope,$http,$templateCache,patientsFilter,genesFilter,variantsFilter,ejsResource) {
    
    $scope.checkedInstitutions  	= Global.checkedInstitutions;
    $scope.checkedGenders 			= Global.checkedGenders;
    $scope.checkedOrphanets 		= Global.checkedOrphanets;
    $scope.checkedOmims 			= Global.checkedOmims;
    $scope.checkedIcd10s 			= Global.checkedIcd10s;
    
    $scope.patients 	  			= [];
    $scope.genes 	  				= [];
    $scope.variants   				= [];
    
    $scope.patientsGenes   			= [];
    $scope.filteredPatients 	  	= [];	
    $scope.filteredGenes 		  	= [];	
    $scope.filteredVariants 	  	= [];	
    
   
    var ejs 	= ejsResource('http://localhost:9200');
    var oQuery 	= ejs.QueryStringQuery().defaultField('Pos');
    var client 	= ejs.Request()
			         .indices('variants')
			         .types('variant')
			         .size(10);
   
   
   
    
    $scope.getgenders = function() {
		
		$scope.genders = [{'name':'Male'},
						  {'name':'Female'}
						 ];
    };
    
    
    $scope.getBackendPatients = function(){
	    
    	for (i=0;i<=40;i++){
    	 	 gender = (i%2==0)?'Male':'Female';
	    	 tmp = {'id':'p'+i,'institution':'CNAG','gender':gender,'genes':0,'mutations':0,'orphanets':['ORPHA2585'],'omims':['108500'],'icd10s':['A00.0']};
	    	 $scope.patients[i] = tmp;
		}
    }
    
     $scope.getBackendGenes = function() {
    
       	 for(i=0;i<=40;i++){
    	 	 type = (i%3==0)?'protein_coding':'pseudogene';
    	 	 chr  = (i%2==0)?'1':'2';
	    	 tmp = {'id':'g'+i,'chr':chr,'type':type,'patients':20};
	    	 $scope.genes[i] =tmp;
    	 }
    };
    
    $scope.getBackendVariants = function() {

   		/*
for (i=0;i<=40;i++){
   			type = (i%3==0)?'substitution':'deletion';
	   		tmp = {'id':'v'+i,'dna_change':'chr7:g.140453136A>T','type':type,'consequence':'missense','status':'not_tested','patients':50};
	   		$scope.variants[i] = tmp;
   		}
*/
	
		client.query(oQuery.query('*'))
                .doSearch(function(r){
                		
                		$scope.variants =r.hits.hits
	                	console.log($scope.variants);
                },function(){});
		
		
    }
    
    
    $scope.getBackendPatientsGenes = function(){
	    $scope.patientsGenes = {'p1':['g0','g2','g4','g6'],'p2':['g1','g3','g5','g7']};
    }
    
    
    $scope.applyFilters = function() {
    
    	$scope.getBackendPatients();
    	$scope.getBackendGenes();
    	//$scope.getBackendVariants();
    	
    	
    	
    	$scope.getBackendPatientsGenes();

        $scope.filteredPatients = patientsFilter($scope);
        $scope.filteredGenes 	= genesFilter($scope);
        $scope.filteredVariants	= variantsFilter($scope);
    };
    
    $rootScope.$on('filtersUpdated',function(e){$scope.applyFilters()});

}]);
