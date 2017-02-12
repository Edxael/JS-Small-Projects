console.log("Hola Enfermera 7");


function mientras(){
    var name = document.getElementById("name1").value;
    var age  = (parseInt(document.getElementById("bday2").value)) * 365;
    var mess = "Hello " + name + ", you are: " + age + " days old.";

    document.getElementById("p1").innerHTML = mess;

    console.log(mess);
}
