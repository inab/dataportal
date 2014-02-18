dataportal.directive('cslider', function() {
	return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
			$(element).cslider();
		}
	};
});

dataportal.directive('box', function() {
	return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
			$(element).hover(

			function() {
				$(this).find('.icon').addClass("animated pulse");
				$(this).find('.text').addClass("animated fadeInUp");
				$(this).find('.image').addClass("animated fadeInDown");
			}, function() {
				$(this).find('.icon').removeClass("animated pulse");
				$(this).find('.text').removeClass("animated fadeInUp");
				$(this).find('.image').removeClass("animated fadeInDown");
			});
		}
	};
});
dataportal.directive('dropdown', function() {
	return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
		$(element).hover(function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		});
		}
	};
});
dataportal.directive('checkList',['$rootScope', function($rootScope) {
  return {
    scope: {
      list: '=checkList',
      value: '@'
    },
    link: function(scope, elem, attrs) {
      
      var handler = function(setup) {
        $rootScope.$emit('filtersUpdated');
        var checked = elem.prop('checked');
        var index = scope.list.indexOf(scope.value);

        if (checked && index == -1) {
          if (setup) elem.prop('checked', false);
          else scope.list.push(scope.value);
        } else if (!checked && index != -1) {
          if (setup) elem.prop('checked', true);
          else scope.list.splice(index, 1);
        }
      };
      
      var setupHandler = handler.bind(null, true);
      var changeHandler = handler.bind(null, false);
            
      elem.on('change', function() {
        scope.$apply(changeHandler);
      });
      scope.$watch('list', setupHandler, true);
    }
  };
}]);

dataportal.directive('perBaseSequenceQuality', function() {
	return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
			var margin = {top: 10, right: 5, bottom: 20, left: 5},
		    width = 30 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;
		
			var min = Infinity,
			    max = -Infinity;
			
			var chart = d3.box()
			    .whiskers(iqr(1.5))
			    .width(width)
			    .height(height);
			
			d3.csv("morley.csv", function(error, csv) {
			
			  var data = [{'data':[],'xlabel':'1','mean':39.0,'lq':39.0,'uq':39.0,'lw':36.0,'uw':39.0},
			 			  {'data':[],'xlabel':'2','mean':39.0,'lq':39.0,'uq':39.0,'lw':36.0,'uw':39.0},
			 			  {'data':[],'xlabel':'3','mean':39.0,'lq':39.0,'uq':39.0,'lw':36.0,'uw':39.0},
			 			  {'data':[],'xlabel':'4','mean':39.0,'lq':39.0,'uq':39.0,'lw':36.0,'uw':39.0},
			 			  {'data':[],'xlabel':'5','mean':39.0,'lq':39.0,'uq':39.0,'lw':36.0,'uw':39.0},
			 			  {'data':[],'xlabel':'6','mean':39.0,'lq':39.0,'uq':39.0,'lw':36.0,'uw':39.0},
			 			  {'data':[],'xlabel':'7','mean':39.0,'lq':38.0,'uq':39.0,'lw':35.0,'uw':39.0},
			 			  {'data':[],'xlabel':'8','mean':39.0,'lq':38.0,'uq':39.0,'lw':35.0,'uw':39.0},
			 			  {'data':[],'xlabel':'9','mean':39.0,'lq':38.0,'uq':39.0,'lw':35.0,'uw':39.0},
			 			  {'data':[],'xlabel':'10-14','mean':39.0,'lq':38.0,'uq':39.0,'lw':35.0,'uw':39.0},
			 			  {'data':[],'xlabel':'15-19','mean':39.0,'lq':37.8,'uq':39.0,'lw':34.2,'uw':39.0},
			 			  {'data':[],'xlabel':'20-24','mean':39.0,'lq':37.0,'uq':39.0,'lw':33.0,'uw':39.0},
			 			  {'data':[],'xlabel':'20-24','mean':39.0,'lq':37.0,'uq':39.0,'lw':33.0,'uw':39.0},
			 			  {'data':[],'xlabel':'30-34','mean':39.0,'lq':37.0,'uq':39.0,'lw':32.0,'uw':39.0},
			 			  {'data':[],'xlabel':'35-39','mean':39.0,'lq':36.6,'uq':39.0,'lw':31.6,'uw':39.0},
			 			  {'data':[],'xlabel':'40-44','mean':39.0,'lq':36.0,'uq':39.0,'lw':30.4,'uw':39.0},
			 			  {'data':[],'xlabel':'45-49','mean':38.0,'lq':35.4,'uq':39.0,'lw':29.0,'uw':39.0},
			 			  {'data':[],'xlabel':'50-54','mean':38.0,'lq':35.8,'uq':39.0,'lw':29.0,'uw':39.0},
			 			  {'data':[],'xlabel':'55-59','mean':39.0,'lq':36.0,'uq':39.0,'lw':28.8,'uw':39.0},
			 			  {'data':[],'xlabel':'60-64','mean':38.6,'lq':35.4,'uq':39.0,'lw':27.4,'uw':39.0},
			 			  {'data':[],'xlabel':'65-69','mean':37.8,'lq':34.6,'uq':39.0,'lw':24.8,'uw':39.0},
			 			  {'data':[],'xlabel':'70-74','mean':37.0,'lq':33.6,'uq':39.0,'lw':21.6,'uw':39.0},
			 			  {'data':[],'xlabel':'75-79','mean':36.8,'lq':32.4,'uq':39.0,'lw':13.8,'uw':39.0},
			 			  {'data':[],'xlabel':'80-84','mean':36.0,'lq':31.0,'uq':39.0,'lw':2.0,'uw':39.0},
			 			  {'data':[],'xlabel':'85-89','mean':35.4,'lq':29.2,'uq':37.4,'lw':2.0,'uw':39.0},
			 			  {'data':[],'xlabel':'90-94','mean':34.6,'lq':26.6,'uq':37.0,'lw':2.0,'uw':39.0},
			 			  {'data':[],'xlabel':'95-99','mean':33.6,'lq':22.6,'uq':36.8,'lw':2.0,'uw':39.0},
			 			  {'data':[],'xlabel':'100','mean':33.0,'lq':20.0,'uq':37.0,'lw':2.0,'uw':39.0}
			 			  

			  			 ];

			  var svg = d3.select(element[0]).selectAll("svg")
			      .data(data)
			    .enter().append("svg")
			      .attr("class", "box")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.bottom + margin.top)
			    .append("g")
			      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			      .call(chart);
			});
		}
	};
});

