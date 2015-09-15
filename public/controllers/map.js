
  // draw map
  L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw';
  var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([54.500, -3], 6);
  console.log("hello from map");
  map.scrollWheelZoom.disable();

  //setting
  var url = "https://api.mapbox.com/v4/geocode/mapbox.places/London+UK.json?proximity=54.5,-3&access_token=pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw";
