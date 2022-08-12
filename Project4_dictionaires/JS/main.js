function my_Dictionary() {                                                      //assigning a dictionary function
    var Animal = {                                                              //assigning a variable in the function
        Species:"Cat",                                                          //giving a variable key-value pairs (KVPs)
        Color:"Grey",
        Breed:"Sphinx",
        Age:3,
        Sound:"Miau!"
    };                                                                          //closing brackets of the variable with KVPs
    delete Animal.Sound;                                                        //delete operation of one of the KVPs
    document.getElementById("Dictionary").innerHTML = Animal.Sound;             //specified deleted KVP by this method
}