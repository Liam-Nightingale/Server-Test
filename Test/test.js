//Get 3words server side
//Client side

let lat, lon;
document.getElementById("button").onclick = function() {
  if("geolocation" in navigator) {
    console.log("Geolocation available");
    navigator.geolocation.getCurrentPosition(async pos => {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;
      const api_url = `/words/${lat},${lon}`;
      const res = await fetch(api_url);
      const json = await res.json();
      console.log(json.words);
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;
      document.getElementById('latitude2').textContent = "53.6873358°";
      document.getElementById('longitude2').textContent = "-2.7330166°";
      document.getElementById('words2').textContent = "toned.lunch.miss";
      document.getElementById('words').textContent = json.words;
    });
  } else {
    console.log('Geolocation not available');
  }
};