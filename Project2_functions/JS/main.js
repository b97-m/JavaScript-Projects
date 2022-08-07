function My_First_Function() {                                          //naming a function_1
    var str = "This text is now pink!";                                 //assigning a variable (string)
    var result = str.fontcolor("pink");                                 //code to change a text to a different colour
    document.getElementById("Pink_Text").innerHTML = result;            //changing the colour 
}

function myFunction() {                                                 //naming a fucntion_2
    var sentence = "I am learning";                                     //assigning a variable (string)
    sentence += " a lot from this course!";                             //adding another string to a variable
    document.getElementById("Concatenate").innerHTML = sentence;        //concatenating these two strings together
}