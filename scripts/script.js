var writers = [
    { name: 'Virginia Woolf',
      booksCount: 20,
      color : '#BD3613' },
    { name: 'Toni Morrison',
      booksCount: 23,
      color : '#A57706' },
    { name: 'Maya Angelou',
      booksCount: 7,
      color : '#595AB7' },
    { name: 'Zora Neale Hurston',
      booksCount: 26,
      color : '#2176C7' },
    { name: 'Annie Dillard',
      booksCount: 13,
      color : '#259286' }
]

var barData = [13,29,98,63,77];

var height = 400,
    width = 600,
    barOffset = 5;

var colors = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range(['red', 'green'])

var yScale = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range([0, height - 20]);

var xScale = d3.scaleBand()
    .domain(d3.range(0, barData.length))
    .rangeRound([0, width])
    .padding(0.05)

d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'lightblue')
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill', colors)
        .attr('width', xScale.bandwidth)
        .attr('height', function(d) { return yScale(d); })
        .attr('x', function(d, i) {
            return xScale(i);
        })
        .attr('y', function(d) {
            return height - yScale(d);
        });
