// Todo App Version 5

console.log("Holder");


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

console.log("Pringint done or not");
console.log(td_obj.list[1].completed);
console.log("");

console.log("Changing done: ");
console.log(td_obj.taskComp(1));
console.log(td_obj.list[1].completed);
