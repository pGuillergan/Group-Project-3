var trace1 = {
    x: ['skin', 'saliva', 'stool'],
    y: [1024.25, 217.81, 141.65],
    name: 'Dog',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['skin', 'saliva', 'stool'],
    y: [488.87, 186.07, 344.60],
    name: 'Human',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
      barmode: 'group',
      xaxis: {
        title: "Sample Type",
      },
      yaxis: {
        title: "Microbial Diversity",
      },
      title: 'Human vs Dog'
    };
  
  Plotly.newPlot('myDiv_bar_DOGvHu', data, layout);