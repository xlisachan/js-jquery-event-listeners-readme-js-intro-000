<!doctype html>
<head>
  <title>Event Listeners</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <p>This is some text to click</p>

  <img src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg">

  <form>
    <input id="typing" type="text">
    <input type="submit">
  </form>
  <div></div>

  <script src="js/jquery-2.1.1.min.js"></script>
  <script src="js/events.js"></script>

    <!-- Open this file in the browser and call `mocha.run()` in console to run tests -->
  <div id="mocha"></div>
  <script src="node_modules/mocha/mocha.js"></script>
  <script src="node_modules/expect/umd/expect.min.js"></script>
  <script>mocha.setup('bdd');</script>
  <script src="test/index-test.js"></script>
</body>


//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
 $('img').on('load', function() {
   
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
