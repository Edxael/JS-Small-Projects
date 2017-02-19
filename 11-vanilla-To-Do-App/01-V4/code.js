// Todo App Version 4
console.log("Todo App Version 4.2");
console.log("");

var td_obj = {
    list: [
        {task:"Morning Exersice", completed: false},
        {task:"CodeWars - GitHub", completed: true}],

    displayTD: function(){console.log(this.list);},
    addTD:     function(task2add){this.list.push({task: task2add, completed: false});},
    changeTD:  function(x, chanTask){this.list[x].task = chanTask;},
    deleteTD:  function(a, b){ this.list.splice(a, b);},
    taskComp:  function(x){ this.list[x].completed = !this.list[x].completed;}
};
