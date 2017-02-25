

// Is Integer??
var x = 5.5;
console.log( Number.isInteger(x) );





// -------------------

var arr = [1, 2, 3, 4];
var count = 0;
arr.forEach(function(x) {
    console.log("Each is: " + x);
    count += x;
    console.log("The sum is: " + count);
    console.log(" ");
});


// -- Temperatures ----

// alert("hello ENfermera");
// var type1 = prompt("For cel.. to Fare.. press 'F', for Far.. to Cel.. press 'C'");
// var temp = prompt("Provide temperature to convert: ");

var temp = 100;
var type1 = "c";

if(type1 === "c"){
    // Far.. to Cel..
    var cel = (((temp - 32)* 5) / 9);
    console.log(temp + " Farenheit in Celcius is: " + cel);
}else{
    // Cel.. to Far..
    var far = (temp * (1.8)) + 32;
    console.log(temp + " Celcius in Farenheit is: " + far);
}

// ---- Factorial -----
var num = 5;
var factorial = 1;

for(var x= 1; x <= num; x++){
    // console.log(x);
    factorial *= x;
}

console.log(factorial);


// --------------------
