// Todo App Version 9
console.log("Todo App Version 9.1");
console.log("");

    // Ccreating the Object that will store "Data Bae" and "Functions"
var td_obj = {

        // Data Base, with all task and completion status
    list: [
        {task:"Morning Exersice", completed: true},
        {task:"CodeWars - GitHub", completed: true},
        {task:"Eat BreakFast", completed: false},
        {task:"Turn On Computer", completed: true}
    ],

        // Will display the Data Base on the Console
    displayTD: function(){
        var newTask = document.createElement("li");
        var taskHolder = document.getElementById("task-ul");
        document.getElementById("task-ul").innerHTML = "";

        if(this.list.length === 0){
            newTask.innerText = "The To-Do lIst is empty";
            taskHolder.insertBefore(newTask, taskHolder.childNodes[0]);
        }

        else{
            for(var x = 0; x < this.list.length; x++){
                var mark = (this.list[x].completed === true) ? "(x) " : "( ) ";
                var loopTask = document.createElement("li");
                loopTask.innerText = mark + this.list[x].task;
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
    deleteTD: function(){
        var a = document.getElementById("bye-inp").valueAsNumber;
        this.list.splice(a, 1);
        this.displayTD();
        document.getElementById("bye-inp").value = "";
    },

        // Will change the current status of "completed" the the oposite: true or false
    taskComp: function(){
        var cmpT = document.getElementById("comp-inp").valueAsNumber;
        this.list[cmpT].completed = !this.list[cmpT].completed;
        this.displayTD();
        document.getElementById("comp-inp").value = "";
    },

        // if one or more task are "falce" -> will change all to "true",   -and-   if all taks are "true" --> will change all to "false"
    chanAll: function(){
        var status = this.list.every(function(element){return element.completed === true;});
        if(status === false){for(var x = 0; x < this.list.length; x++){ this.list[x].completed = true;}}
        if(status === true ){for(var y = 0; y < this.list.length; y++){ this.list[y].completed = false;}}
        this.displayTD();
    }
};
