// console.log("Hello 3");
// console.log("");


function message_to_display(help) {
  document.getElementById('tips').innerHTML = help;
}

function show_help_on_tip() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];


  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var selectedBox = helpText[i];
       document.getElementById(selectedBox.id).onfocus = function() {
         message_to_display(selectedBox.help);
       }
   })(); // Immediate event listener attachment with the current value of selectedBox (preserved until iteration).
  }

}

show_help_on_tip();
