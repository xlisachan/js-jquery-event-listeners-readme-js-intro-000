//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
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
    if ($("input:first").val() ==="correct") {
      alert ('Your form is going to be submitted now.');
      return;
    }
    alert("you entered the wrong value");
    return;
  }
});
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
