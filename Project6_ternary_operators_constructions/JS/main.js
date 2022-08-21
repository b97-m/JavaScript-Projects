// TERNARY OPERATOR
function Ride_Function() {                                                      // assigning a function 
    var Height, Can_ride;                                                       // assigning variables 1 and 2
    Height = document.getElementById("Height").value;                           // assigning getElementById to variable 1
    Can_ride = (Height < 52)? "You are too short":"You are tall enough";        // assigning conditions to a tenary operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";         // ^
}

// CONSTRUCTOR FUNCTION
function Cat(Breed, Color, Age) {               // assigning an object constructor = Cat
    this.Cat_Breed = Breed;                     // assigning keywords for the constructor
    this.Cat_Color = Color;                     // ^
    this.Cat_Age = Age;                         // ^
}

var Barbara = new Cat("Sphinx", "grey", 3);     // creating new objects
var Raul = new Cat("British", "brown", 9);      // ^

function new_Function() {                                           // a function to display the results of the constructor
    document.getElementById("New_and_This").innerHTML =             
    "Raul has a " + Raul.Cat_Breed + " " + Raul.Cat_Color + "-colored cat which is " + Raul.Cat_Age + " years old.";
}


// NESTED FUNCTION
function count_Function() {                                         // naming a function
    document.getElementById("Counting").innerHTML = Count();        // getting an ID attribute from HTML code
    function Count() {                                              // assigning another fucntion
        var Starting_point = 9;                                     // assigning a variable with a number
        function Plus_one() {Starting_point += 1;}                  // assigning yet another (nested) fucntion
        Plus_one();                                                 // 
        return Starting_point;                                      // the result of the nested function
    }
}