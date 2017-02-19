// Todo App Version 5
console.log("Todo App Version 5.0");
console.log("");

var td_obj = {
    list: [
        {task:"Morning Exersice", completed: false},
        {task:"CodeWars - GitHub", completed: true},
        {task:"Eat BreakFast", completed: false}
    ],

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


    addTD:     function(task2add){
        this.list.push({task: task2add, completed: false});
        this.displayTD();
    },

    changeTD:  function(x, chanTask){
        this.list[x].task = chanTask;
        this.displayTD();
    },

    deleteTD:  function(a, b){
        this.list.splice(a, b);
        this.displayTD();
    },

    taskComp:  function(x){
        this.list[x].completed = !this.list[x].completed;
        this.displayTD();
    }
};


td_obj.displayTD();
