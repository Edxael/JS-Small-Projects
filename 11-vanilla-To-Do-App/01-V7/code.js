// Todo App Version 7
console.log("Todo App Version 7.0");
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

        if(this.list.length === 0){
            console.log("The To-Do lIst is empty");
        }else{
            console.log("My Tod List: ");
            for(var x = 0; x < this.list.length; x++){
                var mark = (this.list[x].completed === true) ? "(x) " : "( ) ";
                console.log(mark + this.list[x].task);
            }
        }
    },

        // Will Add Task with default complition stautus of "false" to Data Base
    addTD: function(task2add){
        this.list.push({task: task2add, completed: false});
        this.displayTD();
    },

        // Will change the Name of a task (no change to comp stauts)
    changeTD: function(x, chanTask){
        this.list[x].task = chanTask;
        this.displayTD();
    },

        // Will delete: Element (task, completed) from Data Base
    deleteTD: function(a, b){
        this.list.splice(a, b);
        this.displayTD();
    },

        // Will change the current status of "completed" the the oposite: true or false
    taskComp: function(x){
        this.list[x].completed = !this.list[x].completed;
        this.displayTD();
    },

        // if one or more task are "falce" -> will change all to "true",   -and-   if all taks are "true" --> will change all to "false"
    chanAll: function(){
        var status = this.list.every(function(element){return element.completed === true;});
        if(status === false){for(var x = 0; x < this.list.length; x++){ this.list[x].completed = true;}}
        if(status === true ){for(var y = 0; y < this.list.length; y++){ this.list[y].completed = false;}}
        this.displayTD();
    }
};

td_obj.displayTD();
console.log(" ");
td_obj.chanAll();
console.log(" ");

console.log(td_obj.id);
