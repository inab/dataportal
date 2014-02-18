/* finds the intersection of 
 * two arrays in a simple fashion.  
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is 
 *    n = MIN(a.length(), b.length())
 */
function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = new Array();

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}





dataportal.filter('escape', function() {
  return window.escape;
});
  
dataportal.filter('patients',['Global',function(Global){

	return function(scope){
		
		var filtered = [];
		var j = 0;
		
		patients = scope.patients;
		genes	 = scope.genes;
		variants = scope.variants;
		patientsGenes = scope.patientsGenes;
		
		
		
		angular.forEach(patients,function(value,key){
		
			institutionsFlag 		= true;
			genderFlag 				= true;
			orphanetFlag			= true;
			omimFlag				= true;
			icd10Flag				= true;

			genesFlag				= true;			
			

			/* Patients filters */	
			if(Global.checkedInstitutions.length != 0){
		    	if (Global.checkedInstitutions.indexOf(value.institution) == -1)
		    		institutionsFlag = false;	
			}
			if(Global.checkedGenders.length != 0){
		    	if (Global.checkedGenders.indexOf(value.gender) == -1)
		    		genderFlag = false;	
			}
			if(Global.checkedOrphanets.length != 0){
		    	if (value.orphanets.indexOf(Global.checkedOrphanets[0]['number']) == -1)
		    		orphanetFlag = false;	
			}
			if(Global.checkedOmims.length != 0){
		    	if (value.omims.indexOf(Global.checkedOmims[0]['number']) == -1)
		    		omimFlag = false;	
			}
			if(Global.checkedIcd10s.length != 0){
		    	if (value.icd10s.indexOf(Global.checkedIcd10s[0]['number']) == -1)
		    		icd10Flag = false;	
			}
			
			/* Patient genes filters */
			if (genes.length != scope.filteredGenes.length){
				if (!(value.id in patientsGenes)){
					genesFlag =  false;
				}else{
					inGenesFlag = false;
					angular.forEach(scope.filteredGenes,function(gene,key){
						
						if ((patientsGenes[value.id]).indexOf(gene.id) != -1){
							inGenesFlag = true;
						}
					});
					genesFlag = (inGenesFlag)?true:false;
				}
						
			}
			
			if (institutionsFlag && genderFlag && orphanetFlag && omimFlag && icd10Flag && genesFlag){
				filtered[j] = value;
				j++;
			}
			
		});
		return filtered;
	}
}]); 

dataportal.filter('genes',['Global',function(Global){

	return function(scope){
		var filtered = [];
		var j = 0;
		
		patients = scope.patients;
		genes	 = scope.genes;
		variants = scope.variants;
		
		angular.forEach(genes,function(value,key){
			
			chromosomeFlag 		= true;
			geneTypeFlag		= true;
		
			if(Global.checkedChromosomes.length != 0){
		    	if (Global.checkedChromosomes.indexOf(value.chr) == -1)
		    		chromosomeFlag = false;	
			}
			if(Global.checkedGeneTypes.length != 0){
		    	if (Global.checkedGeneTypes.indexOf(value.type) == -1)
		    		geneTypeFlag = false;	
			}

			if (chromosomeFlag && geneTypeFlag){
				filtered[j] = value;
				j++;
			}	
		});
		return filtered;
	}
	
}]); 

dataportal.filter('variants',['Global',function(Global){

	return function(scope){
		var filtered = [];
		var j = 0;
		
		
		patients = scope.patients;
		genes	 = scope.genes;
		variants = scope.variants;
		
		angular.forEach(variants,function(value,key){
			
			variantTypesFlag 		= true;
			variantConsequencesFlag = true;
			variantStatusFlag		= true;
			
			
			if(Global.checkedVariantTypes.length != 0){
		    	if (Global.checkedVariantTypes.indexOf(value.type) == -1)
		    		variantTypesFlag = false;	
			}
			if(Global.checkedVariantConsequences.length != 0){
		    	if (Global.checkedVariantConsequences.indexOf(value.consequence) == -1)
		    		variantConsequencesFlag = false;	
			}
			if(Global.checkedVariantVerificationStatuses.length != 0){
		    	if (Global.checkedVariantVerificationStatuses.indexOf(value.status) == -1)
		    		variantStatusFlag = false;	
			}

			if (variantTypesFlag && variantConsequencesFlag && variantStatusFlag){
				
				filtered[j] = value;
				j++;
			}	
		});
		return filtered;
	}
	
}]); 

