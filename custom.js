// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var dataToday = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Friends', 2],
  ['Eat', 2],
  ['TV', 3],
  ['Gym', 2],
  ['Sleep', 7]
]);

var dataWeek = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['Work', 43],
['Friends', 12],
['Eat', 24],
['TV', 31],
['Gym', 21],
['Sleep', 27]
]);

var dataMonth = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['Work', 43],
['Friends', 21],
['Eat', 12],
['TV', 31],
['Gym', 24],
['Sleep', 17]
]);

var dataThreeMonth = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['Work', 18],
['Friends', 22],
['Eat', 13],
['TV', 32],
['Gym', 21],
['Sleep', 17]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My YouTube Usage', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chartToday = new google.visualization.PieChart(document.getElementById('piechartToday'));
  chartToday.draw(dataToday, options);

  var chartWeek = new google.visualization.PieChart(document.getElementById('piechartWeek'));
  chartWeek.draw(dataWeek, options);

  var chartMonth = new google.visualization.PieChart(document.getElementById('piechartMonth'));
  chartMonth.draw(dataMonth, options);

  var chartThreeMonth = new google.visualization.PieChart(document.getElementById('piechartThreeMonth'));
  chartThreeMonth.draw(dataThreeMonth, options);

}
