      // JavaScript Essentials: Project - Lecture: 32

      // creating a variable arraySelect.
      // storing the Array that is created by requesting all the elements with "Tage Name" ==  select.
var arraySelect = document.getElementsByTagName("select");

      // creating a variable and storing the element that we want to modify.
var square = document.getElementById("content");
      // the reason why we save the "content" object in a variable is because calling the content everytime, is expensive.
      // in this example the CSS is bare basics, but if you have more coplex and animated CSS, that can slow the load time for the user everytime that one value of a the select element is changed.
      // in this case we did a single "document.getElementById("content");" Search-Operations only once, and storing the value on a variable,  so we do not need to do the Search-Operation everytime that a value is changed.


      // the function is call by an Event-Listener in the for loop
      // in JS when an Event-Listener ivokes a function: it generates a virtual DOM-Object that populates the ".this" keyword.
function dropdownStyles(){

      // when we change the value on any of the "select" options, what it does is generates an "Object" that give us the information, about that specific element that the event was fired on.
      // and then that object ispass to the ".this" keyword
      var style  = this.id;  // here we target the "ID" name of the "Object" currently stored on ".this", because the "ID" element have the name of property that we want to modify on our square.
      var value = this.value;  // here we target the "VALUE" of value in the "Object" currently stored on ".this", because the Value = is equals = to the new selected value by the user, from the drop down menu.

      // after we got the data of the selections made by the "User" on the previous two lines of code, we will use that data to modify the current values of the square using the follwoing steps:
            // 00 - Target what element we want to modify(our square on the HTML file), in this case is the element that we save on the variable: square = document.getElementById("content");
            // 01 - Target the "style" Object. wich contains all the CSS properties: ".style"
            // 02 - To know what CSS Property we will change.
                  // a) Feed the data  stored in the variable"style":  "var style  = this.id;""    = wich is equals to= the "CSS Name Property" that the user wants to change on the square.
            // 03 - Overwriting: Overwrite the current "square value" of the Property choosed by the user, with the data stored on the variable "value":  "var value = this.value;"  ,  using the override command "=" and then providing the variable with the desired data. "= value;"
      square.style[style] = value;

}

for (var x = 0; x < arraySelect.length; x++){

      // you will notice that the "dropdownStiles" function dont have the "()" this is because we are not calling the function at this precise moment
      // the function gets call when ehe "Event-Listener" finds a "change" of value in the "ArraySelect"
      arraySelect[x].addEventListener("change", dropdownStyles );

}
