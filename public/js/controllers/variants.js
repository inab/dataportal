dataportal.controller('VariantsCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
	$scope.checkedVariantTypes 					= Global.checkedVariantTypes;
	$scope.checkedVariantConsequences 			= Global.checkedVariantConsequences;
	$scope.checkedVariantVerificationStatuses 	= Global.checkedVariantVerificationStatuses;

    $scope.getVariantTypes = function() {
		
		$scope.variantTypes = [{'name':'Substitution','description':'Single base substitution'},
							   {'name':'Deletion','description':'Deletion of <=200bp'},
							   {'name':'Insertion','description':'Insertion of <=200bp'},
							   {'name':'MSub','fuldescriptionlname':'Multiple base substitution >=2bp and <=200pb'}
							  ];
   };
   
   $scope.getVariantConsequences = function() {
		
		$scope.variantConsequences = [{'name':'Frameshift','description':''},
							   {'name':'Missense','description':''},
							   {'name':'Stop Gained','description':'p'},
							   {'name':'Stop Lost','description':''},
							   {'name':'Start gained','description':''},
							   {'name':'Splice','description':''},
							   {'name':'NC Exon','description':''},
							   {'name':'5\' UTR','description':''},
							   {'name':'Upstream','description':''},
							   {'name':'Syn','description':''},
							   {'name':'Stop Retained','description':''},
							   {'name':'3\' UTR','description':''},
							   {'name':'Downstream','description':''},
							   {'name':'Intergenic','description':''},
							   {'name':'Intragenic','description':''},
							  ];
   };
   
   $scope.getVariantVerificationStatuses = function() {
		
		$scope.variantVerificationStatuses = [{'name':'Not Tested','description':''},
							   {'name':'Verified','description':''}
							  ];
   };

}]);
