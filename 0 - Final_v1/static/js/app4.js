var trace1 = {
    x: ['skin', 'saliva', 'stool'],
    y: [561.04, 176.50, 360.23],
    name: 'Has Dog',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['skin', 'saliva', 'stool'],
    y: [453.19, 190.69, 336.64],
    name: 'Does not have Dog',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
      barmode: 'group',
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
      xaxis: {
        title: "Sample Type",
      },
      yaxis: {
        title: "Microbial Diversity",
      },
      title: 'Human with Dog'
    };
  
  Plotly.newPlot('myDiv_3', data, layout);