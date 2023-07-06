/*
Define a function called full_Sentence.
Within the function:
    - Declare a variable called p1 and assign it the value "My name is ".
    - Declare a variable called p2 and assign it the value "Barbara. ".
    - Declare a variable called p3 and assign it the value "Nice to meet you!".
    - Use the concat() method to concatenate the values of p1, p2, and p3, and assign the result to the variable full_sentence.
    - Set the innerHTML of the element with the ID "Concatenate" to the value of the full_sentence variable.
*/

function full_Sentence() {                                                  //             
    var p1 = "My name is ";                                                     
    var p2 = "Barbara. ";                                                       
    var p3 = "Nice to meet you!"                                                
    var full_sentence = p1.concat(p2, p3);                                      
    document.getElementById("Concatenate").innerHTML = full_sentence;           
}



/*
Define a function called slice_Method.
Within the function:
    - Declare a variable called Sentence and assign it the value "My name is Barbara."
    - Use the slice() method to extract a portion of the Sentence string from index 11 to 18 (exclusive) and assign it to the variable Section.
    - Set the innerHTML of the element with the ID "Slice" to the value of the Section variable.
*/

function slice_Method() {        
    var Sentence = "My name is Barbara.";                       
    var Section = Sentence.slice(11,18);                        
}



/*
Define a function called string_Method.
Within the function:
    - Declare a variable called number and assign it the value 55.
    - Convert the number variable to a string using the toString() method.
    - Set the innerHTML of the element with the ID "Numbers_to_Strings" to the converted string.
*/

function string_Method() {
    var number = 55;
    document.getElementById("Numbers_to_Strings").innerHTML = number.toString();
}



/*
Define a function called precision_Method.
Within the function:
    - Declare a variable called shortened_Number and assign it the value 1234567890.1234567890.
    - Convert the shortened_Number variable to a string with a precision of 15 digits using the toPrecision() method.
    - Set the innerHTML of the element with the ID "Precision_Number" to the converted string.
*/

function precision_Method() {
    var shortened_Number = 1234567890.1234567890;
    document.getElementById("Precision_Number").innerHTML = shortened_Number.toPrecision(15);
}