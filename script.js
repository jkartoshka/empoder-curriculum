function myFunction1() {
    document.getElementById("Q1").innerHTML = "Go online to our Eventbrite page. Registration is important to raise funding for supplies. You may also donate supplies and/or funds. Check out our links below.";
}

function myFunction2() {
    document.getElementById("Q2").innerHTML = "Please bring personal protective equipment (PPE): face masks ect. We will supply latex gloves for trash pick up. We will also provide garbage bags. At lunch, we will provide a small snack too.";
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

function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      txt = "You are not signed up.";
    } else {
      txt = "Thank you " + person + "! You have successfully signed up!";
    }
    document.getElementById("demo").innerHTML = txt;
}

