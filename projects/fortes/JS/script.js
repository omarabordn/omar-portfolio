
function Learnmore (){
    var more = document.getElementById("content-btn");
    var btnTxt = document.getElementById("btn")
    var doot = document.getElementById("doot");
    var hei = document.getElementById("hei");

    if (doot.style.display === "none") {
        /*hei.style.height = "420px"*/
        doot.style.display = "inline";
        more.style.display = "none"
        btnTxt.innerHTML = "Learn More";
    } else {
       /* hei.style.height = "auto"*/
        doot.style.display = "none";
        more.style.display = "inline";
        btnTxt.innerHTML = "Less";

    }
}
function Details (){
    var det = document.getElementById("det");
    var detBtn = document.getElementById("detBtn");
    var dot = document.getElementById("dot");
    if (dot.style.display === "none") {
        dot.style.display = "inline";
        detBtn.innerHTML = "DETAILS";
        det.style.display = "none";
    } else {
        dot.style.display = "none";
        det.style.display = "block";
        detBtn.innerHTML = "LESS"
    }
}
function Detailss (){
    var det = document.getElementById("dett");
    var detBtn = document.getElementById("detBtnn");
    var dot = document.getElementById("dot");
    if (dot.style.display === "none") {
        dot.style.display = "inline";
        detBtn.innerHTML = "DETAILS";
        det.style.display = "none";
    } else {
        dot.style.display = "none";
        det.style.display = "block";
        detBtn.innerHTML = "LESS"
    }
}
function Detailsss (){
    var det = document.getElementById("dettt");
    var detBtn = document.getElementById("detBtnnn");
    var dot = document.getElementById("dot");
    if (dot.style.display === "none") {
        dot.style.display = "inline";
        detBtn.innerHTML = "DETAILS";
        det.style.display = "none";
    } else {
        dot.style.display = "none";
        det.style.display = "block";
        detBtn.innerHTML = "LESS"
    }
}
function valid () {
    var t = prompt("Intrested..?");
    if (t == "yes" , "Yes" , "YES") {
        window.location = "index.html";
    }
}




