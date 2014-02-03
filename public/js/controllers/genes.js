dataportal.controller('GenesCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
	$scope.checkedChromosomes = Global.checkedChromosomes;
	$scope.checkedGeneTypes = Global.checkedGeneTypes;
				


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
		
		$scope.geneTypes = [{'name':'Protein Coding'},
							  {'name':'Pseudogene'},
							  {'name':'LincRNA'},
							  {'name':'Antisense'},
							  {'name':'Processed Transcript'},
							  {'name':'miRNA'},
							  {'name':'Misc RNA'},
							  {'name':'snRNA'},
							  {'name':'snoRNA'},
							  {'name':'Sense Intronic'},
							  {'name':'rRNA'},
							  {'name':'IG V Pseudogene'},
							  {'name':'Sense Overlapping'},
							  {'name':'IG V Gene'},
							  {'name':'TR V Gene'},
							  {'name':'Polymorphic Pseudogene'},
							  {'name':'TR J Gene'},
							  {'name':'IG D Gene'},
							  {'name':'3\' Overlapping ncRNA'},
							  {'name':'TR V Pseudogene'},
							  {'name':'Non Coding'},
							  {'name':'IG C Gene'},
							  {'name':'IG C Pseudogene'},
							  {'name':'TR C Gene'},
							  {'name':'IG J Gene'},
							  {'name':'TR D Gene'}
								];
        
    };

}]);
