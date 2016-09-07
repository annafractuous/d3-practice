var barData = [];
for (var i = 0; i < 100; i++) {
  barData.push(Math.random() * 10);
}

var height = 400,
    width = 600;

var colors = d3.scaleLinear()
    .domain([0, barData.length*.33, barData.length*.66, barData.length])
    .range(['red', 'purple', 'blue', 'orange'])

var currentColor;

var yScale = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range([0, height - 20]);

var xScale = d3.scaleBand()
    .domain(d3.range(0, barData.length))
    .rangeRound([0, width])
    .paddingInner(0.05)

var chart = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill', function(d, i) {
            return colors(i);
        })
        .attr('width', xScale.bandwidth)
        .attr('x', function(d, i) {
            return xScale(i);
        })
        .attr('height', 0)
        .attr('y', height)
        .transition().duration(700)
            .attr('height', function(d) {
                return yScale(d);
            })
            .attr('y', function(d) {
                return height - yScale(d);
            })
            .delay(function(d, i) {
                return i * 10;
            })

chart
  .on('mouseover', function(d) {
    currentColor = this.style.fill;
    d3.select(this)
      .style('opacity', .5)
      .style('fill', 'lightblue')
      .style('stroke', 'darkblue');
  })
  .on('mouseout', function(d) {
    d3.select(this)
      .style('opacity', 1)
      .style('fill', currentColor)
      .style('stroke', 'none');
  });
