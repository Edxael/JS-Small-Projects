

// Closures

function check(bonus, ratePerHr){
    return function(){
        var pay = bonus;
        bonus += ratePerHr;
        return pay;
    }
}

var maria   = new check(0, 1);
var elena   = new check(5, 1);
var hector  = new check(0, 1);


var counter = 0;

function timeStart(){
    counter1 = setInterval(function(){console.log("Maria: "  + maria() +  " fish caugt");},  1000);
    counter2 = setInterval(function(){console.log("Elena: "  + elena() +  " fish caugt");},  1500);
    counter3 = setInterval(function(){console.log("Hector: " + hector() + " fish caugt");}, 2000);
}


function timeOver(){
    clearInterval(counter1);
    clearInterval(counter2);
    clearInterval(counter3);
    console.log("Day Over.");
}
