// Todo App Version 4
console.log("Todo App Version 4.2");
console.log("");

var td_obj = {
    list: [
        {task:"clean Kitchen", completed: false},
        {task:"cook dinner", completed: true}],

    displayTD: function(){console.log(this.list);},
    addTD:     function(task2add){this.list.push({task: task2add, completed: false});},
    changeTD:  function(x, chanTask){this.list[x].task = chanTask;},
    deleteTD:  function(a, b){ this.list.splice(a, b);}
};

console.log("print Original Array:");
td_obj.displayTD();
console.log("");

console.log("Add a new task and Print Modify Array:");
td_obj.addTD("do laundry");
td_obj.displayTD();
console.log("");

console.log("change Task and Print Modify Array:");
td_obj.changeTD(1, "Clean Garden");
td_obj.displayTD();
console.log("");




// td_obj.addTD(task);
// td_obj.displayTD();
// console.log("");
//
// td_obj.changeTD(x, upTask);
// td_obj.displayTD();
// console.log("");
//
// td_obj.deleteTD(a, b);
// td_obj.displayTD();
// console.log("");
