(function() {
				window.onload = function(){
					// Creating Map
					var latlng2 = new google.maps.LatLng(1.33992,103.706727);
					var options2 = {
					  zoom: 14,
					  center: latlng2,
					  mapTypeId: google.maps.MapTypeId.ROADMAP
					}; 
					var map2 = new google.maps.Map(document.getElementById('map2'), options2);
					
					// Creating a Marker
					var marker2 = new google.maps.Marker({
						position: new google.maps.LatLng(1.33992,103.706727), 
						map: map2,
						title: 'Jurong Point Shopping Center',
					  });
					  
					// Creating an InfowWindow          
						var infowindow2 = new google.maps.InfoWindow({
						content: '1 Jurong West Central 2<br>#03-66'
					});

					// Adding a click event to the marker
						google.maps.event.addListener(marker2, 'click', function() {
						// Opening the InfoWindow
						infowindow2.open(map2, marker2);
					});
					
 
 					// Creating Map
					var latlng3 = new google.maps.LatLng(1.300327,103.855832);
					var options3 = {
					  zoom: 14,
					  center: latlng3,
					  mapTypeId: google.maps.MapTypeId.ROADMAP
					}; 
					var map3 = new google.maps.Map(document.getElementById('map3'), options3);
					
					// Creating a Marker
					var marker3 = new google.maps.Marker({
						position: new google.maps.LatLng(1.300327,103.855832), 
						map: map3,
						title: 'Bugis Junction',
					  });
					  
					// Creating an InfowWindow          
						var infowindow3 = new google.maps.InfoWindow({
						content: '200 Victoria Street<br>#02-11'
					});

					// Adding a click event to the marker
						google.maps.event.addListener(marker3, 'click', function() {
						// Opening the InfoWindow
						infowindow3.open(map3, marker3);
					});
					
					// Creating Map
					var latlng4 = new google.maps.LatLng(1.264881,103.822442);
					var options4 = {
					  zoom: 14,
					  center: latlng4,
					  mapTypeId: google.maps.MapTypeId.ROADMAP
					}; 
					//var map4 = new google.maps.Map(document.getElementById('map4'), options4);
					
					// Creating a Marker
					/*var marker4 = new google.maps.Marker({
						position: new google.maps.LatLng(1.264881,103.822442), 
						map: map4,
						title: 'Vivo City',
					  });*/
					  
					// Creating an InfowWindow          
						/*var infowindow4 = new google.maps.InfoWindow({
						content: '1 Maritime Walk<br>#02-95'
					});*/

					// Adding a click event to the marker
						/*google.maps.event.addListener(marker4, 'click', function() {
						
						infowindow4.open(map4, marker4);
					});*/
						
					// Creating Map
					var latlng5 = new google.maps.LatLng(1.28809,103.80351);
					var options5 = {
					  zoom: 14,
					  center: latlng5,
					  mapTypeId: google.maps.MapTypeId.ROADMAP
					}; 
					var map5 = new google.maps.Map(document.getElementById('map5'), options5);
					
					// Creating a Marker
					var marker5 = new google.maps.Marker({
						position: new google.maps.LatLng(1.28809,103.80351), 
						map: map5,
						title: 'Queensway',
					  });
					  
					// Creating an InfowWindow          
						var infowindow5 = new google.maps.InfoWindow({
						content: '1 Queensway<br>#01-23'
					});

					// Adding a click event to the marker
						google.maps.event.addListener(marker5, 'click', function() {
						// Opening the InfoWindow
						infowindow5.open(map5, marker5);
					});

				}
			})();