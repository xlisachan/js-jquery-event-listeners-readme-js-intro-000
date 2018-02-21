//define functions here
function getIt() {
  $('p').on('click', function() {
  alert('Hey!');
});
}

function frameIt() {
 $('.tasty').on('load', function() {
   border-color: red;
});
}

function pressIt() {
  $('').on('keydown', function(key) {
    alert('G was pressed');
});
}

function submitIt() {
  $("form").on("submit", function() {
    alert ('Your form is going to be submitted now.');
    return;
  }
});
}

$(document).ready(function(){

// call functions here
});
