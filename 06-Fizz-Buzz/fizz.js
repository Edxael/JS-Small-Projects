console.log("He 1");

function fizz(num1, num2){
    console.log(num1, num2);
    var text1 = "";

    for (var x = num1; x <= num2; x++) {

        if((x % 3 === 0) && (x % 5 === 0)){
            console.log("The number: " + x + " is Fizz-Buzz");
            text1 += "The number: " + x + " is Fizz-Buzz \n";
        }
        else if(x % 3 === 0){
            console.log("The number: " + x + " is Fizz");
            text1 += "The number: " + x + " is Fizz \n";
        }
        else if(x % 5 === 0){
            console.log("The number: " + x + " is Buzz");
            text1 += "The number: " + x + " is Buzz \n";
        }
        else {
            console.log("The number: " + x + " Not.");
            text1 += "The number: " + x + "\n";
        }
    }

    document.getElementById("dump1").innerHTML = text1;

}

function run1(){
    console.log("Inside run1");

    var num1 = parseInt(document.getElementById("fr").value);
    var num2 = parseInt(document.getElementById("to").value);

    fizz(num1, num2);


}
