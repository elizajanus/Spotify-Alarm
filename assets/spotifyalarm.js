$(document).ready(function() {
    console.log("are u alive");
 
 //Youtube links
 var sunnyMusic = "https://www.youtube.com/embed/mxL2C3iejCw?autoplay=1";
 var rainyMusic = "https://www.youtube.com/embed/6Gkdf0IIUNY?autoplay=1";
 var snowMusic = "https://www.youtube.com/embed/geCNx65eFzE?autoplay=1";
 var drizzleMusic = "https://www.youtube.com/embed/63JD_AY2bfc?autoplay=1";
 var cloudyMusic = "https://www.youtube.com/embed/qnrs4e9AcYk?autoplay=1";
 var atmosMusic = "https://www.youtube.com/embed/U-jxcH42lIo?autoplay=1";
 var extremeMusic = "https://www.youtube.com/embed/2LHwEFMVeyU?autoplay=1";
 var stormMusic = "https://www.youtube.com/embed/iHwTFPFu94E?autoplay=1";
 
 //Spotify
 var sunnyMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX6ALfRKlHn1t";
 var rainyMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXbvABJXBIyiY";
 var snowMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWUNIrSzKgQbP";
 var drizzleMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWZ7mSWCFIT7v";
 var cloudyMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWVV27DiNWxkR";
 var atmosMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX79Y9Kr2M2tM";
 var extremeMusic = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWU6kYEHaDaGA";
 var stormMusicSpotify = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX2pSTOxoPbx9";

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: Math.round(position.coords.latitude * 1000000) / 1000000,
        lng: Math.round(position.coords.longitude * 1000000) / 1000000
      };
      console.log(pos);
      var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lng +"&APPID=a6bed6fbc83844c9e82000992fae233d";
      console.log(queryURL1);
      var queryURL2 = "http://maps.googleapis.com/maps/api/directions/json?origin=Fredericksburg&destination=Richmond&key=AIzaSyB_bXSY_7Ssaeg_p4mCtDVFEAn8iCxk1bY";
      var destinationA = 'Washington, D.C';
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
  {
  origins: [{lat: pos.lat, lng: pos.lng}],
  destinations: [destinationA],
  travelMode: 'DRIVING'/*,
  drivingOptions: {
      departureTime: new Date(Date.now()),
      trafficModel: 'pessimistic'
  }*/
  }, callback);
  
  function callback(response, status) {
  console.log(response);
  if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
  
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        console.log(results);
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          var duration = element.duration.text;
          var from = origins[i];
          var to = destinations[j];
        }
      }
    }
  }
  
    });
}
    
var pos;
var queryURL2;
var queryURL1;


 //= "https://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lng +"&APPID=a6bed6fbc83844c9e82000992fae233d";
 //console.log(queryURL1);
  //= "http://maps.googleapis.com/maps/api/directions/json?origin=Fredericksburg&destination=Richmond&key=AIzaSyB_bXSY_7Ssaeg_p4mCtDVFEAn8iCxk1bY";
 
 /*$.ajax({
         url: queryURL1,
         method: "GET"
       }).then(function(response) {
           /*console.log(response);
           var weather = response.weather[0].id;
           var youTube = $('<iframe width="300" height="100" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>');
           var spotify = $('<iframe width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media">');
           var iconImage = $('<img>');
         if (weather === 500-531) {
             console.log(weather);
             $(youTube).attr("src", rainyMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", rainyMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 800, 801, 951-953) {
             console.log(weather);
             $(youTube).attr("src", sunnyMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", sunnyMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 600-622) {
             console.log(weather);
             $(youTube).attr("src", snowMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", snowMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 300-321) {
             console.log(weather);
             $(youTube).attr("src", drizzleMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", drizzleMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 802-804) {
             console.log(weather);
             $(youTube).attr("src", cloudyMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", cloudyMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 701-721, 741) {
             console.log(weather);
             $(youTube).attr("src", atmosMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", atmosMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 731, 751-781, 900-902, 906, 957-962) {
             console.log(weather);
             $(youTube).attr("src", extremeMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", extremeMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         } else if (weather === 200-232) {
             console.log(weather);
             $(youTube).attr("src", stormMusic);
             $('.youtube').append(youTube);
             $(spotify).attr("src", stormMusicSpotify);
             $(".spotify").append(spotify);
             $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
         }*/
       //}).then(function(response) {

        //var origin2 = 'Richmond, Virginia';
       /* var destinationA = 'Washington, D.C';
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
  {
    origins: [{lat: pos.lat, lng: pos.lng}],
    destinations: [destinationA],
    travelMode: 'DRIVING'
  }, callback);

function callback(response, status) {
    console.log(response);
    if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
    
        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          console.log(results);
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.text;
            var duration = element.duration.text;
            var from = origins[i];
            var to = destinations[j];
          }
        }
      }
    }*/
 
});
       




   