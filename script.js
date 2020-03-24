var mymap = L.map('mapid').setView([51.505, -0.09], 2);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJpaGFudDIzMTAiLCJhIjoiY2s4NWd2c2tvMDJ3ZDNncWdiZDhxNW1scSJ9.ApeTyvmYENmTbSR8ai8Brw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXJpaGFudDIzMTAiLCJhIjoiY2s4NWd2c2tvMDJ3ZDNncWdiZDhxNW1scSJ9.ApeTyvmYENmTbSR8ai8Brw'
}).addTo(mymap);

var layerGroup = L.layerGroup().addTo(mymap);
var markerArray = [];

mymap.on('click', function(e){
    var poplocation = e.latlng;
    var marker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(mymap);
    marker.addTo(layerGroup);
    var coordinates = [marker.getLatLng().lat, marker.getLatLng().lng];
    markerArray.push(coordinates);
    drawLine(markerArray);
});

function drawLine(marray){
    var polyline = L.polyline(marray, {color:"red"}).addTo(mymap);
    polyline.addTo(layerGroup);
}

// var spiderIcon = L.icon({
//     iconUrl: './icons/spider.png',
//     iconSize:     [38, 95], // size of the icon
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 95],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    }
});
var hulkIcon = new LeafIcon({iconUrl: './icons/hulk.png'}),
                spiderIcon = new LeafIcon({iconUrl: './icons/spider.png'}),
                wolverineIcon =   new LeafIcon({iconUrl: './icons/wolverine.png'});


function testFunction1(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker= L.marker([40.743, -73.822], {icon: spiderIcon}).addTo(layerGroup);
    marker.bindPopup("Spiderman").openPopup();
}
function testFunction2(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker= L.marker([39.760979, -84.192200],{icon: hulkIcon}).addTo(layerGroup);
    marker.bindPopup("Hulk").openPopup();
}
function testFunction3(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker= L.marker([54.464180, -110.182259],{icon: wolverineIcon}).addTo(layerGroup);
    marker.bindPopup("Wolverine").openPopup();
}