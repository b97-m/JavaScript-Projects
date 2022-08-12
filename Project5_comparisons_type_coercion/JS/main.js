document.write(typeof "one");           //"type of" operator

document.write(2E310);                  //positive infinity
document.write(-6E555);                 //negative infinity
document.write(17>8);                   //false comparison
document.write(33<21);                  //true comparison

console.log(5+6);                       //expression in the console
console.log(5>7)                        //negative comparison in the console

document.write("10" + 5);               //type coresion (expression with a string and a number)
document.write(10==10);                 //checking whether the values are equal (true)
document.write(10==11);                 //checking whether the values are equal (false)

A="24/01/1997";                         //checking whether the data is equal
B="24/01/1997";                         //and also if it's of the same type
document.write(A===B);                  //true

C="24/01/1997";                         //false
D="Barbara";
document.write(C===D);

E=33;                                   //false
F="33";
document.write(E===F);

G="24/01/1997";
H="25/01/1997";
document.write(G===H);                  //false

//BOOLEAN LOGICAL OPERATORS:
document.write(3>2 && 4>3);             //AND: true
document.write(3>4 && 4>3);             //AND: false
document.write(3>2 || 2>3);             //OR: true
document.write(3>3 || 3>4);             //OR: false

function not_Function() {                                       //assigning a function
    document.getElementById("Not").innerHTML = !(20>10);        //NOT operator
}

