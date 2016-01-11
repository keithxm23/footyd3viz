var oddResults = {"Southampton": {"w2d": [["Newcastle", "Southampton", 2, 2, "D", "A"], ["Watford", "Southampton", 0, 0, "D", "A"], ["West Brom", "Southampton", 0, 0, "D", "A"], ["Southampton", "Leicester", 2, 2, "D", "H"], ["Southampton", "Aston Villa", 1, 1, "D", "H"]], "w2l": [["Southampton", "Everton", 0, 3, "A", "H"], ["Southampton", "Stoke", 0, 1, "A", "H"], ["Southampton", "Tottenham", 0, 2, "A", "H"], ["West Ham", "Southampton", 2, 1, "H", "A"], ["Norwich", "Southampton", 1, 0, "H", "A"]], "l2w": [["Chelsea", "Southampton", 1, 3, "A", "H"], ["Southampton", "Arsenal", 4, 0, "H", "A"]], "l2d": [["Liverpool", "Southampton", 1, 1, "D", "H"]]}, "Man United": {"w2d": [["Man United", "Newcastle", 0, 0, "D", "H"], ["Man United", "Man City", 0, 0, "D", "H"], ["Crystal Palace", "Man United", 0, 0, "D", "A"], ["Leicester", "Man United", 1, 1, "D", "A"], ["Man United", "West Ham", 0, 0, "D", "H"], ["Man United", "Chelsea", 0, 0, "D", "H"]], "w2l": [["Swansea", "Man United", 2, 1, "H", "A"], ["Bournemouth", "Man United", 2, 1, "H", "A"], ["Man United", "Norwich", 1, 2, "A", "H"], ["Stoke", "Man United", 2, 0, "H", "A"]]}, "Norwich": {"w2l": [["Norwich", "Crystal Palace", 1, 3, "A", "H"], ["Norwich", "Leicester", 1, 2, "A", "H"], ["Norwich", "West Brom", 0, 1, "A", "H"]], "w2d": [["Norwich", "Stoke", 1, 1, "D", "H"]], "l2w": [["Sunderland", "Norwich", 1, 3, "A", "H"], ["Man United", "Norwich", 1, 2, "A", "H"], ["Norwich", "Southampton", 1, 0, "H", "A"]], "l2d": [["Liverpool", "Norwich", 1, 1, "D", "H"], ["West Ham", "Norwich", 2, 2, "D", "H"], ["Norwich", "Arsenal", 1, 1, "D", "A"], ["Norwich", "Everton", 1, 1, "D", "A"]]}, "Man City": {"w2d": [["Aston Villa", "Man City", 0, 0, "D", "A"], ["Leicester", "Man City", 0, 0, "D", "A"]], "w2l": [["Man City", "West Ham", 1, 2, "A", "H"], ["Tottenham", "Man City", 4, 1, "H", "A"], ["Man City", "Liverpool", 1, 4, "A", "H"], ["Stoke", "Man City", 2, 0, "H", "A"]], "l2d": [["Man United", "Man City", 0, 0, "D", "H"]]}, "West Ham": {"w2l": [["West Ham", "Leicester", 1, 2, "A", "H"], ["West Ham", "Bournemouth", 3, 4, "A", "H"]], "w2d": [["West Ham", "Norwich", 2, 2, "D", "H"], ["Sunderland", "West Ham", 2, 2, "D", "A"], ["West Ham", "Everton", 1, 1, "D", "H"], ["West Ham", "West Brom", 1, 1, "D", "H"], ["West Ham", "Stoke", 0, 0, "D", "H"]], "l2w": [["Arsenal", "West Ham", 0, 2, "A", "H"], ["Liverpool", "West Ham", 0, 3, "A", "H"], ["Man City", "West Ham", 1, 2, "A", "H"], ["Crystal Palace", "West Ham", 1, 3, "A", "H"], ["West Ham", "Chelsea", 2, 1, "H", "A"], ["West Ham", "Southampton", 2, 1, "H", "A"], ["West Ham", "Liverpool", 2, 0, "H", "A"]], "l2d": [["Man United", "West Ham", 0, 0, "D", "H"], ["Swansea", "West Ham", 0, 0, "D", "H"], ["Aston Villa", "West Ham", 1, 1, "D", "H"]]}, "Aston Villa": {"w2d": [["Aston Villa", "Sunderland", 2, 2, "D", "H"], ["Aston Villa", "West Ham", 1, 1, "D", "H"]], "w2l": [["Aston Villa", "West Brom", 0, 1, "A", "H"], ["Aston Villa", "Stoke", 0, 1, "A", "H"], ["Aston Villa", "Watford", 2, 3, "A", "H"]], "l2w": [["Bournemouth", "Aston Villa", 0, 1, "A", "H"]], "l2d": [["Aston Villa", "Man City", 0, 0, "D", "A"], ["Southampton", "Aston Villa", 1, 1, "D", "H"], ["Newcastle", "Aston Villa", 1, 1, "D", "H"]]}, "Arsenal": {"w2l": [["Arsenal", "West Ham", 0, 2, "A", "H"], ["West Brom", "Arsenal", 2, 1, "H", "A"], ["Southampton", "Arsenal", 4, 0, "H", "A"]], "w2d": [["Arsenal", "Liverpool", 0, 0, "D", "H"], ["Arsenal", "Tottenham", 1, 1, "D", "H"], ["Norwich", "Arsenal", 1, 1, "D", "A"]]}, "Bournemouth": {"w2l": [["Bournemouth", "Aston Villa", 0, 1, "A", "H"], ["Bournemouth", "Newcastle", 0, 1, "A", "H"]], "w2d": [["Bournemouth", "Leicester", 1, 1, "D", "H"], ["Bournemouth", "Watford", 1, 1, "D", "H"], ["Bournemouth", "Crystal Palace", 0, 0, "D", "H"]], "l2w": [["West Ham", "Bournemouth", 3, 4, "A", "H"], ["Chelsea", "Bournemouth", 0, 1, "A", "H"], ["Bournemouth", "Man United", 2, 1, "H", "A"], ["West Brom", "Bournemouth", 1, 2, "A", "H"]], "l2d": [["Swansea", "Bournemouth", 2, 2, "D", "H"], ["Bournemouth", "Everton", 3, 3, "D", "A"], ["Leicester", "Bournemouth", 0, 0, "D", "H"]]}, "Crystal Palace": {"w2d": [["Crystal Palace", "Swansea", 0, 0, "D", "H"]], "w2l": [["Crystal Palace", "West Ham", 1, 3, "A", "H"], ["Crystal Palace", "Sunderland", 0, 1, "A", "H"]], "l2d": [["Crystal Palace", "Man United", 0, 0, "D", "A"], ["Everton", "Crystal Palace", 1, 1, "D", "H"], ["Bournemouth", "Crystal Palace", 0, 0, "D", "H"]], "l2w": [["Norwich", "Crystal Palace", 1, 3, "A", "H"], ["Chelsea", "Crystal Palace", 1, 2, "A", "H"], ["Watford", "Crystal Palace", 0, 1, "A", "H"], ["Liverpool", "Crystal Palace", 1, 2, "A", "H"], ["Stoke", "Crystal Palace", 1, 2, "A", "H"]]}, "Sunderland": {"w2l": [["Sunderland", "Norwich", 1, 3, "A", "H"]], "l2d": [["Sunderland", "Swansea", 1, 1, "D", "A"], ["Aston Villa", "Sunderland", 2, 2, "D", "H"], ["Sunderland", "West Ham", 2, 2, "D", "A"]], "l2w": [["Crystal Palace", "Sunderland", 0, 1, "A", "H"], ["Sunderland", "Stoke", 2, 0, "H", "A"]]}, "Leicester": {"w2d": [["Leicester", "Tottenham", 1, 1, "D", "H"], ["Leicester", "Bournemouth", 0, 0, "D", "H"]], "l2d": [["Bournemouth", "Leicester", 1, 1, "D", "H"], ["Stoke", "Leicester", 2, 2, "D", "H"], ["Southampton", "Leicester", 2, 2, "D", "H"], ["Leicester", "Man United", 1, 1, "D", "A"], ["Leicester", "Man City", 0, 0, "D", "A"]], "l2w": [["West Ham", "Leicester", 1, 2, "A", "H"], ["Norwich", "Leicester", 1, 2, "A", "H"], ["Swansea", "Leicester", 0, 3, "A", "H"], ["Leicester", "Chelsea", 2, 1, "H", "A"], ["Everton", "Leicester", 2, 3, "A", "H"]]}, "Watford": {"w2l": [["Watford", "Crystal Palace", 0, 1, "A", "H"]], "w2d": [["Watford", "West Brom", 0, 0, "D", "H"]], "l2d": [["Everton", "Watford", 2, 2, "D", "H"], ["Watford", "Southampton", 0, 0, "D", "A"], ["Bournemouth", "Watford", 1, 1, "D", "H"], ["Chelsea", "Watford", 2, 2, "D", "H"]], "l2w": [["Newcastle", "Watford", 1, 2, "A", "H"], ["Stoke", "Watford", 0, 2, "A", "H"], ["Aston Villa", "Watford", 2, 3, "A", "H"], ["Watford", "Liverpool", 3, 0, "H", "A"]]}, "Liverpool": {"w2d": [["Liverpool", "Norwich", 1, 1, "D", "H"], ["Liverpool", "Southampton", 1, 1, "D", "H"], ["Liverpool", "West Brom", 2, 2, "D", "H"]], "w2l": [["Liverpool", "West Ham", 0, 3, "A", "H"], ["Liverpool", "Crystal Palace", 1, 2, "A", "H"], ["Newcastle", "Liverpool", 2, 0, "H", "A"], ["Watford", "Liverpool", 3, 0, "H", "A"], ["West Ham", "Liverpool", 2, 0, "H", "A"]], "l2d": [["Arsenal", "Liverpool", 0, 0, "D", "H"], ["Everton", "Liverpool", 1, 1, "D", "H"], ["Tottenham", "Liverpool", 0, 0, "D", "H"]], "l2w": [["Chelsea", "Liverpool", 1, 3, "A", "H"], ["Man City", "Liverpool", 1, 4, "A", "H"]]}, "Newcastle": {"w2d": [["Newcastle", "Stoke", 0, 0, "D", "H"], ["Newcastle", "Aston Villa", 1, 1, "D", "H"]], "w2l": [["Newcastle", "Watford", 1, 2, "A", "H"]], "l2d": [["Newcastle", "Southampton", 2, 2, "D", "A"], ["Man United", "Newcastle", 0, 0, "D", "H"], ["Newcastle", "Chelsea", 2, 2, "D", "A"]], "l2w": [["Bournemouth", "Newcastle", 0, 1, "A", "H"], ["Newcastle", "Liverpool", 2, 0, "H", "A"], ["Tottenham", "Newcastle", 1, 2, "A", "H"]]}, "Everton": {"w2l": [["Everton", "Leicester", 2, 3, "A", "H"], ["Everton", "Stoke", 3, 4, "A", "H"]], "w2d": [["Everton", "Watford", 2, 2, "D", "H"], ["Everton", "Liverpool", 1, 1, "D", "H"], ["Bournemouth", "Everton", 3, 3, "D", "A"], ["Everton", "Crystal Palace", 1, 1, "D", "H"], ["Norwich", "Everton", 1, 1, "D", "A"]], "l2d": [["Tottenham", "Everton", 0, 0, "D", "H"], ["Swansea", "Everton", 0, 0, "D", "H"], ["West Ham", "Everton", 1, 1, "D", "H"], ["Everton", "Tottenham", 1, 1, "D", "A"]], "l2w": [["Southampton", "Everton", 0, 3, "A", "H"], ["Everton", "Chelsea", 3, 1, "H", "A"]]}, "Stoke": {"w2d": [["Stoke", "Leicester", 2, 2, "D", "H"]], "w2l": [["Stoke", "West Brom", 0, 1, "A", "H"], ["Stoke", "Watford", 0, 2, "A", "H"], ["Sunderland", "Stoke", 2, 0, "H", "A"], ["Stoke", "Crystal Palace", 1, 2, "A", "H"]], "l2d": [["Tottenham", "Stoke", 2, 2, "D", "H"], ["Norwich", "Stoke", 1, 1, "D", "H"], ["Newcastle", "Stoke", 0, 0, "D", "H"], ["West Ham", "Stoke", 0, 0, "D", "H"]], "l2w": [["Aston Villa", "Stoke", 0, 1, "A", "H"], ["Swansea", "Stoke", 0, 1, "A", "H"], ["Stoke", "Chelsea", 1, 0, "H", "A"], ["Southampton", "Stoke", 0, 1, "A", "H"], ["Stoke", "Man City", 2, 0, "H", "A"], ["Stoke", "Man United", 2, 0, "H", "A"], ["Everton", "Stoke", 3, 4, "A", "H"]]}, "West Brom": {"w2l": [["West Brom", "Bournemouth", 1, 2, "A", "H"]], "l2d": [["Watford", "West Brom", 0, 0, "D", "H"], ["West Brom", "Southampton", 0, 0, "D", "A"], ["West Ham", "West Brom", 1, 1, "D", "H"], ["West Brom", "Tottenham", 1, 1, "D", "A"], ["Liverpool", "West Brom", 2, 2, "D", "H"]], "l2w": [["Stoke", "West Brom", 0, 1, "A", "H"], ["Aston Villa", "West Brom", 0, 1, "A", "H"], ["Norwich", "West Brom", 0, 1, "A", "H"], ["West Brom", "Arsenal", 2, 1, "H", "A"]]}, "Swansea": {"w2l": [["Swansea", "Stoke", 0, 1, "A", "H"], ["Swansea", "Leicester", 0, 3, "A", "H"]], "w2d": [["Sunderland", "Swansea", 1, 1, "D", "A"], ["Swansea", "Everton", 0, 0, "D", "H"], ["Swansea", "Tottenham", 2, 2, "D", "H"], ["Swansea", "Bournemouth", 2, 2, "D", "H"], ["Swansea", "West Ham", 0, 0, "D", "H"]], "l2d": [["Chelsea", "Swansea", 2, 2, "D", "H"], ["Crystal Palace", "Swansea", 0, 0, "D", "H"]], "l2w": [["Swansea", "Man United", 2, 1, "H", "A"]]}, "Chelsea": {"w2d": [["Chelsea", "Swansea", 2, 2, "D", "H"], ["Newcastle", "Chelsea", 2, 2, "D", "A"], ["Chelsea", "Watford", 2, 2, "D", "H"]], "w2l": [["Chelsea", "Crystal Palace", 1, 2, "A", "H"], ["Everton", "Chelsea", 3, 1, "H", "A"], ["Chelsea", "Southampton", 1, 3, "A", "H"], ["West Ham", "Chelsea", 2, 1, "H", "A"], ["Chelsea", "Liverpool", 1, 3, "A", "H"], ["Stoke", "Chelsea", 1, 0, "H", "A"], ["Chelsea", "Bournemouth", 0, 1, "A", "H"], ["Leicester", "Chelsea", 2, 1, "H", "A"]], "l2d": [["Tottenham", "Chelsea", 0, 0, "D", "H"], ["Man United", "Chelsea", 0, 0, "D", "H"]]}, "Tottenham": {"w2l": [["Tottenham", "Newcastle", 1, 2, "A", "H"]], "w2d": [["Tottenham", "Stoke", 2, 2, "D", "H"], ["Tottenham", "Everton", 0, 0, "D", "H"], ["Tottenham", "Liverpool", 0, 0, "D", "H"], ["Tottenham", "Chelsea", 0, 0, "D", "H"], ["West Brom", "Tottenham", 1, 1, "D", "A"], ["Everton", "Tottenham", 1, 1, "D", "A"]], "l2d": [["Leicester", "Tottenham", 1, 1, "D", "H"], ["Swansea", "Tottenham", 2, 2, "D", "H"], ["Arsenal", "Tottenham", 1, 1, "D", "H"]], "l2w": [["Tottenham", "Man City", 4, 1, "H", "A"], ["Southampton", "Tottenham", 0, 2, "A", "H"]]}}

