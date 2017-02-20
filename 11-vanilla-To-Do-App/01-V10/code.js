// Todo App Version 10.1
console.log("Todo App Version 10.1");
console.log("");

    // Ccreating the Object that will store "Data Bae" and "Functions"
var td_obj = {

        // Data Base, with all task and completion status
    list: [
        {task:"Morning Exersice", completed: false},
        {task:"CodeWars - GitHub", completed: true},
        {task:"Eat BreakFast", completed: false},
        {task:"Turn On Computer", completed: false}
    ],

        // Will display the Data Base on the Console
    displayTD: function(){

        var taskHolder = document.getElementById("task-div-m");
        document.getElementById("task-div-m").innerHTML = "";

        // var newTask = document.createElement("div");


        if(this.list.length === 0){
            var newTask = document.createElement("div");
            newTask.innerText = "The To-Do lIst is empty";
            taskHolder.insertBefore(newTask, taskHolder.childNodes[0]);
        }

        else{
            for(var x = 0; x < this.list.length; x++){
                // var mark = (this.list[x].completed === true) ? "(x) " : "( ) ";
                var check = (this.list[x].completed === true) ? true : false;
                var loopTask = document.createElement("div");
                loopTask.className = "gral-div-task";


                // loopTask.innerText = mark + this.list[x].task;
                loopTask.appendChild(this.createRad(check, x));
                loopTask.appendChild(this.createP(this.list[x].task));
                loopTask.appendChild(this.createDelButton(x));


                taskHolder.insertBefore(loopTask, taskHolder.childNodes[0]);
            }
        }
    },

        // Will Add Task with default complition stautus of "false" to Data Base
    addTD: function(){
        var task2add = document.getElementById("inp1").value;
        this.list.push({task: task2add, completed: false});
        this.displayTD();
            // Cleaning the Input Box in HTHML file
        document.getElementById("inp1").value = "";
    },

        // Will change the Name of a task (no change to comp stauts)
    changeTD: function(){
        var x = document.getElementById("x").valueAsNumber;
        var y = document.getElementById("y").value;

        this.list[x].task = y;
        this.displayTD();
            // Clearing the Inputs in HTML
        document.getElementById("x").value = "";
        document.getElementById("y").value = "";
    },

        // Will delete: Element (task, completed) from Data Base
    deleteTD: function(x){
        console.log("Index to Delete: " + x);
        this.list.splice(x, 1);
        this.displayTD();
    },

        // Will change the current status of "completed" the the oposite: true or false
    taskComp: function(x){
        // var cmpT = document.getElementById("comp-inp").valueAsNumber;
        // this.list[cmpT].completed = !this.list[cmpT].completed;
        this.list[x].completed = !this.list[x].completed;
        this.displayTD();
        // document.getElementById("comp-inp").value = "";
    },

        // if one or more task are "falce" -> will change all to "true",   -and-   if all taks are "true" --> will change all to "false"
    chanAll: function(){
        var status = this.list.every(function(element){return element.completed === true;});
        if(status === false){for(var x = 0; x < this.list.length; x++){ this.list[x].completed = true;}}
        if(status === true ){for(var y = 0; y < this.list.length; y++){ this.list[y].completed = false;}}
        this.displayTD();
    },

        // Create Delete Buttons
    createDelButton: function(x){
        var delBu = document.createElement("button");
        delBu.innerHTML = "Delete";
        delBu.className = "gral-but";

        delBu.setAttribute('onClick', "td_obj.deleteTD(" + x + ")");

        delBu.id = x;
        return delBu;
    },

    createRad: function(check, x){
        var radBu = document.createElement("input");
        radBu.type = "radio";
        console.log("Check: " + check);
        radBu.checked = check;
        radBu.className = "gral-rad";
        radBu.setAttribute('onClick', "td_obj.taskComp(" + x + ")");

        return radBu;
    },

    createP: function(text){
        var par1 = document.createElement("p");
        par1.innerText = text;
        par1.className = "gral-para";
        // par1.text-decoration = line-through;
        return par1;
    }

};

    // single Event Listener for all Items in the lis using: "Event Delegation"
// var task_ul = document.getElementById("task-div-m");
// task_ul.addEventListener("click", function(event1){
//     var buton2del = event1.target.id;
//     console.log(buton2del);
//     td_obj.deleteTD(buton2del);
// });