dataportal.directive('similarDonors', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
		
			var data = {"name": "Donor ID",
							 "children": [
							  {
							   "name": "phenotype",
							   "children": [
							      {"name": "AgglomerativeCluster", "size": 3938},
							      {"name": "CommunityStructure", "size": 3812},
							      {"name": "HierarchicalCluster", "size": 6714},
							      {"name": "MergeEdge", "size": 743}
							     ]
							   },
							   {
							     "name": "graph",
							     "children": [
							      {"name": "BetweennessCentrality", "size": 3534},
							      {"name": "LinkDistance", "size": 5731},
							      {"name": "MaxFlowMinCut", "size": 7840},
							      {"name": "ShortestPaths", "size": 5914},
							      {"name": "SpanningTree", "size": 3416}
							     ]
							    },
							    {
							     "name": "optimization",
							     "children": [
							      {"name": "AspectRatioBanker", "size": 7074}
							     ]
							    }
							   ]
							  };

			
			var diameter = 500;

			var tree = d3.layout.tree()
			    .size([diameter, diameter / 2 - 120])
			    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });
			
			var diagonal = d3.svg.diagonal.radial()
			    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
			
			var svg = d3.select(element[0]).append("svg")
			    .attr("width", diameter)
			    .attr("height", diameter)
			  .append("g")
			    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
			

		  var nodes = tree.nodes(data),
		      links = tree.links(nodes);
		
		  var link = svg.selectAll(".link")
		      .data(links)
		    .enter().append("path")
		      .attr("class", "link")
		      .attr("d", diagonal);
		
		  var node = svg.selectAll(".node")
		      .data(nodes)
		    .enter().append("g")
		      .attr("class", "node")
		      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
		
		  node.append("circle")
		      .attr("r", 4.5);
		
		  node.append("text")
		      .attr("dy", ".31em")
		      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		      .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
		      .text(function(d) { return d.name; });

			
			d3.select(self.frameElement).style("height", diameter - 150 + "px");
		
		}
	};
});