//Width and height
//http://bl.ocks.org/mbostock/3019563
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    padding = {top: 60, right: 60, bottom: 60, left: 60},
    outerWidth = 960,
    outerHeight = 650,
    innerWidth = outerWidth - margin.left - margin.right,
    innerHeight = outerHeight - margin.top - margin.bottom,
    width = innerWidth - padding.left - padding.right,
    height = innerHeight - padding.top - padding.bottom,
    xLegend = width - 200,
    yLegend = 9,
    legendWidth = 18,
    legendHeight = 18,
    yLabelPadding = 15,
    xTicksPadding = 15
    ;

var xColumn = "team";
var yData = [
  {key: "l2w", color: "hsl(120, 70%, 65%)",
    colorHighlighted: "hsl(120, 100%, 65%)",
    legend: "Unexpected win on predicted loss",
    tooltip: " unexpected win(s) on predicted loss(es)"
  },
  // {key: "d2w", color: "hsl(96, 70%, 65%)",
  //   colorHighlighted: "hsl(96, 100%, 65%)",
  //   legend: "Unexpected win on predicted draw",
  //   tooltip: " unexpected win(s) on predicted draw(s)"
  // },
  {key: "l2d", color: "hsl(72, 70%, 65%)",
    colorHighlighted: "hsl(72, 100%, 65%)",
    legend: "Unexpected draw on predicted loss",
    tooltip: " unexpected draw(s) on predicted loss(es)"
  },
  {key: "w2d", color: "hsl(48, 70%, 65%)",
    colorHighlighted: "hsl(48, 100%, 65%)",
    legend: "Unexpected draw on predicted win",
    tooltip: " unexpected draw(s) on predicted win(s)"
  },
  // {key: "d2l", color: "hsl(24, 70%, 65%)",
  //   colorHighlighted: "hsl(24, 100%, 65%)",
  //   legend: "Unexpected loss on predicted draw",
  //   tooltip: " unexpected loss(es) on predicted draw(s)"
  // },
  {key: "w2l", color: "hsl(0, 70%, 65%)",
    colorHighlighted: "hsl(0, 100%, 65%)",
    legend: "Unexpected loss on predicted win",
    tooltip: " unexpected loss(es) on predicted win(s)"
  }
]

