dataportal.controller('DonorsResultsCtrl', ['Global','$scope','$rootScope','$http','$templateCache','patientsFilter','genesFilter','variantsFilter','ejsResource', function (Global,$scope,$rootScope,$http,$templateCache,patientsFilter,genesFilter,variantsFilter,ejsResource) {
    
    $scope.checkedInstitutions  			= Global.checkedInstitutions;
    $scope.checkedGenders 					= Global.checkedGenders;
    $scope.checkedOrphanets 				= Global.checkedOrphanets;
    $scope.checkedOmims 					= Global.checkedOmims;
    $scope.checkedIcd10s 					= Global.checkedIcd10s;
    $scope.search_dbsnp_id					= Global.search_dbsnp_id;
    $scope.search_gene_id					= Global.search_gene_id;
    $scope.checkedVariantConsequences 		= Global.checkedVariantConsequences;
    $scope.patients 	  					= [];
    $scope.genes 	  						= [];
    $scope.variantsCounts					= 0;

    
    $scope.patientsGenes   			= [];
    $scope.filteredPatients 	  	= [];	
    $scope.filteredGenes 		  	= [];	
    $scope.filteredVariants 	  	= [];
    $scope.search_dbsnp_id			= '';	
    
   
    var ejs 	= ejsResource('http://localhost:9200');
    var client 	= ejs.Request()
			         .indices('variants')
			         .types('variant')
			         .size(50);

    $scope.getgenders = function() {
		
		$scope.genders = [{'name':'Male'},
						  {'name':'Female'}
						 ];
    };
    
    
    $scope.getBackendPatients = function(){
	    
	    $scope.patients = [{'id':'NA12877','institution':'CNAG','gender':'Male','maternal_ethnicity':'Nepali','paternal_ethnicity':'Nepali','mutations':3685900,'orphanets':['ORPHA2585'],'omims':['108500'],'icd10s':['A00.0']},
	    					{'id':'NA12878','institution':'CNAG','gender':'Female','maternal_ethnicity':'French','paternal_ethnicity':'French','mutations':3055069,'orphanets':[],'omims':[],'icd10s':['A00.0']},
	    					{'id':'NA12882','institution':'CNAG','gender':'Female','maternal_ethnicity':'German','paternal_ethnicity':'German','mutations':3446447,'orphanets':['ORPHA2585'],'omims':['108500'],'icd10s':['A00.0']}
	    
	    ];
		$scope.filteredPatients = patientsFilter($scope);
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
    
    	
		var rQuery  = ejs.RangeQuery('Pos');
		var siftQuery  = ejs.RangeQuery('Sift');
		var oQuery 	= ejs.QueryStringQuery();
		
    	query =  ejs.BoolQuery()
    				.must(oQuery.query('*'))
    				.should(siftQuery.gt('0.5'));
    				
   		

    	if($scope.search_dbsnp_id.length>7){
	    	query = query.should(oQuery.query('dbSNP.Rs:'+$scope.search_dbsnp_id));
    	}
    	if($scope.search_gene_id.length>3){
    		var geneQuery 	= ejs.QueryStringQuery();
	    	query = query.should(geneQuery.query('Genes:'+$scope.search_gene_id));
    	}
    	if($scope.chr >0 | $scope.chr == 'X' | $scope.chr == 'Y'){
    		if ($scope.chr == 'X')
    			$scope.chr = 30;
    		if ($scope.chr == 'Y')
    			$scope.chr = 31;	
	    	query = query.should(oQuery.query('Chr:'+$scope.chr));
    	}
    	if($scope.chr_start >0 | $scope.chr_end < 250000000){
	    	query = query.should(rQuery.gt($scope.chr_start).lt($scope.chr_end));
    	}
    	if($scope.checkedVariantConsequences.length>0){
	    	query = query.should(oQuery.query('Locations:'+$scope.checkedVariantConsequences[0]));
    	}

		//client.query(oQuery.query(query))
		client.query(query)
        .doSearch(function(r){
			    $scope.variants = r.hits.hits;
			    $scope.variantsCounts =  $scope.variants.length;
        },function(){});
		
		
    }
    
    
    $scope.getBackendPatientsGenes = function(){
	    $scope.patientsGenes = {'p1':['g0','g2','g4','g6'],'p2':['g1','g3','g5','g7']};
    }
    
    
    $scope.applyFilters = function() {

    	$scope.search_dbsnp_id = Global.search_dbsnp_id;
    	$scope.search_gene_id  = Global.search_gene_id;
    	$scope.chr	 	   	   = Global.chr;
    	$scope.chr_start 	   = Global.chr_start;
    	$scope.chr_end	 	   = Global.chr_end;
    	
    	$scope.getBackendVariants();
       	$scope.getBackendPatients();
       	$scope.filteredPatients = patientsFilter($scope);
    
    	/*
$scope.getBackendGenes();
       	$scope.getBackendPatientsGenes();
	   	$scope.filteredPatients = patientsFilter($scope);
        $scope.filteredGenes 	= genesFilter($scope);
        $scope.filteredVariants	= variantsFilter($scope);
*/
    };
    
    $rootScope.$on('filtersUpdated',function(e){$scope.applyFilters()});

}]);
