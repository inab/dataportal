dataportal.controller('GenesCtrl', ['Global','$scope','$rootScope','$http','$templateCache','genesFilter', function (Global,$scope,$rootScope,$http,$templateCache,genesFilter) {
    
	$scope.checkedChromosomes 	= Global.checkedChromosomes;
	$scope.checkedGeneTypes 	= Global.checkedGeneTypes;
	$scope.genes 	  			= [];
    $scope.filteredGenes 	  	= [];					


    $scope.getChromosomes = function() {
		
		$scope.chromosomes = [{'name':'1'},
							  {'name':'2'},
							  {'name':'3'},
							  {'name':'4'},
							  {'name':'5'},
							  {'name':'6'},
							  {'name':'7'},
							  {'name':'8'},
							  {'name':'9'},
							  {'name':'10'},
							  {'name':'11'},
							  {'name':'12'},
							  {'name':'13'},
							  {'name':'14'},
							  {'name':'15'},
							  {'name':'16'},
							  {'name':'17'},
							  {'name':'18'},
							  {'name':'19'},
							  {'name':'20'},
							  {'name':'21'},
							  {'name':'22'},
							  {'name':'X'},
							  {'name':'Y'}
								];
        
    };
    
    $scope.getGeneTypes = function() {
		
		$scope.geneTypes = [{'name':'Protein Coding','machine_name':'protein_coding'},
							  {'name':'Pseudogene','machine_name':'pseudogene'},
							  {'name':'LincRNA','machine_name':'lincRNA'},
							  {'name':'Antisense','machine_name':'antisense'},
							  {'name':'Processed Transcript','machine_name':'processed_transcript'},
							  {'name':'miRNA','machine_name':'miRNA'},
							  {'name':'Misc RNA','machine_name':'miscRNA'},
							  {'name':'snRNA','machine_name':'snRNA'},
							  {'name':'snoRNA','machine_name':'snoRNA'},
							  {'name':'Sense Intronic','machine_name':'sense_intronic'},
							  {'name':'rRNA','machine_name':'rRNA'},
							  {'name':'IG V Pseudogene','machine_name':'IG_V_pseudogene'},
							  {'name':'Sense Overlapping','machine_name':'sense_overlapping'},
							  {'name':'IG V Gene','machine_name':'IG_V_gene'},
							  {'name':'TR V Gene','machine_name':'TR_V_gene'},
							  {'name':'Polymorphic Pseudogene','machine_name':'polymorphic_pseudogene'},
							  {'name':'TR J Gene','machine_name':'TR_J_gene'},
							  {'name':'IG D Gene','machine_name':'IG_D_gene'},
							  {'name':'3\' Overlapping ncRNA','machine_name':'3_overlapping_ncRNA'},
							  {'name':'TR V Pseudogene','machine_name':'TR_V_pseudogene'},
							  {'name':'Non Coding','machine_name':'non_coding'},
							  {'name':'IG C Gene','machine_name':'IG_C_gene'},
							  {'name':'IG C Pseudogene','machine_name':'IG_C_pseudogene'},
							  {'name':'TR C Gene','machine_name':'TR_C_gene'},
							  {'name':'IG J Gene','machine_name':'IG_J_gene'},
							  {'name':'TR D Gene','machine_name':'TR_D_gene'}
								];
        
    };
}]);
