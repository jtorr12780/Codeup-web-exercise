"use script"

console.log( "Hello from external Javascript")
alert("Welcome to my Website!")

var response=prompt(" What is your favorite color?", "blue")
alert("Great, " + response + " is my favorite color too!");

var littleMermaid=3, brotherBear=5, herculesMovie=1;
var totalPrice=3;
var total=0;
var total= ((littleMermaid+brotherBear+herculesMovie)*totalPrice)
    alert("Will pay $" + total + " to rent the movies");
    console.log("Will pay $" + total + " to rent the movies")

var google=400, amazon=380, facebook=350;

var googleHours=6, amazonHours=4, facebookHours=10;

var paycheck = (google*googleHours)+(amazon*amazonHours) + (facebook*facebookHours)
    alert("Will get pay $" + paycheck);
    console.log("Will get pay $" + paycheck)

//A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
var classNotFull = true;
var scheduleNotaConflict = true;
var enrolled = classNotFull && scheduleNotaConflict;



/* A product offer can be applied only if a person buys more than 2 items,
  and the offer has not expired. Premium members do not need to buy a specific
 amount of products*/

var cart = 0;
var premiumM = true;
var cartSize = 3;
var offerNotExpired = true;
var applyOffer = cartSize && premiumM && offerNotExpired;


/*Use the following code to follow the instructions below:
var username = "codeup";
var password = "notastrongpassword";
Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username,
the username must be no more than 20 characters
neither the username or password can start or end with whitespace*/

var username = "Learning";
var password = "differentPassword";

var passwordLength = password.length >= 5;
var notIncludeUsername = password.indexOf(username) == -1;
var notIncludeUsername = !password.includes(username);
var userNameNotMoreTwenty = username.length <= 20;
var whiteSpace = username.trim() && password.trim();
var noWhiteSpace = username.trim() === username && password.trim() == password;

if (passwordLength && notIncludeUsername && userNameNotMoreTwenty && noWhiteSpace) {
    alert("Password is good!")
    console.log("Password is good!")
}

