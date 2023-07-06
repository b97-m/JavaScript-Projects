function full_Sentence() {
    var p1 = "My name is ";
    var p2 = "Barbara. ";
    var p3 = "Nice to meet you!"
    var full_sentence = p1.concat(p2, p3);
    document.getElementById("Concatenate").innerHTML = full_sentence;
}

function slice_Method() {
    var Sentence = "My name is Barbara.";
    var Section = Sentence.slice(11,18);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var number = 55;
    document.getElementById("Numbers_to_Strings").innerHTML = number.toString();
}

function precision_Method() {
    var shortened_Number = 1234567890.1234567890;
    document.getElementById("Precision_Number").innerHTML = shortened_Number.toPrecision(15);
}