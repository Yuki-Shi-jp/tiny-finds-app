// document.addEventListener("turbo:load", function() {
//   const script = document.createElement('script');
//   script.src = "https://maps.googleapis.com/maps/api/js?key=" + window.googleMapsApiKey + "&libraries=places&callback=initMap&loading=async";
//   script.async = true;
//   document.body.appendChild(script);
// });

// function initMap() {
//   var location = { lat: -34.397, lng: 150.644 };
//   var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 8,
//       center: location
//   });
//   var marker = new google.maps.Marker({
//       position: location,
//       map: map
//   });
// }

// function initMap() {
//   const tower = { lat: 35.6586, lng: 139.7454 }; // 東京タワーを指定
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 18,
//     center: tower,
//   });
//   const marker = new google.maps.Marker({
//     position: tower,
//     map: map,
//   });
// }
// window.initMap = initMap;