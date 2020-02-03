// --------------------------------------------------
// | HTML FORM STUFF |
// --------------------------------------------------
$("#my_form").submit(function(e) {

  e.preventDefault();
  
  var have_dog = document.getElementById('have_dog').value;
  var sample_type = document.getElementById('sample_type').value;
  var human_role = document.getElementById('human_role').value;
  
  console.log(have_dog);
  console.log(sample_type);
  console.log(human_role);


});