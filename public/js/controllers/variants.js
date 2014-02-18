dataportal.controller('VariantsCtrl', ['Global','$scope','$rootScope','$http','$templateCache','variantsFilter', function (Global,$scope,$rootScope,$http,$templateCache,variantsFilter) {
    
	$scope.checkedVariantTypes 					= Global.checkedVariantTypes;
	$scope.checkedVariantConsequences 			= Global.checkedVariantConsequences;
	$scope.checkedVariantVerificationStatuses 	= Global.checkedVariantVerificationStatuses;
	$scope.filteredVariants						= [];

    $scope.getVariantTypes = function() {
		
		$scope.variantTypes = [{'name':'Substitution','machine_name':'substitution','description':'Single base substitution'},
							   {'name':'Deletion','machine_name':'deletion','description':'Deletion of <=200bp'},
							   {'name':'Insertion','machine_name':'insertion','description':'Insertion of <=200bp'},
							   {'name':'MSub','machine_name':'msub','fuldescriptionlname':'Multiple base substitution >=2bp and <=200pb'}
							  ];
   };
   
   $scope.getVariantConsequences = function() {
		
		$scope.variantConsequences = [{'name':'Frameshift','machine_name':'frameshift','description':''},
							   {'name':'Missense','machine_name':'missense','description':''},
							   {'name':'Stop Gained','machine_name':'stop_gained','description':'p'},
							   {'name':'Stop Lost','machine_name':'stop_lost','description':''},
							   {'name':'Start gained','machine_name':'start_gained','description':''},
							   {'name':'Splice','machine_name':'splice','description':''},
							   {'name':'NC Exon','machine_name':'nc_exon','description':''},
							   {'name':'5\' UTR','machine_name':'5_UTR','description':''},
							   {'name':'Upstream','machine_name':'upstream','description':''},
							   {'name':'Syn','machine_name':'syn','description':''},
							   {'name':'Stop Retained','machine_name':'stop_retained','description':''},
							   {'name':'3\' UTR','machine_name':'3_UTR','description':''},
							   {'name':'Downstream','machine_name':'downstream','description':''},
							   {'name':'Intergenic','machine_name':'intergenic','description':''},
							   {'name':'Intragenic','machine_name':'intragenic','description':''},
							  ];
   };
   
   $scope.getVariantVerificationStatuses = function() {
		
		$scope.variantVerificationStatuses = [{'name':'Not Tested','machine_name':'not_tested','description':''},
							   				  {'name':'Verified','machine_name':'verified','description':''}
							  ];
   };
   

}]);
