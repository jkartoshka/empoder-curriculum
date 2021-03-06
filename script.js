// pop up window with sign up sheet
function signUp() {
  var txt;
  var person = prompt("Please enter your name:", "Guest");
  if (person == null || person == "") {
    txt = "You are not signed up.";
  } else {
    txt = "Thank you " + person + "! You have successfully signed up!";
  }
  document.getElementById("message").innerHTML = txt;
}

// answer to What do we bring?
function bring() {
  document.getElementById("answer").innerHTML = "<ul><li>Please bring personal protective equipment (PPE): face masks etc.</li> <li>We will supply latex gloves for trash pick up.</li> <li>We will also provide garbage bags.</li> <li>At lunch, we will provide a small snack too.</li></ul>";
}

// answer to Where do we meet?
function popUp() {
  alert("Please meet next to the white canopy, set up on the grass directly behind the basketball courts.");
}

// facebook link
function visitPage() {
  window.location = 'https://www.facebook.com/empoderedu/';
}

//animation function
function myMove() {
  var fox = document.getElementById("animal");
  fox.style.position = 'relative';
  var position = 0;
  setInterval(frame, 5);

  function frame() {
    if (position == window.screen.width - 110) {
      clearInterval(id);
    } else {
      position++;
      fox.style.left = position + 'px';
    }
  }
}




//functionality for button to go back to the top of the page ------------------------------------------------------------
function init() {
  //Get the button for top scrolling:
  mybutton = document.getElementById("myBtn");
}

window.onload = init;

// When the user scrolls down 20px from the top of the document, show the button
document.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}