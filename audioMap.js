/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function pin1Function(){
    var a = document.getElementById("player1");
    var b = document.getElementById("player2");
    var c = document.getElementById("player3");
    var d = document.getElementById("player1Temp");

    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    d.style.visibility = "hidden";

    if (a.style.visibility == "visible") {
        a.style.visibility = "hidden";
    } else {
        a.style.visibility = "visible";
    }
}

function pin1Hover(){
    var a = document.getElementById("player1Temp");
    var b = document.getElementById("player1");
    var c = document.getElementById("player2");
    var d = document.getElementById("player3");

    a.style.visibility = "visible";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    d.style.visibility = "hidden";
}

function pin1Off(){
    var a = document.getElementById("player1Temp");
    a.style.visibility = "hidden";
}

function pin2Function(){
    var a = document.getElementById("player2");
    var b = document.getElementById("player3");
    var c = document.getElementById("player1");
    var d = document.getElementById("player2Temp");

    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    d.style.visibility = "hidden";

    if (a.style.visibility == "visible") {
        a.style.visibility = "hidden";
    } else {
        a.style.visibility = "visible";
    }
}
function pin2Hover(){
    var a = document.getElementById("player2Temp");
    var b = document.getElementById("player1");
    var c = document.getElementById("player2");
    var d = document.getElementById("player3");

    a.style.visibility = "visible";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    d.style.visibility = "hidden";
}

function pin2Off(){
    var a = document.getElementById("player2Temp");
    a.style.visibility = "hidden";
}


function pin3Function(){
    var a = document.getElementById("player3");
    var b = document.getElementById("player1");
    var c = document.getElementById("player2");
    var d = document.getElementById("player3Temp");

    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    d.style.visibility = "hidden";

    if (a.style.visibility == "visible") {
        a.style.visibility = "hidden";
    } else {
        a.style.visibility = "visible";
    }
}
function pin3Hover(){
    var a = document.getElementById("player3Temp");
    var b = document.getElementById("player1");
    var c = document.getElementById("player2");
    var d = document.getElementById("player3");

    a.style.visibility = "visible";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
    d.style.visibility = "hidden";
}

function pin3Off(){
    var a = document.getElementById("player3Temp");
    a.style.visibility = "hidden";
}
