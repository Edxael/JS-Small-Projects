console.log("Hola Enfermera 1");

function calc(){
    console.log("Calculations");
    var per2 = document.getElementById("per1").value;
    var wid2   = document.getElementById("w1").value;
    var hei2  = document.getElementById("h1").value;

    wid2 *= (per2/100);
    hei2 *= (per2/100);

    console.log(wid2, hei2);

    document.getElementById("wanser").innerHTML = wid2;
    document.getElementById("hanser").innerHTML = hei2;
}
