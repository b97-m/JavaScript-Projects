function addition_Function() {                                                              //assigning a function
    var addition = 2+4;                                                                     //assigning a variable with an expression
    document.getElementById("add_math").innerHTML = "2 + 4 = " + addition;                  //getting and ID attribute from HTML file and assigning a new value to it
}

function substraction_Function() {                                                          //assigning a function
    var substraction = 11-7;                                                                //assigning a variable with an expression
    document.getElementById("sub_math").innerHTML = "11 - 7 = " + substraction;             //getting and ID attribute from HTML file and assigning a new value to it
}

function multiplication_Function() {                                                        //same
    var multiplication = 5*8;                                                               
    document.getElementById("mul_math").innerHTML = "5 * 8 = " + multiplication;            
}

function division_Function() {                                                              //same
    var division = 21/3;                                                                    
    document.getElementById("div_math").innerHTML = "21 / 3 = " + division;                 
}

function more_Math() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("multiple_math").innerHTML = "(1+2)*10/2-5=" + simple_Math + ". 1 plus 2, multiplied by 10, divided in half and then substracted by 5 equals " + simple_Math + ".";
}

function modulus_Operator() {
    var modulus = 25&6;
    document.getElementById("modulus_math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus + ".";
}

function negation_Operator() {
    var x=10;
    document.getElementById("unary_math").innerHTML = "The ngative form of " + x + " is " + -x + ".";
}

var x = 44;                                     //assigning a variable with a number value
x++;                                            //incrementing it by 1
document.write(x + "<br>")                      //printing the new value + seperating lines of code

var y = 8.88;                                   //assigning a variable with a number value
x--;                                            //decrementing it by 1
document.write(y);                              //printing the new value

window.alert(Math.random()*50)                  //assigning a pop-up alert with a random number between 0 and 50