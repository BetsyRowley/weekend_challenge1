var index = 0;
var numStudents = peopleArray.length;
var profileDivArray = [];

var setTimer = setInterval(forwardInterval, 10000);

$(document).ready(function() {

createGallery();


$(".navigators").on("click", "#next", forwardInterval);
$(".navigators").on("click", "#next", stopTimer);
$(".navigators").on("click", "#previous", backInterval);
$(".navigators").on("click", "#previous", stopTimer);




});





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

//Activates one profile at a time
function makeActive() {
  for ( var i = 0; i < profileDivArray.length; i++) {
    $(profileDivArray[i]).removeClass("active");
    if(profileDivArray[i].data("id") == index) {
      profileDivArray[i].addClass("active");

//updates view number of 19
    $("#viewNum").text("Currently viewing " + (index + 1) + " of 19 ChiYaks.");
//Shows main profile info
      $(".studentContainer").empty();
      $(".studentContainer").append("<div></div>");

      var $el = $(".studentContainer").children().last().hide().fadeIn("slow");

      $el.append("<img src=" + peopleArray[i].image + ">");
      $el.append("<p id = 'name'>" + peopleArray[i].name + "</p>");
      $el.append("<p id = 'shoutOut'>" + peopleArray[i].shoutout + "</p>");

    }
  }
}


//Moves forward through the gallery

function forwardInterval() {

  index++;
  if(index == numStudents) {
    index = 0;
  }
  makeActive();
}


//Moves backwards through the gallery
function backInterval() {
  index--;
  if(index < 0) {
    index = numStudents - 1;
  }
  makeActive();
}


//On clicking next button resets timer
function stopTimer() {
  clearInterval(setTimer);
  setTimer = setInterval(forwardInterval, 10000);
}
