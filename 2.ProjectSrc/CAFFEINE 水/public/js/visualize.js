	var width = 900,
		height = 700;

	var svg = d3.select('body').append('svg')
				.attr('width',width)
				.attr('height',height);


	var map = svg.append('g').attr('id','map'),
		places = svg.append('g').attr('id','places');


	var projection = d3.geo.mercator()      //메르카르트 투영법
    	.center([126.9895, 37.5651])	      //센터 좌표
    	.scale(100000)					            //scale 
    	.translate([width/2, height/2]);    //좌표이동.
 
	var path = d3.geo.path().projection(projection); //path 만들고path 엘리먼트 사용하기 위함(다격형 그리기)

  	var features = topojson.feature(ko, ko.objects.seoul_municipalities_geo).features; //각 feautre 생성
	
  	//var tempVar;
 	map.selectAll("path")	//path 그리는듯.
      	.data(features) 	//features 갯수 만큼 
    	.enter().append("path")	//path 만들고
      	.attr("class", function(d) { 
      		 return "municipality c" + d.properties.code ;
      	})
      	.attr("id", function (d){
      			return d.properties.code;
      	})
      	.attr("d", path)
      	.attr('title', function(d){return d.properties.name}); //툴팁 텍스트.
 
 	//지역별 텍스트 달아주기
  	map.selectAll("text")
      	.data(features)
    	.enter().append("text")
      	.attr("transform", function(d) {
      		 return "translate(" + path.centroid(d) + ")"; 
      	})
      	.attr("dy", ".35em")
      	.attr("class", "municipality-label")
     	.text(function(d) {
     	 return d.properties.name; 
     });

   //마우스 호버 이벤트
    $('path').hover(
      //마우스 오버시
      function(event){
    	//$(this).css('stroke','#f00').css('stroke-width',2);
    	$(this).css('stroke','#f00').css('stroke-width',2);
    //	$(this).attr('onclick', 'alert(1000)');
     	 
    	svg.selectAll("path").sort(function (a, b) { // select the parent and sort the path's
      		if ('c'+a.properties.code == $(event.target).attr('class').split(' ')[1]){    
      			$(event.target).attr('id', a.properties.code);
      			return 1;  
      		}else{
            	return -1;
           }   //end of if
      	});//end of svg
      	
      },  //end of fun
      
      //마우스 아웃시
      function(event){
    	$(this).css('stroke','#fff');
     },	
    ); //end of hover
	
 $('path').click(function(){
	   // alert(this.id);

		
	 $('path').click(function(){
		   //alert(this.id);
		   
		   //alert(1 + " " + ko.objects.seoul_municipalities_geo.geometries[0].properties.code);
		   
			//alert('로딩중');
			if(this.id == 11150){	//양천구
				google.charts.load('current', {'packages':['corechart']});
				google.charts.setOnLoadCallback(yangcheonguLivingGender);

				  function yangcheonguLivingGender() {

					var data = google.visualization.arrayToDataTable([
					  ['Gender', 'Percentage'],
					  ['maleLivingPeople',     20939],
					  ['femaleLivingPeople',     21317]
					]);

					var options = {
					  title: 'yangcheongu Living people/Gender'
					};

					var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

					chart.draw(data, options);
					}
					
				google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguLivingChart);

			  function yangcheonguLivingChart() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     7099],
				  ['Living people_20',     6069],
				  ['Living people_30',     5925],
				  ['Living people_40',     7224],
				  ['Living people_50',     7357],
				  ['Living people_60',     8581]
				]);

				var options = {
				  title: 'yangcheongu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }	
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguMovingGender);

			  function yangcheonguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     423066],
				  ['femaleMovingPeople',     413645]
				]);

				var options = {
				  title: 'yangcheongu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguMovingAge);

			  function yangcheonguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     81704],
				  ['Moving people_20',     152759],
				  ['Moving people_30',     151457],
				  ['Moving people_40',     165729],
				  ['Moving people_50',     162634],
				  ['Moving people_60',     122432]
				]);

				var options = {
				  title: 'yangcheongu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguProfitGender);

			  function yangcheonguProfitGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     2054302.767],
				  ['femaleProfitPeople',     2722759.121]
				]);

				var options = {
				  title: 'yangcheongu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				chart.draw(data, options);
			  }	

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguProfitAge);

			  function yangcheonguProfitAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Profit people_10',     157975.7036],
				  ['Profit people_20',     1311061.734],
				  ['Profit people_30',     1370278.394],
				  ['Profit people_40',     1081389.906	],
				  ['Profit people_50',     654108.2254],
				  ['Profit people_60',     202248.0644]
				]);

				var options = {
				  title: 'yangcheongu Profit people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguWorkingGender);

			  function yangcheonguWorkingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleWorkingPeople',     2470],
				  ['femaleWorkingPeople',     3134]
				]);

				var options = {
				  title: 'yangcheongu Working people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yangcheonguWorkingAge);

			  function yangcheonguWorkingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Working people_10',     12],
				  ['Working people_20',     715],
				  ['Working people_30',     1143],
				  ['Working people_40',     1473],
				  ['Working people_50',     1175],
				  ['Working people_60',     1085]
				]);

				var options = {
				  title: 'yangcheongu Working people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				chart.draw(data, options);
			  }		  
			} else if(this.id == 11190){	//영등포구
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguLivingGender);

			  function yeongdeungpoguLivingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleLivingPeople',     49518],
				  ['femaleLivingPeople',     48325]
				]);

				var options = {
				  title: 'yeongdeungpogu Living people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguLivingAge);

			  function yeongdeungpoguLivingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     11567],
				  ['Living people_20',     15743],
				  ['Living people_30',     16688],
				  ['Living people_40',     15110],
				  ['Living people_50',     16038],
				  ['Living people_60',     22697]
				]);

				var options = {
				  title: 'yeongdeungpogu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }		  

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguMovingGender);

			  function yeongdeungpoguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     1949934],
				  ['femaleMovingPeople',     1756557]
				]);

				var options = {
				  title: 'yeongdeungpogu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }		  
			
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguMovingAge);

			  function yeongdeungpoguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     175349],
				  ['Moving people_20',     824184],
				  ['Moving people_30',     780824],
				  ['Moving people_40',     687607],
				  ['Moving people_50',     704798],
				  ['Moving people_60',     533724]
				]);

				var options = {
				  title: 'yeongdeungpogu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguProfitGender);

			  function yeongdeungpoguProfitGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     1816529.719],
				  ['femaleProfitPeople',     2344646.527]
				]);

				var options = {
				  title: 'yeongdeungpogu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				chart.draw(data, options);
			  }

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguProfitAge);

			  function yeongdeungpoguProfitAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Profit people_10',     66250.26331],
				  ['Profit people_20',     1348546.374],
				  ['Profit people_30',     1229396.04],
				  ['Profit people_40',     832910.7714],
				  ['Profit people_50',     512832.1812],
				  ['Profit people_60',     171240.76]
				]);

				var options = {
				  title: 'yeongdeungpogu Profit people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguWokringGender);

			  function yeongdeungpoguWokringGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleWorkingPeople',     24493],
				  ['femaleWorkingPeople',     20638]
				]);

				var options = {
				  title: 'yeongdeungpogu Working people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yeongdeungpoguWokingAge);

			  function yeongdeungpoguWokingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Working people_10',     270],
				  ['Working people_20',     7772],
				  ['Working people_30',     10695],
				  ['Working people_40',     11111],
				  ['Working people_50',     9169],
				  ['Working people_60',     6114]
				]);

				var options = {
				  title: 'yeongdeungpogu Working people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				chart.draw(data, options);
			  }		 
			} else if(this.id == 11030){	//용산구
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguLivingGender);

			  function yongsanguLivingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleLivingPeople',     57049],
				  ['femaleLivingPeople',     59034]
				]);

				var options = {
				  title: 'yongsangu Living people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				chart.draw(data, options);
			  }		
			
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguLivingAge);

			  function yongsanguLivingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     13608],
				  ['Living people_20',     17563],
				  ['Living people_30',     20241],
				  ['Living people_40',     18715],
				  ['Living people_50',     17918],
				  ['Living people_60',     28037]
				]);

				var options = {
				  title: 'yongsangu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguMovingGender);

			  function yongsanguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     2332190],
				  ['femaleMovingPeople',     2529776]
				]);

				var options = {
				  title: 'yongsangu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }	

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguMovingAge);

			  function yongsanguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     287257],
				  ['Moving people_20',     1689938],
				  ['Moving people_30',     1186430],
				  ['Moving people_40',     758431],
				  ['Moving people_50',     548500],
				  ['Moving people_60',     391412]
				]);

				var options = {
				  title: 'yongsangu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguProfitGender);

			  function yongsanguProfitGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     2067215.256],
				  ['femaleProfitPeople',     2817475.48]
				]);

				var options = {
				  title: 'yongsangu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				chart.draw(data, options);
			  }

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguProfitAge);

			  function yongsanguProfitAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Profit people_10',     113912.8363],
				  ['Profit people_20',     1944572.678],
				  ['Profit people_30',     1454195.966],
				  ['Profit people_40',     766264.082],
				  ['Profit people_50',     433592.8717],
				  ['Profit people_60',     172420.0012]
				]);

				var options = {
				  title: 'yongsangu Profit people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				chart.draw(data, options);
			  }	

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguWorkingGender);

			  function yongsanguWorkingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     52896],
				  ['femaleProfitPeople',     32411]
				]);

				var options = {
				  title: 'yongsangu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(yongsanguWorkingAge);

			  function yongsanguWorkingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Working people_10',     575],
				  ['Working people_20',     15963],
				  ['Working people_30',     20900],
				  ['Working people_40',     24840],
				  ['Working people_50',     17165],
				  ['Working people_60',     5863]
				]);

				var options = {
				  title: 'yongsangu Working people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				chart.draw(data, options);
			  }
			} else if(this.id == 11120){	//은평구	
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguLivingGender);

			  function eunpyeongguLivingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleLivingPeople',     129552],
				  ['femaleLivingPeople',     137989]
				]);

				var options = {
				  title: 'eunpyeong-gu Living people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				chart.draw(data, options);
			  }

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguLivingAge);

			  function eunpyeongguLivingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     40685],
				  ['Living people_20',     36537],
				  ['Living people_30',     41928],
				  ['Living people_40',     44814],
				  ['Living people_50',     42589],
				  ['Living people_60',     60988]
				]);

				var options = {
				  title: 'eunpyeong-gu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguMovingGender);

			  function eunpyeongguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     2847589],
				  ['femaleMovingPeople',     3120861]
				]);

				var options = {
				  title: 'eunpyeong-gu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguMovingAge);

			  function eunpyeongguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     587382],
				  ['Moving people_20',     1186134],
				  ['Moving people_30',     1137574],
				  ['Moving people_40',     1094084],
				  ['Moving people_50',     1060912],
				  ['Moving people_60',     902362]
				]);

				var options = {
				  title: 'eunpyeong-gu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }		  
				  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguProfitGender);

			  function eunpyeongguProfitGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     1466895.381],
				  ['femaleProfitPeople',   2018332.686]
				]);

				var options = {
				  title: 'eunpyeong-gu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				chart.draw(data, options);
			  }

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguProfitAge);

			  function eunpyeongguProfitAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Profit people_10',     85851.77243],
				  ['Profit people_20',     928298.3716],
				  ['Profit people_30',     928896.6137],
				  ['Profit people_40',     851103.4323],
				  ['Profit people_50',     473432.8261],
				  ['Profit people_60',     217645.185]
				]);

				var options = {
				  title: 'eunpyeong-gu Profit people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguWorkingGender);

			  function eunpyeongguWorkingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleWorkingPeople',     12510],
				  ['femaleWorkingPeople',     13308]
				]);

				var options = {
				  title: 'jonglogu Working people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				chart.draw(data, options);
			  }

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(eunpyeongguWorkingAge);

			  function eunpyeongguWorkingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Working people_10',     83],
				  ['Working people_20',     2900],
				  ['Working people_30',     5014],
				  ['Working people_40',     6696],
				  ['Working people_50',     6874],
				  ['Working people_60',     4251]
				]);

				var options = {
				  title: 'eunpyeong-gu Working people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				chart.draw(data, options);
			  }	
			} else if(this.id == 11010){	//종로구
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jongloguLivingGender);

			  function jongloguLivingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleLivingPeople',     58925],
				  ['femaleLivingPeople',     61944]
				]);

				var options = {
				  title: 'jonglogu Living people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				chart.draw(data, options);
			  }	

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jongloguLivingAge);

			  function jongloguLivingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     16896],
				  ['Living people_20',     18085],
				  ['Living people_30',     17595],
				  ['Living people_40',     20046],
				  ['Living people_50',     19640],
				  ['Living people_60',     28607]
				]);

				var options = {
				  title: 'jonglogu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }		

			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jongloguMovingGender);

			  function jongloguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     2438508],
				  ['femaleMovingPeople',     2455299]
				]);

				var options = {
				  title: 'jonglogu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jongloguMovingAge);

			  function jongloguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     425944],
				  ['Moving people_20',     1329204],
				  ['Moving people_30',     945485],
				  ['Moving people_40',     829943],
				  ['Moving people_50',     750328],
				  ['Moving people_60',     612905]
				]);

				var options = {
				  title: 'jonglogu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }	  
			  
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(jongloguProfitGender);

	   function jongloguProfitGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['maleProfitPeople',     1968579.838],
	       ['femaleProfitPeople',     2625414.249]
	     ]);

	     var options = {
	       title: 'jonglogu Profit people/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(jongloguProfitAge);

	   function jongloguProfitAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['Profit people_10',     118167.8744],
	       ['Profit people_20',     1637084.729],
	       ['Profit people_30',     1097800.925],
	       ['Profit people_40',     888693.9729	],
	       ['Profit people_50',     579638.4748],
	       ['Profit people_60',     272608.2465]
	     ]);

	     var options = {
	       title: 'jonglogu Profit people/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

	     chart.draw(data, options);
	   }

	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(jongloguWorkingGender);

	   function jongloguWorkingGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['maleWorkingPeople',     69919],
	       ['femaleWorkingPeople',     59272]
	     ]);

	     var options = {
	       title: 'jonglogu Working people/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

	     chart.draw(data, options);
	   }	  
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(jongloguWorkingAge);

	   function jongloguWorkingAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['Working people_10',     2181],
	       ['Working people_20',     24508],
	       ['Working people_30',     37421],
	       ['Working people_40',     32999],
	       ['Working people_50',     21354],
	       ['Working people_60',     10728]
	     ]);

	     var options = {
	       title: 'jonglogu Working people/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

	     chart.draw(data, options);
	   }
			} else if(this.id == 11020){	//중구
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguLivingGender);

			  function jugguLivingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleLivingPeople',     32483],
				  ['femaleLivingPeople',     32021]
				]);

				var options = {
				  title: 'juggu Living people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				chart.draw(data, options);
			  }		
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguLivingAge);

			  function jugguLivingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     6908],
				  ['Living people_20',     9899],
				  ['Living people_30',     9618],
				  ['Living people_40',     9966],
				  ['Living people_50',     10818],
				  ['Living people_60',     17293]
				]);

				var options = {
				  title: 'juggu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }	 
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguMovingGender);

			  function jugguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     1965849],
				  ['femaleMovingPeople',     1776363]
				]);

				var options = {
				  title: 'juggu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguMovingAge);

			  function jugguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     170676],
				  ['Moving people_20',     929399],
				  ['Moving people_30',     838496],
				  ['Moving people_40',     684559],
				  ['Moving people_50',     630117],
				  ['Moving people_60',     488961]
				]);

				var options = {
				  title: 'juggu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }	  
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguProfitGender);

			  function jugguProfitGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     2252648.965],
				  ['femaleProfitPeople',     2692125.795]
				]);

				var options = {
				  title: 'juggu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguProfitAge);

			  function jugguProfitAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Profit people_10',     117779.96],
				  ['Profit people_20',     1347969.01],
				  ['Profit people_30',     1484478.316],
				  ['Profit people_40',     974953.6774],
				  ['Profit people_50',     672553.6121	],
				  ['Profit people_60',     347179.3493]
				]);

				var options = {
				  title: 'juggu Profit people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				chart.draw(data, options);
			  }
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguWorkingGender);

			  function jugguWorkingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleWorkingPeople',     73850],
				  ['femaleWorkingPeople',     78154]
				]);

				var options = {
				  title: 'juggu Working people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(jugguWorkingAge);

			  function jugguWorkingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Working people_10',     942],
				  ['Working people_20',     29254],
				  ['Working people_30',     51838],
				  ['Working people_40',     42893],
				  ['Working people_50',     21078],
				  ['Working people_60',     5999]
				]);

				var options = {
				  title: 'juggu Working people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				chart.draw(data, options);
			  }
			} else if(this.id == 11070){	//중랑구
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguLivingGender);

			  function juglangguLivingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleLivingPeople',     55585],
				  ['femaleLivingPeople',     55080]
				]);

				var options = {
				  title: 'juglanggu Living people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguLivingAge);

			  function juglangguLivingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Living people_10',     14548],
				  ['Living people_20',     16033],
				  ['Living people_30',     17767],
				  ['Living people_40',     17590],
				  ['Living people_50',     19729],
				  ['Living people_60',     24997]
				]);

				var options = {
				  title: 'juglanggu Living people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				chart.draw(data, options);
			  }	  
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguMovingGender);

			  function juglangguMovingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleMovingPeople',     1323691],
				  ['femaleMovingPeople',     1286700]
				]);

				var options = {
				  title: 'juglanggu Moving people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguMovingAge);

			  function juglangguMovingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Moving people_10',     152619],
				  ['Moving people_20',     550205],
				  ['Moving people_30',     502459],
				  ['Moving people_40',     454347],
				  ['Moving people_50',     537745],
				  ['Moving people_60',     413013]
				]);

				var options = {
				  title: 'juglanggu Moving people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				chart.draw(data, options);
			  }
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguProfitGender);

			  function juglangguProfitGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleProfitPeople',     1596486.943],
				  ['femaleProfitPeople',     1953798.633]
				]);

				var options = {
				  title: 'juglanggu Profit people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				chart.draw(data, options);
			  }
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguProfitAge);

			  function juglangguProfitAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Profit people_10',     79462.69564],
				  ['Profit people_20',     1156427.621],
				  ['Profit people_30',     983303.4198],
				  ['Profit people_40',     713229.206],
				  ['Profit people_50',     447007.6206],
				  ['Profit people_60',     170855.1344]
				]);

				var options = {
				  title: 'juglanggu Profit people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				chart.draw(data, options);
			  }
			  
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguWorkingGender);

			  function juglangguWorkingGender() {

				var data = google.visualization.arrayToDataTable([
				  ['Gender', 'Percentage'],
				  ['maleWorkingPeople',     6805],
				  ['femaleWorkingPeople',     5859]
				]);

				var options = {
				  title: 'juglanggu Working people/Gender'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				chart.draw(data, options);
			  }	
			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(juglangguWorkingAge);

			  function juglangguWorkingAge() {

				var data = google.visualization.arrayToDataTable([
				  ['Age', 'Percentage'],
				  ['Working people_10',     75],
				  ['Working people_20',     1628],
				  ['Working people_30',     2281],
				  ['Working people_40',     3269],
				  ['Working people_50',     3242],
				  ['Working people_60',     2169]
				]);

				var options = {
				  title: 'juglanggu Working people/Age'
				};

				var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				chart.draw(data, options);
			  }	


	}else if(this.id ==11230) {
		 google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuLivingPeopleGender);

	  function GangNamGuLivingPeopleGender() {

	    var data = google.visualization.arrayToDataTable([
	      ['Gender', 'Percentage'],
	      ['Female',     13696],
	      ['Male',      12456]
	    ]);

	    var options = {
	      title: 'GangNam-Gu LivingPeople/Gender'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

	    chart.draw(data, options);
	  }
	  
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuLivingPeopleAge);

	  function GangNamGuLivingPeopleAge() {

	    var data = google.visualization.arrayToDataTable([
	      ['Age', 'Percentage'],
	      ['10s',     4374],
	      ['20s',      3982],
	      ['30s',      4193],
	      ['40s',      4800],
	      ['50s',      4144],
	      ['60s',      4659]
	    ]);

	    var options = {
	      title: 'GangNam-Gu LivingPeople/Age'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

	    chart.draw(data, options);
	  }
		 
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuMovingPeopleGender);

	  function GangNamGuMovingPeopleGender() {

	    var data = google.visualization.arrayToDataTable([
	      ['Gender', 'Percentage'],
	      ['Female',     338843],
	      ['Male',      356710]
	    ]);

	    var options = {
	      title: 'GangNam-Gu MovingPeople/Gender'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

	    chart.draw(data, options);
	  }
	  
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuMovingPeopleAge);

	  function GangNamGuMovingPeopleAge() {

	    var data = google.visualization.arrayToDataTable([
	      ['Age', 'Percentage'],
	      ['10s',     54346],
	      ['20s',      151841],
	      ['30s',      160361],
	      ['40s',      140535],
	      ['50s',      104855],
	      ['60s',      83614]
	    ]);

	    var options = {
	      title: 'GangNam-Gu MovingPeople/Age'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

	    chart.draw(data, options);
	  }
	  
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuProfitGender);

	  function GangNamGuProfitGender() {

	    var data = google.visualization.arrayToDataTable([
	      ['Gender', 'Percentage'],
	      ['Female',     2633725.874],
	      ['Male',      2101190.682]
	    ]);

	    var options = {
	      title: 'GangNam-Gu Profit/Gender'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

	    chart.draw(data, options);
	  }
	  
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuProfitAge);

	  function GangNamGuProfitAge() {

	    var data = google.visualization.arrayToDataTable([
	      ['Age', 'Percentage'],
	      ['10s',     88435.21867],
	      ['20s',      1080881.924],
	      ['30s',      1323327.441],
	      ['40s',      1255321.358],
	      ['50s',      636815.2675],
	      ['60s',      350135.4498]
	    ]);

	    var options = {
	      title: 'GangNam-Gu Profit/Age'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

	    chart.draw(data, options);
	  }
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuWorkingPeopleGender);

	  function GangNamGuWorkingPeopleGender() {

	    var data = google.visualization.arrayToDataTable([
	      ['Gender', 'Percentage'],
	      ['Female',     9520],
	      ['Male',      17825]
	    ]);

	    var options = {
	      title: 'GangNam-Gu WorkingPeople/Gender'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

	    chart.draw(data, options);
	  }
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(GangNamGuWorkingPeopleAge);

	  function GangNamGuWorkingPeopleAge() {

	    var data = google.visualization.arrayToDataTable([
	      ['Age', 'Percentage'],
	      ['10s',     266],
	      ['20s',      6756],
	      ['30s',      8107],
	      ['40s',      5767],
	      ['50s',      4170],
	      ['60s',      2279]
	    ]);

	    var options = {
	      title: 'GangNam-Gu WorkingPeople/Age'
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

	    chart.draw(data, options);
	  }
	   
	}

	else if(this.id == 11250){
		  google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuLivingPeopleGende);

	   function GangDongGuLivingPeopleGende() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     24135],
	       ['Male',      24036]
	     ]);

	     var options = {
	       title: 'GangDong-Gu LivingPeople/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuLivingPeopleAge);

	   function GangDongGuLivingPeopleAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     6840],
	       ['20s',      6837],
	       ['30s',      8633],
	       ['40s',      7644],
	       ['50s',      8165],
	       ['60s',      10052]
	     ]);

	     var options = {
	       title: 'GangDong-Gu LivingPeople/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuMovingPeopleGender);

	   function GangDongGuMovingPeopleGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     717449],
	       ['Male',      737479]
	     ]);

	     var options = {
	       title: 'GangDong-Gu MovingPeople/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuMovingPeopleAge);

	   function GangDongGuMovingPeopleAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     95421],
	       ['20s',      304592],
	       ['30s',      301427],
	       ['40s',      265750],
	       ['50s',      270227],
	       ['60s',      217509]
	     ]);

	     var options = {
	       title: 'GangDong-Gu MovingPeople/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuProfitGender);

	   function GangDongGuProfitGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     1839202.352],
	       ['Male',      1449518.396]
	     ]);

	     var options = {
	       title: 'GangDong-Gu Profit/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuProfitAge);

	   function GangDongGuProfitAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     77945.53131],
	       ['20s',      975012.8557],
	       ['30s',      944513.623],
	       ['40s',      677531.2192],
	       ['50s',      436969.2681],
	       ['60s',      176748.3147]
	     ]);

	     var options = {
	       title: 'GangDong-Gu Profit/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuWorkingPeopleGender);

	   function GangDongGuWorkingPeopleGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     4472],
	       ['Male',      6002]
	     ]);

	     var options = {
	       title: 'GangDong-Gu WorkingPeople/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(GangDongGuWorkingPeopleAge);

	   function GangDongGuWorkingPeopleAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     36],
	       ['20s',      1321],
	       ['30s',      2180],
	       ['40s',      2505],
	       ['50s',      2205],
	       ['60s',      2227]
	     ]);

	     var options = {
	       title: 'GangDong-Gu WorkingPeople/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

	     chart.draw(data, options);
	   }
	}else if(this.id == 11090){
			  	google.charts.load('current', {'packages':['corechart']});
			      google.charts.setOnLoadCallback(GangBookGuLivingPeopleGender);
					
			      function GangBookGuLivingPeopleGender() {//11250
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
			      google.charts.setOnLoadCallback(GangBookGuLivingPeopleAge);
			      function GangBookGuLivingPeopleAge() {

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

			      google.charts.load('current', {'packages':['corechart']});
			      google.charts.setOnLoadCallback(GangBookGuMovingPeopleGender);
			      function GangBookGuMovingPeopleGender() {
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
			      google.charts.setOnLoadCallback(GangBookGuMovingPeopleAge);
			      function GangBookGuMovingPeopleAge(v) {

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
			      google.charts.load('current', {'packages':['corechart']});
			      google.charts.setOnLoadCallback(GangBookGuProfitGender);
					
			      function GangBookGuProfitGender() {
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
			      google.charts.setOnLoadCallback(GangBookGuProfitAge);
			      function GangBookGuProfitAge(v) {

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
			    
			      google.charts.load('current', {'packages':['corechart']});
			      google.charts.setOnLoadCallback(GangBookGuWorkingPeopleGender);
					
			      function GangBookGuWorkingPeopleGender() {
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
			      google.charts.setOnLoadCallback(GangBookGuWorkingPeopleAge);

			      function GangBookGuWorkingPeopleAge() {

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
		 }else if(this.id == 11160){
			google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuLivingPeopleGender);

	     function GangSeoGuLivingPeopleGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     76369],
	         ['Male',      71929]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu LivingPeople/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuLivingPeopleAge);

	     function GangSeoGuLivingPeopleAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     23624],
	         ['20s',      21583],
	         ['30s',      28804],
	         ['40s',      24181],
	         ['50s',      21849],
	         ['60s',      28257]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu LivingPeople/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuMovingPeopleGender);

	     function GangSeoGuMovingPeopleGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     1348256],
	         ['Male',      1266889]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu MovingPeople/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuMovingPeopleAge);

	     function GangSeoGuMovingPeopleAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     212975],
	         ['20s',      560834],
	         ['30s',      590631],
	         ['40s',      467111],
	         ['50s',      419976],
	         ['60s',      363620]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu MovingPeople/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuProfitGender);

	     function GangSeoGuProfitGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     2234757.928],
	         ['Male',      1591471.517]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu Profit/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuProfitAge);

	     function GangSeoGuProfitAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     133543.5144],
	         ['20s',      1060597.393],
	         ['30s',      1124970.459],
	         ['40s',      867343.7466],
	         ['50s',      458998.4389],
	         ['60s',      180776.0139]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu Profit/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuWorkingPeopleGender);

	     function GangSeoGuWorkingPeopleGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     12012],
	         ['Male',      9469]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu WorkingPeople/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(GangSeoGuWorkingPeopleAge);

	     function GangSeoGuWorkingPeopleAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     111],
	         ['20s',      2519],
	         ['30s',      4280],
	         ['40s',      5998],
	         ['50s',      6050],
	         ['60s',      2523]
	       ]);

	       var options = {
	         title: 'GangSeo-Gu WorkingPeople/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

	       chart.draw(data, options);
	     }
		 }else if(this.id == 11210){
			 google.charts.load('current', {'packages':['corechart']});
		      google.charts.setOnLoadCallback(KwanAkGuLivingPeopleGender);

		      function KwanAkGuLivingPeopleGender() {

		        var data = google.visualization.arrayToDataTable([
		          ['Gender', 'Percentage'],
		          ['Female',     131453],
		          ['Male',      137153]
		        ]);

		        var options = {
		          title: 'KwanAk-Gu LivingPeople/Gender'
		        };

		        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

		        chart.draw(data, options);
		      }
		    google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwanAkGuLivingPeopleAge);

	     function KwanAkGuLivingPeopleAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     28363],
	         ['20s',      60526],
	         ['30s',      53339],
	         ['40s',      38262],
	         ['50s',      36074],
	         ['60s',      52041]
	       ]);

	       var options = {
	         title: 'KwanAk-Gu LivingPeople/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

	       chart.draw(data, options);
	     }
	     
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwanAkGuMovingPeopleGender);

	     function KwanAkGuMovingPeopleGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     3555878],
	         ['Male',      3991894]
	       ]);

	       var options = {
	         title: 'KwanAk-Gu MovingPeople/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwanAkGuMovingPeopleAge);

	     function KwanAkGuMovingPeopleAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     423520],
	         ['20s',      2679061],
	         ['30s',      1522219],
	         ['40s',      1024167],
	         ['50s',      1016062],
	         ['60s',      882748]
	       ]);

	       var options = {
	         title: 'KwanAk-Gu MovingPeople/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

	       chart.draw(data, options);
	     }
	     
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwangAkGuProfitGender);

	     function KwangAkGuProfitGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     1995248.336],
	         ['Male',      1668716.497]
	       ]);

	       var options = {
	         title: 'KwangAk-Gu Profit/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwangAkGuProfitAge);

	     function KwangAkGuProfitAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     74725.47379],
	         ['20s',      1287835.811],
	         ['30s',      1108721.308],
	         ['40s',      641022.3311],
	         ['50s',      385778.8266],
	         ['60s',      165881.1885]
	       ]);

	       var options = {
	         title: 'KwangAk-Gu Profit/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwanAkGuWorkingPeopleGender);

	     function KwanAkGuWorkingPeopleGender() {

	       var data = google.visualization.arrayToDataTable([
	         ['Gender', 'Percentage'],
	         ['Female',     13569],
	         ['Male',      14881]
	       ]);

	       var options = {
	         title: 'KwanAk-Gu WorkingPeople/Gender'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

	       chart.draw(data, options);
	     }
	     google.charts.load('current', {'packages':['corechart']});
	     google.charts.setOnLoadCallback(KwanAkGuWorkingPeopleAge);

	     function KwanAkGuWorkingPeopleAge() {

	       var data = google.visualization.arrayToDataTable([
	         ['Age', 'Percentage'],
	         ['10s',     78],
	         ['20s',      3830],
	         ['30s',      6802],
	         ['40s',      7388],
	         ['50s',      6487],
	         ['60s',      3865]
	       ]);

	       var options = {
	         title: 'KwanAk-Gu WorkingPeople/Age'
	       };

	       var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

	       chart.draw(data, options);
	     }
			
		}else if(this.id == 11050){
		  google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuLivingPeopleGender);

	   function KwangJinGuLivingPeopleGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     13704],
	       ['Male',      13122]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu LivingPeople/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuLivingPeopleAge);

	   function KwangJinGuLivingPeopleAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     3860],
	       ['20s',      4407],
	       ['30s',      4732],
	       ['40s',      4385],
	       ['50s',      4367],
	       ['60s',      5075]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu LivingPeople/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuMovingPeopleGender);

	   function KwangJinGuMovingPeopleGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     467341],
	       ['Male',      466316]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu MovingPeople/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuMovingPeopleGender);

	   function KwangJinGuMovingPeopleGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     53215],
	       ['20s',      270070],
	       ['30s',      190061],
	       ['40s',      148414],
	       ['50s',      156142],
	       ['60s',      115754]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu MovingPeople/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuProfitGender);

	   function KwangJinGuProfitGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     1936365.756],
	       ['Male',      1455781.265]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu Profit/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuProfitAge);

	   function KwangJinGuProfitAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     68722.7502],
	       ['20s',      1068431.523],
	       ['30s',      883749.2777],
	       ['40s',      734792.2457],
	       ['50s',      457100.8018],
	       ['60s',      179350.5108]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu Profit/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuWorkingPeopleGender);

	   function KwangJinGuWorkingPeopleGender() {

	     var data = google.visualization.arrayToDataTable([
	       ['Gender', 'Percentage'],
	       ['Female',     2917],
	       ['Male',      3189]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu WorkingPeople/Gender'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

	     chart.draw(data, options);
	   }
	   google.charts.load('current', {'packages':['corechart']});
	   google.charts.setOnLoadCallback(KwangJinGuWorkingPeopleAge);

	   function KwangJinGuWorkingPeopleAge() {

	     var data = google.visualization.arrayToDataTable([
	       ['Age', 'Percentage'],
	       ['10s',     21],
	       ['20s',      1140],
	       ['30s',      1555],
	       ['40s',      1473],
	       ['50s',      1065],
	       ['60s',      852]
	     ]);

	     var options = {
	       title: 'KwangJin-Gu WorkingPeople/Age'
	     };

	     var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

	     chart.draw(data, options);
	   }
		}else if(this.id == 11180){
				  	google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuLivingPeopleGender);
						
				      function GeumChunGuLivingPeopleGender() {//11250
				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
						  ['Female',     62690],
						  ['Male',      66826]
						]);

				        var options = {
				          title: 'GeumChun-Gu LivingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuLivingPeopleAge);
				      function GeumChunGuLivingPeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
							['10s',     16220],
							['20s',      20610],
						['30s',      21138],
						['40s',      20368],
						['50s',      23209],
						['60s',      27971]
						]);

				        var options = {
				          title: 'GeumChun-Gu LivingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }

				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuMovingPeopleGender);
				      function GeumChunGuMovingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
						['Female',     786542],
						['Male',      933999]
						]);

				        var options = {
				          title: 'GeumChun-Gu MovingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuMovingPeopleAge);
				      function GeumChunGuMovingPeopleAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
							  ['10s',     59718],
							  ['20s',      369742],
							['30s',      364302],
							['40s',      313008],
							['50s',      359960],
							['60s',      253804]
						]);

				        var options = {
				          title: 'GeumChun-Gu MovingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuProfitGender);
						
				      function GeumChunGuProfitGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
							['Female',     1398480.133],
							['Male',      1301888.814]
							]);


				        var options = {
				          title: 'GeumChun-Gu Profit/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuProfitAge);
				      function GeumChunGuProfitAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
							['10s',     57671.86208],
							['20s',      752850.0794],
							['30s',      725105.5744],
							['40s',      623051.1132],
							['50s',      417937.7072],
							['60s',      123752.7883]
							]);

				        var options = {
				          title: 'GeumChun-Gu Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuWorkingPeopleGender);
						
				      function GeumChunGuWorkingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
							['Female',     7888],
							['Male',      14046]
							]);

				            var options = {
				              title: 'GeumChun-Gu WorkingPeople/Gender'
				            };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
				      
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GeumChunGuWorkingPeopleAge);

				      function GeumChunGuWorkingPeopleAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
							['10s',     87],
							['20s',      2535],
							['30s',      4178],
							['40s',      5638],
							['50s',      5338],
							['60s',      4158]
							]);

				            var options = {
				              title: 'GeumChun-Gu WorkingPeople/Age'
				            };
				      

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
			   }else if(this.id == 11170){
				  	google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuLivingPeopleGender);
						
				      function GooRoGuLivingPeopleGender() {//11250
				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
		          ['Female',     40398],
		          ['Male',      40506]
		        ]);

				        var options = {
				          title: 'GooRo-Gu LivingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuLivingPeopleAge);
				      function GooRoGuLivingPeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
		          ['10s',     11185],
		          ['20s',      10693],
		          ['30s',      12459],
		          ['40s',      13003],
		          ['50s',      13786],
		          ['60s',      19778]
		        ]);

				        var options = {
				          title: 'GooRo-Gu LivingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }

				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuMovingPeopleGender);
				      function GooRoGuMovingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
		          ['Female',     1021620],
		          ['Male',      1201824]
		        ]);
				        var options = {
				          title: 'GooRo-Gu MovingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuMovingPeopleAge);
				      function GooRoGuMovingPeopleAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
		          ['10s',     120634],
		          ['20s',      491352],
		          ['30s',      465325],
		          ['40s',      412479],
		          ['50s',      406438],
		          ['60s',      327222]
		        ]);

				        var options = {
				          title: 'GooRo-Gu MovingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuProfitGender);
						
				      function GooRoGuProfitGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
		          ['Female',     2541805.328],
		          ['Male',      2274802.804]
		        ]);

				        var options = {
				          title: 'GooRo-Gu Profit/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuProfitAge);
				      function GooRoGuProfitAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
		          ['10s',     125320.9337],
		          ['20s',      1510702.875],
		          ['30s',      1408632.711],
		          ['40s',      972172.0757],
		          ['50s',      589129.5379],
		          ['60s',      210650.1727]
		        ]);

				        var options = {
				          title: 'GooRo-Gu Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuWorkingPeopleGender);
						
				      function GooRoGuWorkingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
		          ['Female',     14749],
		          ['Male',      18303]
		        ]);

				            var options = {
				              title: 'GooRoGu WorkingPeople/Gender'
				            };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
				      
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(GooRoGuWorkingPeopleAge);

				      function GooRoGuWorkingPeopleAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
		          ['10s',     91],
		          ['20s',      5794],
		          ['30s',      8405],
		          ['40s',      6525],
		          ['50s',      4485],
		          ['60s',      7752]
		        ]);

				            var options = {
				              title: 'GooRo-Gu WorkingPeople/Age'
				            };
				      

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
			   }
			   }else if(this.id == 11110){
				  	google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuLivingPeopleGender);
						
				      function NoWonGuLivingPeopleGender() {
				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
		          ['Female',     29186],
		          ['Male',      29238]
		        ]);

				        var options = {
				          title: 'NoWon-Gu LivingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuLivingPeopleAge);
				      function NoWonGuLivingPeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
		          ['10s',     8735],
		          ['20s',      9780],
		          ['30s',      8165],
		          ['40s',      9198],
		          ['50s',      12932],
		          ['60s',      2]
		        ]);

				        var options = {
				          title: 'NoWon-Gu LivingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }

				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuMovingPeopleGender);
				      function NoWonGuMovingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
		          ['Female',     1086136],
		          ['Male',      983252]
		        ]);

				        var options = {
				          title: 'NoWon-Gu MovingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuMovingPeopleAge);
				      function NoWonGuMovingPeopleAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
		          ['10s',     68803],
		          ['20s',      244220],
		          ['30s',      206636],
		          ['40s',      220176],
		          ['50s',      247674],
		          ['60s',      212792]
		        ]);

				        var options = {
				          title: 'NoWon-Gu MovingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuProfitGender);
						
				      function NoWonGuProfitGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
		          ['Female',     2002382.74895594],
		          ['Male',      2648843.44171782]
		        ]);

				        var options = {
				          title: 'NoWon-Gu Profit/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuProfitAge);
				      function NoWonGuProfitAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
		          ['10s',     197760.400244787],
		          ['20s',      1694612.51993416],
		          ['30s',      949696.848105941],
		          ['40s',      965230.094895049],
		          ['50s',      640731.850045545],
		          ['60s',      203194.566276584]
		        ]);

				        var options = {
				          title: 'NoWon-Gu Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuWorkingPeopleGender);
						
				      function NoWonGuWorkingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
		          ['Female',     5242],
		          ['Male',      5465]
		        ]);

				            var options = {
				              title: 'NoWon-Gu WorkingPeople/Gender'
				            };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
				      
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(NoWonGuWorkingPeopleAge);

				      function NoWonGuWorkingPeopleAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
		          ['10s',     43],
		          ['20s',      1207],
		          ['30s',      1786],
		          ['40s',      2719],
		          ['50s',      3013],
		          ['60s',      1939]
		        ]);

				            var options = {
				              title: 'NoWon-Gu WorkingPeople/Age'
				            };
				      

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
			   }else if(this.id == 11100){
				  	google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuLivingPeopleGender);
						
				      function DoBongGuLivingPeopleGender() {
				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
				          ['Female',    30400],
				          ['Male',      30710]
				        ]);

				        var options = {
				          title: 'DoBong-Gu LivingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuLivingPeopleAge);
				      function DoBongGuLivingPeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
				          ['10s',     8398],
				          ['20s',      8438],
				          ['30s',      8507],
				          ['40s',      10004],
				          ['50s',      10684],
				          ['60s',      15079]
				        ]);

				        var options = {
				          title: 'DoBong-Gu LivingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }

				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuMovingPeopleGender);
				      function DoBongGuMovingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
				              ['Female',    1086136],
				              ['Male',      983252]
				            ]);

				        var options = {
				          title: 'DoBong-Gu MovingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuMovingPeopleAge);
				      function DoBongGuMovingPeopleAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
				              ['10s',     68803],
				              ['20s',      244220],
				              ['30s',      206636],
				              ['40s',      220176],
				              ['50s',      247674],
				              ['60s',      212792]
				            ]);

				        var options = {
				          title: 'DoBong-Gu MovingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuProfitGender);
						
				      function DoBongGuProfitGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
				              ['Female',     2002382.74895594],
				              ['Male',      2648843.44171782]
				            ]);

				        var options = {
				          title: 'DoBong-Gu Profit/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuProfitAge);
				      function DoBongGuProfitAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
				              ['10s',     197760.400244787],
				              ['20s',      1694612.51993416],
				              ['30s',      949696.848105941],
				              ['40s',      965230.094895049],
				              ['50s',      640731.850045545],
				              ['60s',      203194.566276584]
				            ]);

				        var options = {
				          title: 'DoBong-Gu Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuWorkingPeopleGender);
						
				      function DoBongGuWorkingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
				              ['Female',     5242],
				              ['Male',      5465]
				            ]);

				            var options = {
				              title: 'DoBong-Gu WorkingPeople/Gender'
				            };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
				      
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DoBongGuWorkingPeopleAge);

				      function DoBongGuWorkingPeopleAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
				              ['10s',     43],
				              ['20s',      1207],
				              ['30s',      1786],
				              ['40s',      2719],
				              ['50s',      3013],
				              ['60s',      1939]
				            ]);

				            var options = {
				              title: 'DoBong-Gu WorkingPeople/Age'
				            };
				      

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }  
					  
			   }else if(this.id == 11060){
				  	google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuLivingPeopleGender);
						
				      function DongDaeMoonGuLivingPeopleGender() {//11250
				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
				          ['Female',    66625],
				          ['Male',      64884]
				        ]);

				        var options = {
				          title: 'DongDaeMoon-Gu LivingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuLivingPeopleAge);
				      function DongDaeMoonGuLivingPeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
				          ['10s',     15605],
				          ['20s',      23345],
				          ['30s',      19799],
				          ['40s',      19718],
				          ['50s',      21445],
				          ['60s',      31597]
				        ]);

				        var options = {
				          title: 'DongDaeMoon-Gu LivingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }

				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuMovingPeopleGender);
				      function DongDaeMoonGuMovingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
				              ['Female',    2987110],
				              ['Male',      2894814]
				            ]);

				        var options = {
				          title: 'DongDaeMoon-Gu MovingPeople/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuMovingPeopleAge);
				      function DongDaeMoonGuMovingPeopleAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
				              ['10s',     597330],
				              ['20s',      2257950],
				              ['30s',      870468],
				              ['40s',      748756],
				              ['50s',      748720],
				              ['60s',      658711]
				            ]);

				        var options = {
				          title: 'DongDaeMoon-Gu MovingPeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuProfitGender);
						
				      function DongDaeMoonGuProfitGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
				              ['Female',     2028717.31639316],
				              ['Male',      2673502.59232632]
				            ]);

				        var options = {
				          title: 'DongDaeMoon-Gu Profit/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuProfitAge);
				      function DongDaeMoonGuProfitAge(v) {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
				              ['10s',     200194.278919184],
				              ['20s',      2027899.48750711],
				              ['30s',      1129015.44234263],
				              ['40s',      736387.713481579],
				              ['50s',      446279.572434289],
				              ['60s',      162442.635239447]
				            ]);

				        var options = {
				          title: 'DongDaeMoon-Gu Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
				    
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuWorkingPeopleGender);
						
				      function DongDaeMoonGuWorkingPeopleGender() {
				    	  var data = google.visualization.arrayToDataTable([
				              ['Gender', 'Percentage'],
				              ['Female',     14463],
				              ['Male',      12894]
				            ]);

				            var options = {
				              title: 'DongDaeMoon-Gu WorkingPeople/Gender'
				            };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
				      
				      
				      google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongDaeMoonGuWorkingPeopleAge);

				      function DongDaeMoonGuWorkingPeopleAge() {

				    	  var data = google.visualization.arrayToDataTable([
				              ['Age', 'Percentage'],
				              ['10s',     119],
				              ['20s',      3825],
				              ['30s',      6655],
				              ['40s',      7762],
				              ['50s',      5891],
				              ['60s',      3104]
				            ]);

				            var options = {
				              title: 'DongDaeMoon-Gu WorkingPeople/Age'
				            };
				      

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      } 
				      
			   }else if(this.id == 11080){
				    	 	google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuLivingPeopleGender);

				    	      function SeoungBookGuLivingPeopleGender() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Gender', 'Percentage'],
				    	          ['Female',     76351],
				    	          ['Male',      71109]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu LivingPeople/Gender'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				    	        chart.draw(data, options);
				    	      }
				    	      google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuLivingPeopleAge);

				    	      function SeoungBookGuLivingPeopleAge() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Age', 'Percentage'],
				    	          ['10s',     18855],
				    	          ['20s',      27833],
				    	          ['30s',      22024],
				    	          ['40s',      22681],
				    	          ['50s',      22070],
				    	          ['60s',      33997]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu LivingPeople/Age'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				    	        chart.draw(data, options);
				    	      }
				    	       google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuMovingPeopleGender);

				    	      function SeoungBookGuMovingPeopleGender() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Gender', 'Percentage'],
				    	          ['Female',     3421678],
				    	          ['Male',      3148010]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu MovingPeople/Gender'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				    	        chart.draw(data, options);
				    	      }
				    	       google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuMovingPeopleAge);

				    	      function SeoungBookGuMovingPeopleAge() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Age', 'Percentage'],
				    	          ['10s',     784598],
				    	          ['20s',      2389435],
				    	          ['30s',      1000369],
				    	          ['40s',      887465],
				    	          ['50s',      833134],
				    	          ['60s',      674690]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu MovingPeople/Age'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				    	        chart.draw(data, options);
				    	      }
				    	      google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBukGuProfitGender);

				    	      function SeoungBukGuProfitGender() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Gender', 'Percentage'],
				    	          ['Female',     2631520.13],
				    	          ['Male',      1936287.298]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBuk-Gu Profit/Gender'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				    	        chart.draw(data, options);
				    	      }
				    	      google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuProfitAge);

				    	      function SeoungBookGuProfitAge() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Age', 'Percentage'],
				    	          ['10s',     158626.9309],
				    	          ['20s',      1724949.034],
				    	          ['30s',      1082250.447],
				    	          ['40s',      829180.2659],
				    	          ['50s',      556183.95],
				    	          ['60s',      216616.9393]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu Profit/Age'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				    	        chart.draw(data, options);
				    	      }

				    			 google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuWorkingPeopleGender);

				    	      function SeoungBookGuWorkingPeopleGender() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Gender', 'Percentage'],
				    	          ['Female',     20137],
				    	          ['Male',      22852]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu WorkingPeople/Gender'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				    	        chart.draw(data, options);
				    	      }
				    	      google.charts.load('current', {'packages':['corechart']});
				    	      google.charts.setOnLoadCallback(SeoungBookGuWorkingPeopleAge);

				    	      function SeoungBookGuWorkingPeopleAge() {

				    	        var data = google.visualization.arrayToDataTable([
				    	          ['Age', 'Percentage'],
				    	          ['10s',     116],
				    	          ['20s',      6098],
				    	          ['30s',      9142],
				    	          ['40s',      11008],
				    	          ['50s',      10120],
				    	          ['60s',      6505]
				    	        ]);

				    	        var options = {
				    	          title: 'SeoungBook-Gu WorkingPeople/Age'
				    	        };

				    	        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				    	        chart.draw(data, options);
				    	      }
	 
			   }else if(this.id == 11200){
					google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakLivingpeopleGender);

				      function DongjakLivingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     11325],
				          ['여자',      11872]
				        ]);

				        var options = {
				          title: 'Living people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakLivingpeopleAge);

				      function DongjakLivingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     2480],
				          ['LivingPeople_20',      4416],
				          ['LivingPeople_30',      4393],
				          ['LivingPeople_40',      3402],
				          ['LivingPeople_50',      3406],
				          ['LivingPeople_60',      5100]
				        ]);

				        var options = {
				          title: 'Living people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }
					  
					   google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakMovingpeopleAge);

				      function DongjakMovingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     89412],
				          ['LivingPeople_20',      336380],
				          ['LivingPeople_30',      208080],
				          ['LivingPeople_40',      161315],
				          ['LivingPeople_50',      171184],
				          ['LivingPeople_60',      153331]
				        ]);

				        var options = {
				          title: 'Moving people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakMovingpeopleGender);

				      function DongjakMovingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     575856],
				          ['여자',      543850]
				        ]);

				        var options = {
				          title: '동작구 Moving people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(ProfitAge);

				      function ProfitAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 원'],
				          ['profit_10',     113538.3585875],
				          ['profit_20',      1508357.63042857],
				          ['profit_30',     1205684.4485125],
				          ['profit_40',     888401.839641072],
				          ['profit_50',     566581.314291071],
				          ['profit_60',     279102.391757321],
				        ]);

				        var options = {
				          title: '동작구 Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakProfitGender);

				      function DongjakProfitGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 원)'],
				          ['남자',    2112915.33842857],
				          ['여자',      2448750.46239286]
				        ]);

				        var options = {
				          title: '동작구 Profit/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakWorkingpeopleAge);

				      function DongjakWorkingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['WorkingPeople_10',     27],
				          ['WorkingPeople_20',      742],
				          ['WorkingPeople_30',      1573],
				          ['WorkingPeople_40',      1518],
				          ['WorkingPeople_50',      1254],
				          ['WorkingPeople_60',      676]
				        ]);

				        var options = {
				          title: 'Working people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(DongjakWorkingpeopleGender);

				      function DongjakWorkingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     2800],
				          ['여자',      2990]
				        ]);

				        var options = {
				          title: '동작구 Working people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
					  }else if(this.id == 11140){
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoLivingpeopleAge);

				      function MapoLivingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     21195],
				          ['LivingPeople_20',      30366],
				          ['LivingPeople_30',      32650],
				          ['LivingPeople_40',      27744],
				          ['LivingPeople_50',      24777],
				          ['LivingPeople_60',      36637]
				        ]);

				        var options = {
				          title: 'Mapo Living people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoLivingpeopleGender);

				      function MapoLivingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     82739],
				          ['여자',      90631]
				        ]);

				        var options = {
				          title: 'Mapo Living people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoMovingpeopleAge);

				      function MapoMovingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     439278],
				          ['LivingPeople_20',      2275843],
				          ['LivingPeople_30',      1541400],
				          ['LivingPeople_40',      1072402],
				          ['LivingPeople_50',      822539],
				          ['LivingPeople_60',      597014]
				        ]);

				        var options = {
				          title: 'MapoMovingpeople/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoMovingpeopleGender);

				      function MapoMovingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     3250065],
				          ['여자',      3498424]
				        ]);

				        var options = {
				          title: '마포구 Moving people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoProfitAge);

				      function MapoProfitAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 원'],
				          ['profit_10',     114404.34323204],
				          ['profit_20',      1910546.70060596],
				          ['profit_30',     1236821.90349275],
				          ['profit_40',     705136.257040933],
				          ['profit_50',     369815.347851477],
				          ['profit_60',     116714.344947301],
				        ]);

				        var options = {
				          title: '마포구 Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
					  
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoProfitGender);

				      function MapoProfitGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 원)'],
				          ['남자',    1821521.71848964],
				          ['여자',      2631917.08087306]
				        ]);

				        var options = {
				          title: '마포구 Profit /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoWorkingpeopleAge);

				      function MapoWorkingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				           ['WorkingPeople_10',     532],
				          ['WorkingPeople_20',      13994],
				          ['WorkingPeople_30',      19247],
				          ['WorkingPeople_40',      17836],
				          ['WorkingPeople_50',      14319],
				          ['WorkingPeople_60',      12150]
				        ]);

				        var options = {
				          title: 'Working people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(MapoWorkingpeopleGender);

				      function MapoWorkingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     41199],
				          ['여자',      36879]
				        ]);

				        var options = {
				          title: '마포구 Working people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }
					  }else if(this.id == 11130){
						  google.charts.load('current', {'packages':['corechart']});
					      google.charts.setOnLoadCallback(SeodamunLivingpeopleGender);

					      function SeodamunLivingpeopleGender() {

					        var data = google.visualization.arrayToDataTable([
					          ['성별', '(단위 : 명)'],
					          ['남자',     58712],
					          ['여자',      62541]
					        ]);

					        var options = {
					          title: 'Seodamun Living people /Gender'
					        };

					        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

					        chart.draw(data, options);
					      }
						  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunLivingpeopleAge);

				      function SeodamunLivingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     16356],
				          ['LivingPeople_20',      20899],
				          ['LivingPeople_30',      17844],
				          ['LivingPeople_40',      18997],
				          ['LivingPeople_50',      18682],
				          ['LivingPeople_60',      28475]
				        ]);

				        var options = {
				          title: 'Seodamun Living people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }
					  

					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunMovingpeopleAge);

				      function SeodamunMovingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['Movingpeople_10',     473291],
				          ['Movingpeople_20',      1553229],
				          ['Movingpeople_30',      753291],
				          ['Movingpeople_40',      656537],
				          ['Movingpeople_50',      580788],
				          ['Movingpeople_60',      467536]
				        ]);

				        var options = {
				          title: 'Seodamun Moving people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunMovingpeopleGender);

				      function SeodamunMovingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     2157222],
				          ['여자',      2327437]
				        ]);

				        var options = {
				          title: '서대문구 Moving people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunProfitAge);

				      function SeodamunProfitAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 원'],
				          ['profit_10',     157952.225789583],
				          ['profit_20',      1692922.55718056],
				          ['profit_30',     922674.168652431],
				          ['profit_40',     740455.760695833],
				          ['profit_50',     498395.801574653],
				          ['profit_60',     211087.148628368],
				        ]);

				        var options = {
				          title: '서대문구 Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunProfitGender);

				      function SeodamunProfitGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 원)'],
				          ['남자',   1730842.71173958],
				          ['여자',     2492644.83397222]
				        ]);

				        var options = {
				          title: '서대문구 Profit /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
						   
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunWorkingpeopleAge);

				      function SeodamunWorkingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['WorkingPeople_10',     164],
				          ['WorkingPeople_20',      12278],
				          ['WorkingPeople_30',      16973],
				          ['WorkingPeople_40',      14725],
				          ['WorkingPeople_50',      9825],
				          ['WorkingPeople_60',      4013]
				        ]);

				        var options = {
				          title: 'Seodamun Working people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeodamunWorkingpeopleGender);

				      function SeodamunWorkingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     23778],
				          ['여자',      34200]
				        ]);

				        var options = {
				          title: '서대문구 Working people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
						}
					  }else if(this.id == 11220){
					  
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguLivingpeopleAge);

				      function SeochoguLivingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     17998],
				          ['LivingPeople_20',      17615],
				          ['LivingPeople_30',      22423],
				          ['LivingPeople_40',      19914],
				          ['LivingPeople_50',      16336],
				          ['LivingPeople_60',      21057]
				        ]);

				        var options = {
				          title: 'Seochogu Living people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguLivingpeopleGender);

				      function SeochoguLivingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     54976],
				          ['여자',      60367]
				        ]);

				        var options = {
				          title: 'Seochogu Living people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
						   
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguMovingpeopleAge);

				      function SeochoguMovingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     191236],
				          ['LivingPeople_20',      837736],
				          ['LivingPeople_30',      836053],
				          ['LivingPeople_40',      665757],
				          ['LivingPeople_50',      510649],
				          ['LivingPeople_60',      440004]
				        ]);

				        var options = {
				          title: 'Seochogu Moving people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
						
					google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguMovingpeopleGender);

				      function SeochoguMovingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     1817371],
				          ['여자',      1664054]
				        ]);

				        var options = {
				          title: '서초구 Moving people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguProfitAge);

				      function SeochoguProfitAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 원'],
				          ['profit_10',     69547.6632354275],
				          ['profit_20',      1174703.11310797],
				          ['profit_30',     1261160.6620337],
				          ['profit_40',     870140.066285507],
				          ['profit_50',     434167.224555072],
				          ['profit_60',     225316.943608587],
				        ]);

				        var options = {
				          title: '서초구 Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguProfitGender);

				      function SeochoguProfitGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 원)'],
				          ['남자',   1777724.40651087],
				          ['여자',     2257311.10388043]
				        ]);

				        var options = {
				          title: '서초구 Profit /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
					  
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguWorkingpeopleAge);

				      function SeochoguWorkingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['WorkingPeople_10',     626],
				          ['WorkingPeople_20',      19144],
				          ['WorkingPeople_30',      25228],
				          ['WorkingPeople_40',      22290],
				          ['WorkingPeople_50',      15484],
				          ['WorkingPeople_60',      10693]
				        ]);

				        var options = {
				          title: 'Seochogu Working people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeochoguWorkingpeopleGender);

				      function SeochoguWorkingpeopleGender(){

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     53213],
				          ['여자',      40252]
				        ]);

				        var options = {
				          title: '서초구 Working people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
							}
					   }else if(this.id == 11040){
						google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguLivingpeopleGender);

				      function SeongdongguLivingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     79037],
				          ['여자',      76718]
				        ]);

				        var options = {
				          title: 'Seongdonggu Living people /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguLivingpeopleAge);

				      function SeongdongguLivingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     20047],
				          ['LivingPeople_20',      25565],
				          ['LivingPeople_30',      25257],
				          ['LivingPeople_40',      24521],
				          ['LivingPeople_50',      26567],
				          ['LivingPeople_60',      33798]
				        ]);

				        var options = {
				          title: 'Seongdonggu Living people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguMovingpeopleAge);

				      function SeongdongguMovingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['LivingPeople_10',     251575],
				          ['LivingPeople_20',      1140468],
				          ['LivingPeople_30',      941046],
				          ['LivingPeople_40',      751283],
				          ['LivingPeople_50',      757497],
				          ['LivingPeople_60',      564154]
				        ]);

				        var options = {
				          title: 'Seongdonggu Moving people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguMovingpeopleGender);

				      function SeongdongguMovingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     2291367],
				          ['여자',      2114667]
				        ]);

				        var options = {
				          title: '성동구 Moving people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguProfitAge);

				      function SeongdongguProfitAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['profit_10',     150742.006680843],
				          ['profit_20',      2116455.08143072],
				          ['profit_30',     1665868.53724398],
				          ['profit_40',     1112216.46086566],
				          ['profit_50',     648928.119087952],
				          ['profit_60',     264650.01456747],
				        ]);

				        var options = {
				          title: '성동구 Profit/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguProfitGender);

				      function SeongdongguProfitGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 원)'],
				          ['남자',     2588410.39846386],
				          ['여자',      3370449.65287952]
				        ]);

				        var options = {
				          title: '성동구 Profit /Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguWorkingpeopleAge);

				      function SeongdongguWorkingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['나이대', '단위: 명'],
				          ['WorkingPeople_10',     376],
				          ['WorkingPeople_20',      16394],
				          ['WorkingPeople_30',      23066],
				          ['WorkingPeople_40',      23248],
				          ['WorkingPeople_50',      18287],
				          ['WorkingPeople_60',      8245]
				        ]);

				        var options = {
				          title: 'Seongdonggu Working people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(SeongdongguWorkingpeopleGender);

				      function SeongdongguWorkingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['성별', '(단위 : 명)'],
				          ['남자',     53766],
				          ['여자',      35850]
				        ]);

				        var options = {
				          title: '성동구 Working people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
						}
					  }else if(this.id == 11240){
					  
					google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguLivingpeopleGender);

				      function songpaguLivingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
				          ['maleLivingPeople',     68191],
				          ['femaleLivingPeople',     72832]
				        ]);

				        var options = {
				          title: 'songpagu Living people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

				        chart.draw(data, options);
				      }
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguLivingpeopleAge);

				      function songpaguLivingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
				          ['Living people_10',     20607],
				          ['Living people_20',     21816],
				          ['Living people_30',     28405],
				          ['Living people_40',     22920],
				          ['Living people_50',     21790],
				          ['Living people_60',     25485]
				        ]);

				        var options = {
				          title: 'songpagu Living people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

				        chart.draw(data, options);
				      }
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguMovingpeopleAge);

				      function songpaguMovingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
				          ['Moving people_10',     166933],
				          ['Moving people_20',     593390],
				          ['Moving people_30',     622065],
				          ['Moving people_40',     483681],
				          ['Moving people_50',     476285],
				          ['Moving people_60',     390035]
				        ]);

				        var options = {
				          title: 'songpagu Moving people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguMovingpeopleGender);

				      function songpaguMovingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
				          ['maleMovingPeople',     1374068],
				          ['femaleMovingPeople',     1358320]
				        ]);

				        var options = {
				          title: 'songpagu Moving people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguProfitpeopleAge);

				      function songpaguProfitpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
				          ['Profit people_10',     102645.9813],
				          ['Profit people_20',     1305182.489],
				          ['Profit people_30',     1094612.348],
				          ['Profit people_40',     815775.4194],
				          ['Profit people_50',     495479.971],
				          ['Profit people_60',     267472.0804]
				        ]);

				        var options = {
				          title: 'songpagu Profit people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguProfitpeopleGender);

				      function songpaguProfitpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
				          ['maleProfitPeople',     1757815.032],
				          ['femaleProfitPeople',     2323353.139]
				        ]);

				        var options = {
				          title: 'songpagu Profit people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguWorkingpeopleAge);

				      function songpaguWorkingpeopleAge() {

				        var data = google.visualization.arrayToDataTable([
				          ['Age', 'Percentage'],
				          ['Working people_10',     197],
				          ['Working people_20',     4895],
				          ['Working people_30',     8052],
				          ['Working people_40',     8838],
				          ['Working people_50',     7560],
				          ['Working people_60',     6663]
				        ]);

				        var options = {
				          title: 'songpagu Working people/Age'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

				        chart.draw(data, options);
				      }
					  
					  google.charts.load('current', {'packages':['corechart']});
				      google.charts.setOnLoadCallback(songpaguWorkingpeopleGender);

				      function songpaguWorkingpeopleGender() {

				        var data = google.visualization.arrayToDataTable([
				          ['Gender', 'Percentage'],
				          ['maleWorkingPeople',     22083],
				          ['femaleWorkingPeople',     14122]
				        ]);

				        var options = {
				          title: 'songpagu Working people/Gender'
				        };

				        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

				        chart.draw(data, options);
				      }   	      			    	     			    	      
				    	      
	}
		   document.getElementById("myModal").style.display = "block";
		}
		
	 );//end of click */
	  

	}
	
 );//end of click */

	function modelClose(){
		document.getElementById("myModal").style.display = "none";
	}
