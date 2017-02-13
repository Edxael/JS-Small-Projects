console.log("Hello");

var pcount = 1;

    // Saving the Object element Button from the HTML Page
var but1 = document.getElementById("but-p");

    // Adding an Event Listener with a Anonimus Function.
but1.addEventListener("click", function(){

        // Storing the values provide by User
    var txt1 = document.getElementById("txt-p").value;
    var col1 = document.getElementById("col-p").value;
    console.log(txt1, col1);

        // Creating new HTML Paragrap with specific text and color
    var new_P = document.createElement("p");
    new_P.innerText = txt1;
    new_P.style.color = col1;



            // New paragraph on "TOP"
        // Inserting the New paragraph into the HTML Page
    var div1 = document.getElementById("div-p");
    div1.insertBefore(new_P, div1.childNodes[0]);

            // New paragraph on "BOTTOM"
        // Inserting the New paragraph into the HTML Page
    // document.body.appendChild(newp);

        // Using a "<ul>" and adding the new element on "TOP"
    // var list = document.getElementById("lis-p");
    // list.insertBefore(new_li, list.childNodes[0]);

});
