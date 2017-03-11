var index = 0;
var numStudents = peopleArray.length;
var profileDivArray = [];

$(document).ready(function() {

createProfiles();

createGallery();



});


//Adds name & shoutout for each person

function createProfiles() {
  for( var i = 0; i < peopleArray.length; i++) {

  $(".studentContainer").append("<div></div>");

  var $el = $(".studentContainer").children().last();

  $el.append("<img src=" + peopleArray[i].image + ">");
  $el.append("<p id = 'name'>" + peopleArray[i].name + "</p>");
  $el.append("<p id = 'shoutOut'>" + peopleArray[i].shoutout + "</p>");

  if(i !== 0) {
    $el.hide("div");
  }
  }
}



// Creates gallery
// function createGallery() {
// for( var i = 0; i < peopleArray.length; i++) {
//   $(".gallery").append("<img src=" + peopleArray[i].image + ">");
//   }
// }

function createGallery() {
for( var i = 0; i < numStudents; i++) {
  $(".gallery").append("<div class = 'profile'></div>");
  var $el = $(".gallery").children().last();
  $el.append("<img src=" + peopleArray[i].image + ">");
  $el.data("id", i);
  profileDivArray.push($el);
  }
}
