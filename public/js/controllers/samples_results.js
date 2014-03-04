dataportal.controller('SamplesResultsCtrl', ['Global','$scope','$rootScope','$http','$templateCache','patientsFilter','genesFilter','variantsFilter','ejsResource', function (Global,$scope,$rootScope,$http,$templateCache,patientsFilter,genesFilter,variantsFilter,ejsResource) {
    
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
			         
			         
	$scope.my_data = [{
	  label: 'Haematopoietic Stem Cell',
	  children: [{label:'Multi Potent Progenitor',
		  		  children: [{label:'Common Myeloid Progenitor',children:[
		  		  				{label:'Megakaryocyte Erythrocyte Progenitor',children:[
		  		  					{label:'Megakaryoblast',children:[
		  		  						{label:'Promegakaryocyte',children:[
		  		  							{label:'Megakaryocyte',children:[
		  		  								{label:'Platelets'}
		  		  							]}
		  		  						]}
		  		  					]},
		  		  					{label:'Proerythroblast',children:[
		  		  						{label:'Erythroblast'}
		  		  					]}
		  		  				]},
		  		  				{label:'Granulocyte Monocyte Progenitor',children:[
		  		  					{label:'Basophil Promyelocyte',children:[
		  		  						{label:'Basophil'}
		  		  					]},
		  		  					{label:'Neutrophil Promyelocyte',children:[
		  		  						{label:'Neutrophil'}
		  		  					]},
		  		  					{label:'Eosinophil Promyelocyte',children:[
			  		  					{label:'Eosinophil'}
		  		  					]},
		  		  					{label:'Promonocyte',children:[
		  		  						{label:'Monocyte',children:[
		  		  							{label:'Macrophage'},
		  		  							{label:'Antigen Presenting Cell'}
		  		  						]}
		  		  					]}
		  		  				]}
		  		  			]},
		  		  			 {label:'Commom Lymphoid Progenitor',children:[
		  		  			 	{label:'Lymphoblast',children:[
		  		  			 		{label:'Lymphocyte',children:[
		  		  			 			{label:'T lymphocyte'},
		  		  			 			{label:'B lymphocyte',children:[
		  		  			 				{label:'Plasma Cell'}
		  		  			 			]}
		  		  			 		]},
		  		  			 		{label:'Natural Killer Cell'}
		  		  			 	]}
		  		  			 	
		  		  			 ]}
		  		  			]	
	  }]
	}];		         

    $scope.getgenders = function() {
		
		$scope.genders = [{'name':'Male'},
						  {'name':'Female'}
						 ];
    };
    
    
    $scope.getCellTypes = function(){
	    
	    $scope.cellTypes = [{'name':'Monocytes'},
	    					{'name':'Neutrophils'},
	    					{'name':'HSC'},
	    					{'name':'MEP'},
	    					{'name':'MPP'},
	    					{'name':'NK cells'},
	    					{'name':'B cells'},
	    					{'name':'Naive B cells'},
	    					{'name':'Effector memory CD4 T cells'},
	    					{'name':'Central memory CD4 T cells'},
	    					{'name':'Tregs'},
	    					{'name':'CD4+ naive'},
	    					{'name':'Effector Memory CD8 T cells'},
	    					{'name':'Central Memory CD8 T cells'},
	    					{'name':'CD8+ naive'},
	    					{'name':'Tregs'},
	    					{'name':'Tregs'}
	    ];
    }
    
   
}]);
