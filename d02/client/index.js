import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

function Bootstrap() {
  const steps = [];

  steps.push(new Promise((resolve, reject) => {
    window.google.charts.load('current', {'packages':['corechart']});
    window.google.charts.setOnLoadCallback(resolve);
  }))

  return Promise.all(steps);
}


Bootstrap().then(() => {
  ReactDOM.render(<App />, document.getElementById('container'));
});


window.drawChart = function(dataArray) {
  if ((typeof google === 'undefined') || (typeof google.visualization === 'undefined')) {
    return false;
  }


  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea:{left:20,top:10,width:"100%",height:"80%"},
    title: 'Hgb Needed for DO2/VO2',
    legend: { position: 'bottom' },
    series: {
      0: {
        pointSize: 6,
        lineSize: 2,
        areaOpacity: 0,
        label: "value",
        showTextEvery: 1
      },
      1: {
        pointSize: 6,
        type: 'area',
        "annotations": {
					"highContrast": false,
					"textStyle": {
						"color": "#262626",
						"fontSize": 10,
						"bold": true
					}
				},
      }
    },
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}