function render(data, marker){
  //Create SVG element
  var svg = d3.select(marker)
    .append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)
    ;

  var pageOffset = svg[0][0].getBoundingClientRect();
  //http://stackoverflow.com/questions/25630035/javascript-getboundingclientrect-changes-while-scrolling
  var yScrollOffset = window.scrollY;
  var xScrollOffset = window.scrollX;

  var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    ;

  //Scales
  var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.05)
    ;
  var yScale = d3.scale.linear()
    .range([0, height])
    ;

  //Axes
  var xAxisG = svg.append("g")
    .attr("class", "x axis")
    .attr("transform",
      "translate("+ margin.left +"," + (height + xTicksPadding) + ")")
    ;

  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    ;



  // change number-strings (from CSV) into nums and transpose data for
  // the stack() method to consume
  var layers = yData.map(function(y){return y.key})
    .map(function(c) {
    return data.map(function(d){
      d[c] = +d[c];
      return {x: d[xColumn], y: d[c], key:c};
    })
  });

  // Applying the stack() method adds the y0 baseline attribute
  layers = d3.layout.stack()(layers);

  //Set up scales' domains
  xScale.domain(data.map(function(d) { return d[xColumn]; }));
  yScale.domain([0,
    d3.max(layers, function(d) {
      return d3.max(d, function(d) {
        return d.y0 + d.y;
      });
    })
  ]);

  //Draw axes
  xAxisG.call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)" );
  ;

  // Add a group for each row of data
  var groups = g.selectAll("g")
    .data(layers)
    .enter()
    .append("g")
    .style("fill", function(d, i) {
      return yData[i].color;
    })
    ;

  // Add a rect for each data value
  var rects = groups.selectAll("rect")
    .data(function(d) { return d; })
    ;
  rects.enter()
    .append("rect")
    .attr("x", function(d, i) {
      return xScale(d.x);
    })
    .attr("y", function(d) {
      return height - yScale(d.y0) - yScale(d.y);
    })
    .attr("height", function(d) {
      return yScale(d.y);
    })
    .attr("width", xScale.rangeBand())
    .on("mouseover", function(d) {
      //Highlight this bar on hover
      d3.select(this)
      .attr("fill", yData.filter(function(obj){return obj.key==d.key})[0].colorHighlighted);

      //Get this bar's x/y values, then augment for the tooltip
      var xPosition = pageOffset.left + parseFloat(d3.select(this).attr("x")) + xScale.rangeBand() / 2 + xScrollOffset;
      var yPosition = pageOffset.top + parseFloat(d3.select(this).attr("y")) + yScrollOffset;

      //Update the tooltip position and value
      d3.select("#tooltip")
        .style("left", xPosition + "px")
        .style("top", yPosition + "px")
        .select("#value")
        .html(function(){
          html = "";
          oddResults[d.x][d.key].forEach(function(or){
            html += "<tr>"
            html += "<td>"+or[0]+"</td>";
            html += "<td>"+or[2]+"</td>";
            html += "<td>-</td>";
            html += "<td>"+or[3]+"</td>";
            html += "<td>"+or[1]+"</td>";
            html += "</tr>";

          })
          return html;
        })
        ;
      //Show the tooltip
      d3.select("#tooltip").classed("hidden", false);
    })
    .on("mouseout", function(d) {
      //Reset bar's original color on mouseout
      d3.select(this)
      .transition()
      .duration(250)
      .attr("fill", yData.filter(function(obj){return obj.key==d.key})[0].color);

      //Hide the tooltip on mouseout
      d3.select("#tooltip").classed("hidden", true);
    })
    ;

  rects.exit().remove();

  //Labels
  // Add a group for each text
  var labG = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    ;

  var labelG = labG.selectAll("g")
    .data(layers)
    .enter()
    .append("g")
    .attr("class", "labels")
    ;

  // Add a label for each data value
  var labels = labelG.selectAll("rect")
    .data(function(d) { return d; })
    ;

  labels.enter()
    .append("text")
    .text(function(d) {
      if (d.y == 0){ return ""};
      return d.y;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
      return xScale(d.x) + xScale.rangeBand()/2;
    })
    .attr("y", function(d) {
      return height - yScale(d.y0) - yScale(d.y) + yLabelPadding;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    ;

  labels.exit().remove();

  //legend
  var legend = svg.selectAll(".legend")
    .data(yData);

  legend.enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
    .attr("x", xLegend)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", function(d){return d.color})
    ;

  legend.append("text")
    .attr("x", xLegend + 24)
    .attr("y", yLegend)
    .attr("dy", ".35em")
    .style("text-anchor", "start")
    .text(function(d) { return d.legend; });

  legend.exit().remove();

}; //end of render function
