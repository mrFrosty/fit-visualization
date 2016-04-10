$(document).ready(function() {
  var blocks1 = [
    {'size':50},
    {'size':50, 'process' : 1},
    {'size':50, 'process' : 2},
    {'size':50,},
    {'size':50,'process' : 3},
    {'size':50,}
  ];
  var blocks2 = [
    {'size':50},
    {'size':50,'process' : 1},
    {'size':50,'process' : 2},
    {'size':50},
    {'size':50,'process' : 3},
    {'size':50}
  ];
  var blocks3 = [
    {'size':50},
    {'size':50, 'process' : 6},
    {'size':50},
    {'size':50 ,'process' : 1},
    {'size':50},
    {'size':50 ,'process' : 2},
    {'size':50},
    {'size':50, 'process' : 3},
    {'size':50},
    {'size':50, 'process' : 4}
  ];
  var blocks4 = [
    {'size':50},
    {'size':50, 'process' : 1},
    {'size':50, 'process' : 2},
    {'size':50},
    {'size':50, 'process' : 3},
    {'size':150},
    {'size':50, 'process' : 4},
    {'size':50}
  ];

  fitBuilder = {
    width: '100px',
    sum: function(blocks) {
      var result = 0;
      $.each(blocks, function(index, value) {
        result += value.size;
      });
      return result;
    },
    distributeBlocks: function(target, blocks) {
      var offset = 0;
      var g = d3.select(target);
      g.selectAll("rect").remove();
      var sum = fitBuilder.sum(blocks);
      $.each(blocks, function(index, value) {
      var x = 0;
      var y = offset/sum * 100;
      var height = value.size/sum * 100;
      var height = value.size/sum * 100;
        var rect = g.append("rect")
       .attr("x", x)
       .attr("y", y + '%')
       .attr("width", fitBuilder.width)
       .attr("height", height + '%');
       if (value.process) {
          rect.attr('class', 'allocated');
          g.append('text')
          .attr("x", 50)
          .attr("y", y + height/2 + '%')
          .text(value.process);
       } 
       offset += value.size;
      });
    }
  }

  fitBuilder.distributeBlocks("#first-fit", blocks1, 0);
  fitBuilder.distributeBlocks("#next-fit", blocks2, 0);
  fitBuilder.distributeBlocks("#best-fit", blocks3, 0);
  fitBuilder.distributeBlocks("#worst-fit", blocks4, 0);
});
