$(document).ready(function(){
  // Write your code here
  $('form').on('submit', fuction(event){
    event.preventDefault();
    var zipCode = $('form input').val();
    if(zipCode.length === 5 && Number(zipCode)){
      //
      $('http://maps.googleapis.com/maps/api/geocode/json', {address: zipCode}, function(responseData))
      var lat = responseData.results[0].geometry.location.lat;
      var lng = responseData.results[0].geometry.location.lng;
      console.log(lat, lng);
    } else {
     alert('You did not enter a zip code.') 
    }
  })
});
