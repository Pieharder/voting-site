$(document).ready(function (){
  var age = confirm("Are you over 18?")

  if (age === true) {
    $(".voters").show();
  } else {
    $(".nonvoters").show();
  };
});