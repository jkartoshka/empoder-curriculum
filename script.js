function signUp() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      txt = "You are not signed up.";
    } else {
      txt = "Thank you " + person + "! You have successfully signed up!";
    }
    document.getElementById("message").innerHTML = txt;
}

function visitPage(){
    window.location='https://www.facebook.com/empoderedu/';

    /* 
    How to do this in JQuery:
    <button id="some_id">Visit Page Now</button>

    $('#some_id').click(function() {
        window.location='http://www.example.com';
    });
    */
}



function myFunction3() {
    document.getElementById("Q3").innerHTML = "Please meet next to the white canopy, set up on the grass directly behind the basketball courts.";
}

function myFunction4() {
    document.getElementById("Q4").innerHTML = "The girls soccer team of Rolling Hills Middle School will be hosting the day.";
}

function myFunction5() {
    document.getElementById("Q5").innerHTML = "Please fill out the following Google Form if you wish to donate items. Please scan our Venmo QR code to donate funds.";
}



