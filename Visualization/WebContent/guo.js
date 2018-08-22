/**
 * 
 */

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
		
      function drawChart() {//11250
        var data = google.visualization.arrayToDataTable([
          ['Gender', 'Percentage'],
          ['Female',    98978],
          ['Male',      95232]
        ]);

        var options = {
          title: 'GangBook-Gu LivingPeople/Gender'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart.draw(data, options);
      }
      
      
      
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Age', 'Percentage'],
          ['10s',     24192],
          ['20s',      28198],
          ['30s',      28354],
          ['40s',      30726],
          ['50s',      33454],
          ['60s',      49285]
        ]);

        var options = {
          title: 'GangBook-Gu LivingPeople/Age'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart.draw(data, options);
      }
      drawChart(24192);
    
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
		
      function drawChart() {
    	  var data = google.visualization.arrayToDataTable([
              ['Gender', 'Percentage'],
              ['Female',    98978],
              ['Male',      95232]
            ]);

        var options = {
          title: 'GangBook-Gu MovingPeople/Gender'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
      }
      
      
      
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart(v) {

    	  var data = google.visualization.arrayToDataTable([
              ['Age', 'Percentage'],
              ['10s',     406189],
              ['20s',      1327488],
              ['30s',      990408],
              ['40s',      988293],
              ['50s',      1087480],
              ['60s',      934472]
            ]);

        var options = {
          title: 'GangBook-Gu MovingPeople/Age'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

        chart.draw(data, options);
      }
      drawChart(24192);
    
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
		
      function drawChart() {
    	  var data = google.visualization.arrayToDataTable([
              ['Gender', 'Percentage'],
              ['Female',     2008115.481],
              ['Male',      1482290.662]
            ]);

        var options = {
          title: 'GangBook-Gu Profit/Gender'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

        chart.draw(data, options);
      }
      
      
      
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart(v) {

    	  var data = google.visualization.arrayToDataTable([
              ['Age', 'Percentage'],
              ['10s',     106681.901],
              ['20s',      1076095.617],
              ['30s',      927465.5511],
              ['40s',      682524.5375],
              ['50s',      494753.8888],
              ['60s',      202884.768]
            ]);

        var options = {
          title: 'GangBook-Gu Profit/Age'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

        chart.draw(data, options);
      }
      drawChart(24192);
    
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
		
      function drawChart() {
    	  var data = google.visualization.arrayToDataTable([
              ['Gender', 'Percentage'],
              ['Female',     9713],
              ['Male',      10597]
            ]);

            var options = {
              title: 'GangBook-Gu WorkingPeople/Gender'
            };

        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

        chart.draw(data, options);
      }
      
      
      
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart(v) {

    	  var data = google.visualization.arrayToDataTable([
              ['Age', 'Percentage'],
              ['10s',     72],
              ['20s',      2293],
              ['30s',      3686],
              ['40s',      5478],
              ['50s',      5519],
              ['60s',      3260]
            ]);

            var options = {
              title: 'GangBook-Gu WorkingPeople/Age'
            };
      

        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

        chart.draw(data, options);
      }
      drawChart(24192);
