$(document).ready(function() {
  console.log("ready!");

  var colors = ["red", "blue", "green", "black", "cyan"];
  var i = 0;
  $("#button").click(function change() {
    console.log("hello");
    $("body").css("background-color", colors[i])

    if (i == colors.length-1){
      i = 0;
    }else{
      i++;
    }
    
  });
});