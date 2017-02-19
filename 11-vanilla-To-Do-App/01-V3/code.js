console.log("Hello 2");
console.log("");

var task = "lanudry";
var x = 0;
var upTask = "water plants";
var a = 1, b = 1;

var td_obj = {
    list: ["clean", "cook"],
    displayTD: function(){console.log(this.list);},
    addTD: function(){this.list.push(task);},
    changeTD: function(x, upTask){this.list[x] = upTask;},
    deleteTD: function(a, b){ this.list.splice(a, b);}
};

td_obj.displayTD();
console.log("");

td_obj.addTD(task);
td_obj.displayTD();
console.log("");

td_obj.changeTD(x, upTask);
td_obj.displayTD();
console.log("");

td_obj.deleteTD(a, b);
td_obj.displayTD();
console.log("");
