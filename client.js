$(document).ready(function() {

//Adds name & shoutout to DOM

  $("#singleImage").append("<img src=" + peopleArray[0].image + ">");
  $(".studentText").append("<p id = 'name'>" + peopleArray[0].name + "</p>");
  $(".studentText").append("<p id = 'shoutOut'>" + peopleArray[0].shoutout + "</p>");



createGallery();

});


function createProfiles() {

}


// Creates gallery
function createGallery() {
for( var i = 0; i < peopleArray.length; i++) {
  $(".gallery").append("<img src=" + peopleArray[i].image + ">");
  }
}
