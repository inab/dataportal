dataportal.controller('InstitutionsCtrl', ['Global','$scope','$http','$templateCache','filterFilter', function (Global,$scope,$http,$templateCache,filterFilter) {
    
	$scope.checkedInstitutions = Global.checkedInstitutions;
	$scope.modalTitle = '';
	$scope.modalBody = '';						


    $scope.getinstitutions = function() {
		
		$scope.institutions = [{'shortname':'UNEW','fullname':'University of Newcastle Upon Tyne'},
							   {'shortname':'CNAG','fullname':'Fundacio Privada Parc Cientific de Barcelona'},
							   {'shortname':'AMU','fullname':'Iniversite D\'aix Marseille'},
							   {'shortname':'CNIO','fullname':'Centro Nacional de Investigaciones Oncológicas'},
							   {'shortname':'EBI','fullname':'European Bioinformatics Institute'},

								
								];
        
    };
    
    
    
    $scope.populateInstitutionModal = function(institution){
		$scope.modalTitle = institution.fullname;
		$scope.modalBody = institution.description;
	}
}]);
