
Highcharts.chart('container-c', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});


var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

window.onload = function() {
  var ctx = document.getElementById('chart-area').getContext('2d');
  window.myDoughnut = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function() {
  config.data.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });

  window.myDoughnut.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
  var newDataset = {
    backgroundColor: [],
    data: [],
    label: 'New dataset ' + config.data.datasets.length,
  };

  for (var index = 0; index < config.data.labels.length; ++index) {
    newDataset.data.push(randomScalingFactor());

    var colorName = colorNames[index % colorNames.length];
    var newColor = window.chartColors[colorName];
    newDataset.backgroundColor.push(newColor);
  }

  config.data.datasets.push(newDataset);
  window.myDoughnut.update();
});

document.getElementById('addData').addEventListener('click', function() {
  if (config.data.datasets.length > 0) {
    config.data.labels.push('data #' + config.data.labels.length);

    var colorName = colorNames[config.data.datasets[0].data.length % colorNames.length];
    var newColor = window.chartColors[colorName];

    config.data.datasets.forEach(function(dataset) {
      dataset.data.push(randomScalingFactor());
      dataset.backgroundColor.push(newColor);
    });

    window.myDoughnut.update();
  }
});

document.getElementById('removeDataset').addEventListener('click', function() {
  config.data.datasets.splice(0, 1);
  window.myDoughnut.update();
});

document.getElementById('removeData').addEventListener('click', function() {
  config.data.labels.splice(-1, 1); // remove the label first

  config.data.datasets.forEach(function(dataset) {
    dataset.data.pop();
    dataset.backgroundColor.pop();
  });

  window.myDoughnut.update();
});
