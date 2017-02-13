console.log("Hello");

var st_buton = document.getElementById("st");
var sp_buton = document.getElementById("sp");
var time_ele = document.getElementById("time");

var interval;
var d = new Date();


st_buton.addEventListener("click", function(){
    var timePas = 0;
    interval = setInterval(function(){
        timePas += 1;
        time_ele.innerHTML = timePas;
    }, 1000);
});

sp_buton.addEventListener("click", function(){
    clearInterval(interval);
});
