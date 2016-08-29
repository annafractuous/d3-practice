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

d3.select('#chart')
    .selectAll('div')
    .data(writers)
    .enter().append('div')
        .classed('item', true)
        .text(function(d) { return d.name + " | " + d.booksCount })
        .style('color', 'white')
        .style('width', function(d) { return d.booksCount * 30 + "px" })
        .style('background', function(d) { return d.color })
