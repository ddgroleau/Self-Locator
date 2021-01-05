

  //Create Map
const mymap = L.map('issMap').setView([0,0],3);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
tiles.addTo(mymap);

//Create Icon
const issIcon = L.icon({
    iconUrl: 'little-person.png',
    iconSize: [100, 100],
    iconAnchor: [25, 95],
});

async function myposn() {
  if('geolocation' in navigator) {
      console.log('geolocation is available');
      document.getElementById("status").textContent = "Fetching Your Location....";
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
       console.log([lat, lon])
       let marker = L.marker([lat,lon],{icon: issIcon}).addTo(mymap);
       mymap.setView([lat,lon],17);
        marker.setLatLng([lat,lon])
        setTimeout(function(){
          document.getElementById("status").textContent = "I FOUND YOU!!!";
        }, 1000)
        });
    } else {
      console.log('geolocation is NOT available');
    }
  }
  myposn()











