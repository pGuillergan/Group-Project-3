
// --------------------------------------------------
// | DATABASE STUFF |
// --------------------------------------------------
console.log("im in the JS file!")

function loadJsonData() {
  console.log("im in the loadData function!")

  d3.json(`/data_json`).then((data) => {

    console.log("im in the json data to do area!")
    
  });
}

function loadCsvData(){

  // d3.csv("/data_csv", function(data) {
  //   console.log(data['name']);
  // });

}


// --------------------------------------------------
// | MAP STUFF |
// --------------------------------------------------
var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


loadJsonData();
loadCsvData();


// --------------------------------------------------
// | HTML FORM STUFF |
// --------------------------------------------------