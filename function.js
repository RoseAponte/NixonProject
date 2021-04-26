var mcGov = document.getElementById('mcgovern');
var drakeEw = document.getElementById('drakeEw');
var drakeCool = document.getElementById('drakeCool');
var nixon = document.getElementById('nixon');
var relief = document.getElementById('relief');


const showImg = (element) =>{
    element.setAttribute('display', 'block')
}
function moveButton() {
    var wButton = document.getElementById('wrongButton');
    wButton.style.position = "absolute";
    wButton.style.top= Math.random;
    wButton.style.left = Math.random;
}

function showDrakeEw(){
    var drakeEw = document.getElementById('drakeEw');
    var relief = document.getElementById('relief');
    drakeEw.style.display = "inline";
    document.body.style.background = "red";
    relief.style.display = "none";
}

function showRelief(){
    document.body.style.background = "black";
    var relief = document.getElementById('relief');
    var drakeEw = document.getElementById('drakeEw');
    drakeEw.style.display = "none";
    relief.style.display = "inline";
}

function showDrakeCool(){
    var drakeCool = document.getElementById('drakeCool');
    var relief = document.getElementById('relief');
    drakeCool.style.display = "inline";
    relief.style.display = "none";
}
function reset(){
    var drakeCool = document.getElementById('drakeCool');
    var relief = document.getElementById('relief');
    drakeCool.style.display = "none";
    relief.style.display = "none";
}

function onload(){
    
}

