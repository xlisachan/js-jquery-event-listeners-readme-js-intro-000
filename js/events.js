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
  $(document).on('keydown', function(key) {
    if (key.which == 71){
      alert('G was pressed');
    }
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
