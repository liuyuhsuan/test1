 function applepie(title)
	{	
// title放使用者輸入的電影名稱

	var width = 800, height = 800; 
	var svg = d3.select("body").append("svg")
            	    .attr("width", width)
            	    .attr("height", height)
            	    .append("g")
	    	    .attr("transform", "translate(150,150)");
	var color = d3.scale.category20();
	d3.csv("https://small00blue.github.io/test1/mtest.csv", piechart); //這樣寫以後可以加很多其他函式
	
	function piechart(data){
		var arc = d3.svg.arc()
	        	        .outerRadius(120)
            		        .innerRadius(50);
    	        var pie = d3.layout.pie()
	    	    	    .sort(null) 
	                    .value(function(d) {return d[title]}); // 這個方法也能選good and bad		
		var g1 = svg.selectAll("g")
	    	   	    .data(pie(data))
	    	   	    .enter()
	    	   	    .append("g");
	    	g1 .append("path")
        	   .attr("d", arc)
        	   .style("fill", function(d,i) { 
	        	    return color(i) });
		
		g1 .append("text")
    	   	   .attr("transform", function(d){
      			return "translate("+ arc.centroid(d) +")";
      			//centroid()任何形狀的中心點
    			})
    		   .attr("text-anchor", "middle")
    	  	   .text(function(d){
    	  	   	return d.data.movieTitle + "," + d.value ; //在每個形狀的中央插入文字
    			})
    		  .attr("fill", "white");	
    	        g1 .append("text")
    	   	   .attr(
    	   	   		{"X":10,
    	   	   		"y":10}
      			//位置
    			)
    		   .attr("text-anchor", "middle")
    	  	   .text(function(d){
    	  	   	console.log(d)
    	  	   	return title ; //在每個形狀的中央插入文字
    			})
    		  .attr("fill", "black");	

   		}
		
	}