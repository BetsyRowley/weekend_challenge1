var index = 0;
var numStudents = peopleArray.length;
var profileDivArray = [];

$(document).ready(function() {

createGallery();

$(".navigators").on("click", "#next", forwardInterval);
$(".navigators").on("click", "#previous", backInterval);

//setInterval(forwardInterval, 10000);


createProfiles();


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

//Creates Gallery of all photos

function createGallery() {
for( var i = 0; i < numStudents; i++) {
  $(".gallery").append("<div class = 'profile'></div>");
  var $el = $(".gallery").children().last();
  $el.append("<img src=" + peopleArray[i].image + ">");
  $el.data("id", i);
  profileDivArray.push($el);
  }

  makeActive();
}

function makeActive() {
  for ( var i = 0; i < profileDivArray.length; i++) {
    $(profileDivArray[i]).removeClass("active");
    if(profileDivArray[i].data("id") == index) {
      profileDivArray[i].addClass("active");
    }
  }
}

function forwardInterval() {
  index++;
  if(index == numStudents) {
    index = 0;
  }
  makeActive();
}

function backInterval() {
  index--;
  if(index < 0) {
    index = numStudents - 1;
  }
  makeActive();
}
