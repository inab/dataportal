dataportal.controller('HposCtrl', ['Global','$scope','$rootScope','$http','$templateCache','filterFilter','ejsResource','$q', function (Global,$scope,$rootScope,$http,$templateCache,filterFilter,ejsResource,$q) {
    
	$scope.hpos = [];
	
	var ejs 	= ejsResource('http://localhost:9200');
    var client 	= ejs.Request()
			         .indices('hpo')
			         .types('hpo_term')
			         .size(100);

    $scope.getBackendHpos = function(val) {
    	
    	var oQuery 	 = ejs.QueryStringQuery();
    	var deferred = $q.defer();
		
		query =  ejs.BoolQuery()
    			.must(oQuery.query('name:'+val));
    			
    			
		try{
			client.query(query)
	        .doSearch(function(r){
				 deferred.resolve(r.hits.hits);
	        },function(){});
		}catch(e){
			deferred.reject(e);
		}
		
		return deferred.promise;
		
    }
    
    
	  $scope.getHpos = function(val) {
	    return $scope.getBackendHpos(val).then(function(res){
	       console.log(res);
	       return res;
	    });
	  };

    
     $scope.setItem = function(item) {

  		Global.checkedHpos = [item];
  		$rootScope.$emit('filtersUpdated');
  	};

}]);
