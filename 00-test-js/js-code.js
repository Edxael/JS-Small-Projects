console.log("Hello 7");
console.log("");

    // Declare a function
function addTo(passed){

        // Declare a function withing a Functions A.K.A. = "CLOSURE"
    function add(inner){
        return passed + inner;
    }

    return add;
}

   //  Creating 2 new instances of the Function: addTo()
var add_7 = new addTo(7);
var add_4 = new addTo(4);


    // Passing a numerical parameter to the Newly created instances.
console.log(add_7(1));  // 8
console.log(add_4(1));  // 5
