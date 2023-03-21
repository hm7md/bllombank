
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
$(document).ready(function() { 
  
  $("#account-select").change(function() {
    $("#show-address").show('slide');
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#show-address").click(function(){
    $("#address-history").show('slide');
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#yes").click(function(){
    $("#current-address").show('slide');
    $("#non-uae").hide();
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#no").click(function(){
    $("#non-uae").show('slide');
    $("#current-address").hide();
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#yes-prev").click(function(){
    $("#previous-address").show('slide');
    $("#get-consent").show('slide');
    window.scrollTo(0,document.body.scrollHeight);
  });
  
   $("#no-prev").click(function(){
    $("#get-consent").show('slide');
    $("#previous-address").hide();
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#get-consent").click(function(){
    $("#your-consent").show('slide');
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#credit-click").click(function() {
    $("#info-request").show('slide');
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $("#info-click").click(function() {
    $("#submit-app").show('slide');
    window.scrollTo(0,document.body.scrollHeight);
  });
  
  $('#app-form').on('submit', function(){
    var arr = $(this).serializeArray();
    console.log(arr);
    return false;
});
});