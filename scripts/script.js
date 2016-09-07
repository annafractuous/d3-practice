var barData = [];
for (var i = 0; i < 100; i++) {
  barData.push(Math.round(Math.random() * 50));
}

var height = 400,
    width = 600;

var colors = d3.scaleLinear()
    .domain([0, barData.length*.33, barData.length*.66, barData.length])
    .range(['red', 'purple', 'blue', 'orange'])

var yScale = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range([0, height - 20]);

var xScale = d3.scaleBand()
    .domain(d3.range(0, barData.length))
    .rangeRound([0, width])
    .paddingInner(0.05)

var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

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

chart.transition().duration(700)
      .attr('height', function(d) {
          return yScale(d);
      })
      .attr('y', function(d) {
          return height - yScale(d);
      })
      .delay(function(d, i) {
          return i * 10;
      });

chart.on('mouseover', function(d) {
    d3.select(this)
      .style('opacity', .5)
      .style('stroke', 'darkblue');

    tooltip.transition()
      .style('opacity', .9);

    tooltip.html(d)
      .style('top', (d3.event.pageY - 30) + 'px')
      .style('left', d3.event.pageX + 'px');

  })
  .on('mouseout', function(d) {
    d3.select(this)
      .style('opacity', 1)
      .style('stroke', 'none');
  });
