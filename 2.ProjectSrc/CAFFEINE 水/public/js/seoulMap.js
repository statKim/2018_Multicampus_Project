
				google.charts.load("current", {
					packages : [ 'corechart' ]
				});

				function drawChartProfit() {
					var data = google.visualization.arrayToDataTable([
							[ "Gu", "Won", {
								role : "style"
							} ], [ "강남구", 5849959.595, "red" ],
							[ "강동구", 3559231.93, "#black" ],
							[ "강북구", 3660079.784, "#black" ],
							[ "강서구", 4446160.009, "#black" ],
							[ "관악구", 3902572.227, "#black" ],
							[ "광진구", 3723924.838, "#black" ],
							[ "구로구", 5320049.928, "#black" ],
							[ "금천구", 2965047.177, "#black" ],
							[ "노원구", 4859887.447, "#black" ],
							[ "도봉구", 4295890.043, "#black" ],
							[ "동대문구", 5156674.454, "#black" ],
							[ "동작구", 5588254.255, "#black" ],
							[ "마포구", 5099436.722, "#black" ],
							[ "서대문구", 4704757.284, "#black" ],
							[ "서초구", 5089575.589, "#black" ],
							[ "성동구", 6840001.864, "red" ],
							[ "성북구", 4912254.475, "#black" ],
							[ "송파구", 4491812.688, "#black" ],
							[ "양천구", 5248036.173, "#black" ],
							[ "영등포구", 4881671.423, "#black" ],
							[ "용산구", 5618753.131, "#black" ],
							[ "은평구", 3732060.503, "#black" ],
							[ "종로구", 5229127.31, "#black" ],
							[ "중구", 6131854.655, "red" ],
							[ "중랑구", 3834708.91, "#black" ]

					]);

					var view = new google.visualization.DataView(data);
					view.setColumns([ 0, 1, {
						calc : "stringify",
						sourceColumn : 1,
						type : "string",
						role : "annotation"
					}, 2 ]);
					var options = {
						//title: "Comparison of TotalProfit of Cafe in Seoul sorted by Gu",
						width : 1100,
						height : 450,
						bar : {
							groupWidth : "95%"
						},
						legend : {
							position : "none"
						},
					};
					var chart = new google.visualization.ColumnChart(document
							.getElementById("columnchart_values"));
					chart.draw(view, options);
				}

				function drawChartLivingPeople() {
					var data = google.visualization.arrayToDataTable([
							[ "Gu", "people", {
								role : "style"
							} ], [ "강남구", 26152, "#black" ],
							[ "강동구", 48171, "#black" ],
							[ "강북구", 194210, "red" ],
							[ "강서구", 148298, "#black" ],
							[ "관악구", 268607, "red" ],
							[ "광진구", 26826, "#black" ],
							[ "구로구", 80904, "#black" ],
							[ "금천구", 129516, "#black" ],
							[ "노원구", 58424, "#black" ],
							[ "도봉구", 61110, "#black" ],
							[ "동대문구", 131509, "#black" ],
							[ "동작구", 23197, "#black" ],
							[ "마포구", 173370, "#black" ],
							[ "서대문구", 121253, "#black" ],
							[ "서초구", 115343, "#black" ],
							[ "성동구", 155755, "#black" ],
							[ "성북구", 147460, "#black" ],
							[ "송파구", 141023, "#black" ],
							[ "양천구", 42256, "#black" ],
							[ "영등포구", 97843, "#black" ],
							[ "용산구", 116083, "#black" ],
							[ "은평구", 267541, "red" ],
							[ "종로구", 120869, "#black" ],
							[ "중구", 64504, "#black" ],
							[ "중랑구", 110665, "#black" ]

					]);

					var view = new google.visualization.DataView(data);
					view.setColumns([ 0, 1, {
						calc : "stringify",
						sourceColumn : 1,
						type : "string",
						role : "annotation"
					}, 2 ]);

					var options = {
						//title: "Comparison of LivingPeople in Seoul sorted by Gu",
						width : 1100,
						height : 450,
						bar : {
							groupWidth : "95%"
						},
						legend : {
							position : "none"
						},
					};
					var chart = new google.visualization.ColumnChart(document
							.getElementById("columnchart_values"));
					chart.draw(view, options);
				}

				function drawChartWorkingPeople() {
					var data = google.visualization.arrayToDataTable([
							[ "Gu", "people", {
								role : "style"
							} ], [ "강남구", 27345, "#black" ],
							[ "강동구", 10474, "#black" ],
							[ "강북구", 20310, "#black" ],
							[ "강서구", 21481, "#black" ],
							[ "관악구", 28450, "#black" ],
							[ "광진구", 6106, "#black" ],
							[ "구로구", 33052, "#black" ],
							[ "금천구", 21934, "#black" ],
							[ "노원구", 10707, "#black" ],
							[ "도봉구", 7915, "#black" ],
							[ "동대문구", 27357, "#black" ],
							[ "동작구", 5790, "#black" ],
							[ "마포구", 78078, "#black" ],
							[ "서대문구", 57978, "#black" ],
							[ "서초구", 93465, "red" ],
							[ "성동구", 89616, "#black" ],
							[ "성북구", 42989, "#black" ],
							[ "송파구", 36205, "#black" ],
							[ "양천구", 5605, "#black" ],
							[ "영등포구", 45131, "#black" ],
							[ "용산구", 85307, "#black" ],
							[ "은평구", 25818, "#black" ],
							[ "종로구", 129191, "red" ], [ "중구", 152004, "red" ],
							[ "중랑구", 12665, "#black" ]

					]);

					var view = new google.visualization.DataView(data);
					view.setColumns([ 0, 1, {
						calc : "stringify",
						sourceColumn : 1,
						type : "string",
						role : "annotation"
					}, 2 ]);

					var options = {
						//title: "Comparison of WorkingPeople in Seoul sorted by Gu",
						width : 1100,
						height : 450,
						bar : {
							groupWidth : "95%"
						},
						legend : {
							position : "none"
						},
					};
					var chart = new google.visualization.ColumnChart(document
							.getElementById("columnchart_values"));
					chart.draw(view, options);
				}

				google.charts.load("current", {
					packages : [ 'corechart' ]
				});

				function drawChartMovingPeople() {
					var data = google.visualization.arrayToDataTable([
							[ "Gu", "people", {
								role : "style"
							} ], [ "강남구", 6636000, "red" ],
							[ "강동구", 2037000, "#black" ],
							[ "강북구", 1251000, "#black" ],
							[ "강서구", 1715000, "#black" ],
							[ "관악구", 2127000, "#black" ],
							[ "광진구", 1952000, "#black" ],
							[ "구로구", 2205000, "#black" ],
							[ "금천구", 1575000, "#black" ],
							[ "노원구", 2325000, "#black" ],
							[ "도봉구", 1185000, "#black" ],
							[ "동대문구", 2050000, "#black" ],
							[ "동작구", 1704000, "#black" ],
							[ "마포구", 2383000, "#black" ],
							[ "서대문구", 1483000, "#black" ],
							[ "서초구", 3939000, "red" ],
							[ "성동구", 1899000, "#black" ],
							[ "성북구", 2000000, "#black" ],
							[ "송파구", 3540000, "red" ],
							[ "양천구", 856000, "#black" ],
							[ "영등포구", 3224000, "#black" ],
							[ "용산구", 1527000, "#black" ],
							[ "은평구", 359000, "#black" ],
							[ "종로구", 358000, "#black" ],
							[ "중구", 406000, "#black" ],
							[ "중랑구", 317000, "#black" ]

					]);

					var view = new google.visualization.DataView(data);
					view.setColumns([ 0, 1, {
						calc : "stringify",
						sourceColumn : 1,
						type : "string",
						role : "annotation"
					}, 2 ]);

					var options = {
						//title: "Comparison of MovingPeople in Seoul sorted by Gu",
						//if(drawChart(MovingPeople)) =  title: "Comparison of MovingPeople in Seoul sorted by Gu";
						//else if(drawChart(LivingPeople)) = "Comparison of LivingPeople in Seoul sorted by Gu";
						//else if(drawChart(WorkingPeople)) = "Comparison of WorkingPeople in Seoul sorted by Gu";
						//else if(drawChart(TotalProfit)) = "Comparison of TotalProfit in Seoul sorted by Gu";,
						width : 1100,
						height : 450,
						bar : {
							groupWidth : "95%"
						},
						legend : {
							position : "none"
						},
					};
					var chart = new google.visualization.ColumnChart(document
							.getElementById("columnchart_values"));
					chart.draw(view, options);
				}
