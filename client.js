$(document).ready(function() {

//Adds name & shoutout to DOM
  $(".studentContainer").append("<p id = 'name'>" + peopleArray[0].name + "</p>");
  $("#singleImage").append("<img src='Chi/Anisa Abdulkadir 2.jpg'>");
  $(".studentContainer").append("<p id = 'shoutOut'>" + peopleArray[0].shoutout + "</p>");
});
