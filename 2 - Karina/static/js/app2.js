Plotly.d3.csv('https://raw.githubusercontent.com/pGuillergan/Group-Project-3/master/2%20-%20Karina/PCA_with_metadata.csv', function(error, rows){
    console.log(rows)
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
        x: unpack(rows, 'PCoA-1'),
        y: unpack(rows, 'PCoA-2'),
        z: unpack(rows, 'PCoA-3'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          color: 'rgb(23, 190, 207)',
          size: 6
        }
    },{
        alphahull: 7,
        opacity: 0.1,
        type: 'mesh3d',
        x: unpack(rows, 'PCoA-1'),
        y: unpack(rows, 'PCoA-2'),
        z: unpack(rows, 'PCoA-3')
    }];

    var layout = {
        autosize: true,
        height: 480,
        scene: {
            aspectratio: {
                x: 1,
                y: 1,
                z: 1
            },
            camera: {
                center: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                eye: {
                    x: 1.25,
                    y: 1.25,
                    z: 1.25
                },
                up: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            },
            xaxis: {
                type: 'linear',
                title: "PCoA-1",
                zeroline: false
            },
            yaxis: {
                type: 'linear',
                title: "PCoA-2",
                zeroline: false
            },
            zaxis: {
                type: 'linear',
                title: "PCoA-3",
                zeroline: false
            }
        },
        title: 'PCA clustering',
        width: 477
    };

    Plotly.newPlot('myDiv', data, layout);

});