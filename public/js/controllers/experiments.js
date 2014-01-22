dataportal.controller('ExperimentsCtrl', ['$scope','$http','$templateCache','filterFilter','Experiments', function ($scope,$http,$templateCache,filterFilter,Experiments) {
    
	$scope.checked_experimenttypes = [];
	$scope.checked_filetypes = [];							

/*

	$scope.$watch('checked_experimenttypes',function(){
		 //alert('here');
		 $scope.all();
		 console.log('koko'+$scope.filteredexperiments);
	});
*/

  	$scope.all = function() {
  	
   		$http({method: 'GET', url: 'http://darthcaedus:1900/RDConnect/experiments', cache: $templateCache}).
        success(function(data, status, headers, config) {
            $scope.experiments  = data;  
             $scope.filteredexperiments = filterFilter($scope.experiments,function(value){
				
				           	
	            if ($scope.checked_experimenttypes.indexOf(value.EXPERIMENT_TYPE) != -1 ){
	            	return true
	            }else{
	            	
	            	return false
	            }		
            });   
              		                //set view model
        }).
        error(function(data, status, headers, config) {
           console.log(data);
        });
  	
    };
    
    $scope.gettypes = function() {
  
 
        $http({method: 'GET', url: 'http://darthcaedus:1900/RDConnect/experiment_types', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.experimenttypes  = data;     
                  		                //set view model
            }).
            error(function(data, status, headers, config) {
               console.log(data);
            });
        
    };
    
    $scope.getfiletypes = function() {
  
 
        $http({method: 'GET', url: 'http://darthcaedus:1900/RDConnect/file_types', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.filetypes  = data;     
                  		                //set view model
            }).
            error(function(data, status, headers, config) {
               console.log(data);
            });
        
    };
    
    $scope.getinstitutions = function() {
  
 
        $http({method: 'GET', url: '/experiments/getinstitutions', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.institutions  = data;     
                  		                //set view model
            }).
            error(function(data, status, headers, config) {
               console.log(data);
            });
        
    };

		
					

    /*
$scope.create = function() {
        var article = new Articles({
            title: this.title,
            content: this.content
        });
        article.$save(function(response) {
            $location.path("articles/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(article) {
        if (article) {
            article.$remove();  

            for (var i in $scope.articles) {
                if ($scope.articles[i] == article) {
                    $scope.articles.splice(i, 1);
                }
            }
        }
        else {
            $scope.article.$remove();
            $location.path('articles');
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
            $location.path('articles/' + article._id);
        });
    };

    
    $scope.findOne = function() {
        Articles.get({
            articleId: $routeParams.articleId
        }, function(article) {
            $scope.article = article;
        });
    };
*/
}]);
