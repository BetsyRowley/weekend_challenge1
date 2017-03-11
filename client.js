$(document).ready(function() {

//Adds name & shoutout to DOM
  $(".studentText").append("<p id = 'name'>" + peopleArray[0].name + "</p>");
  // $("#singleImage").append("<img src=" + peopleArray[0].image +
  //                               " alt =" + peopleArray[0].image + ">");

  $("#singleImage").append("<img src='Chi/Anisa Abdulkadir 2.jpg' alt ='Anisa'>");


  $(".studentText").append("<p id = 'shoutOut'>" + peopleArray[0].shoutout + "</p>");



createsGallery();

});


// Creates gallery
function createsGallery() {
for( var i = 0; i < peopleArray.length; i++) {
  $(".gallery").append("<img src='Chi/Anisa Abdulkadir 2.jpg' alt ='Anisa'>");
  }
}
