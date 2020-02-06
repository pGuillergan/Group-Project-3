function show_results(data){
	
	// @Romina, you're gonna edit this block of code for dogs and humans
	
	var lr_str = '<h4>Logistic Regression: ' + data.logisticRegression +'</h4>'+'<br>'
	var rf_str = '<h4>Random Forest: ' + data.randomForest +'</h4>'+'<br>'

	document.getElementById("res_show_human").innerHTML=lr_str+rf_str;
	document.getElementById("res_show_dog").innerHTML=lr_str+rf_str;
	document.getElementById("res_jumbo").style.display = "block";
};

function loadJsonData(hd, st, hr) {
  // console.log("im in the loadData function!")
  url = '/dynamic_results/'+hd+'/'+st+'/'+hr
  console.log(url)

  d3.json(url).then((data) => {

    // console.log("im in the json data to do area!")
    // console.log(data)
    // console.log(data.logisticRegression)
    // console.log(data.randomForest)
    show_results(data);
  });
}

$("#my_form").submit(function(e) {

  e.preventDefault();
  
  var have_dog = document.getElementById('have_dog').value;
  var sample_type = document.getElementById('sample_type').value;
  var human_role = document.getElementById('human_role').value;
  
  // console.log(have_dog);
  // console.log(sample_type);
  // console.log(human_role);

  loadJsonData(have_dog, sample_type, human_role)

  console.log("done with ML")
    
});

