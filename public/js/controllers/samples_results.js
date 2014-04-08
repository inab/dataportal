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
			         
			         
	$scope.cellOnthology = [{
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
		  		  						{label:'Neutrophil',color:'red'}
		  		  					]},
		  		  					{label:'Eosinophil Promyelocyte',children:[
			  		  					{label:'Eosinophil'}
		  		  					]},
		  		  					{label:'Promonocyte',children:[
		  		  						{label:'Monocyte',color:'red',children:[
		  		  							{label:'Macrophage M0',children:[
		  		  								{label:'Macrophage M1'},
		  		  								{label:'Macrophage M2'},
		  		  							]},
		  		  							{label:'Dendritic Cell'}
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

    $scope.samples = [{'donor_id':'C000S5','sex':'Male','cell_type':'Monocytes','tissue':'Peripheral blood'},
    				  {'donor_id':'C0010K','sex':'Female','cell_type':'Monocytes','tissue':'Peripheral blood'},
    				  {'donor_id':'C001UY','sex':'Male','cell_type':'Monocytes','tissue':'Peripheral blood'},
    				  {'donor_id':'C004SQ','sex':'Female','cell_type':'Monocytes','tissue':'Peripheral blood'},
    				  {'donor_id':'C005PS','sex':'Female','cell_type':'Monocytes','tissue':'Cord blood'},
    				  {'donor_id':'S000RD','sex':'Male','cell_type':'Monocytes','tissue':'Cord blood'},
    				  {'donor_id':'C000S5','sex':'Male','cell_type':'Neutrophils','tissue':'Peripheral blood'},
    				  {'donor_id':'C0010K','sex':'Female','cell_type':'Neutrophils','tissue':'Peripheral blood'},
    				  {'donor_id':'C0011I','sex':'Female','cell_type':'Neutrophils','tissue':'Peripheral blood'},
    				  {'donor_id':'C00184','sex':'Male','cell_type':'Neutrophils','tissue':'Cord blood'},
    				  {'donor_id':'C001UY','sex':'Male','cell_type':'Neutrophils','tissue':'Peripheral blood'},
    				  {'donor_id':'C004GD','sex':'Female','cell_type':'Neutrophils','tissue':'Cord blood'}
    				 
    				 ]
    
   
}]);
