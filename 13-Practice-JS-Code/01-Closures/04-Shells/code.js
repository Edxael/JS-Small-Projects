console.log("shells 1");

function shells(morning, sxhr){
    var oxTanks = 7;

    return function(){
        var total = morning;
        morning += sxhr;
        oxTanks -= 1;
        return total;
    }
}

var ed = new shells(0, 7);
var jc = new shells(2, 5);
var tj = new shells(4, 3);
