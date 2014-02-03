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
dataportal.directive('checkList', function() {
  return {
    scope: {
      list: '=checkList',
      value: '@'
    },
    link: function(scope, elem, attrs) {
      var handler = function(setup) {
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
});

dataportal.directive('perBaseSequenceQuality', function() {
	return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
			var margin = {top: 10, right: 50, bottom: 20, left: 50},
		    width = 120 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;
		
			var min = Infinity,
			    max = -Infinity;
			
			var chart = d3.box()
			    .whiskers(iqr(1.5))
			    .width(width)
			    .height(height);
			
			d3.csv("morley.csv", function(error, csv) {
			
			  var data = [{'data':[850,870,870,880,890,880]}];
			  //'mean':37.89,'lq':39.0,'uq':39.0,'10thP':36.0,'90thP':39.0
			  /*
csv.forEach(function(x) {
			    var e = Math.floor(x.Expt - 1),
			        r = Math.floor(x.Run - 1),
			        s = Math.floor(x.Speed),
			        d = data[e];
			  
			    if (!d) d = data[e] = [s];
			    else d.push(s);
			    if (s > max) max = s;
			    if (s < min) min = s;
			   
			  });
			  chart.domain([min, max]);
*/

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