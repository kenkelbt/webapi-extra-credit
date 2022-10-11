const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

if("geolocation" in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        latitude.textContent = lat;
        longitude.textContent = lon;
    })
} else {
    console.log("geolocation not available");
}