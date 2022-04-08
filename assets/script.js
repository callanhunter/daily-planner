// link HTML to JavaScript
// link time to CSS for color change

var month = moment().format("dddd, MMM Do");
$("#time-block").text(month);


//9
var btn9 = document.querySelector(".saveBtn9");
var nineOclock = document.querySelector("input9");

document.getElementById("input9").innerHTML = localStorage.getItem("nineslot");
// document.getElementById("input10").innerHTML = localStorage.getItem("tenslot");
// document.getElementById("input11").textContent = localStorage.getItem("elevenslot");
// document.getElementById("input12").textContent = localStorage.getItem("twelveslot");
// document.getElementById("input1").textContent = localStorage.getItem("oneslot");
// document.getElementById("input2").textContent = localStorage.getItem("twoslot");
// document.getElementById("input3").textContent = localStorage.getItem("threeslot");
// document.getElementById("input4").textContent = localStorage.getItem("fourslot");
// document.getElementById("input5").textContent = localStorage.getItem("fiveslot");

btn9.addEventListener("click", nineTimeSlot);


function nineTimeSlot(event) {
    var btn = event.target;
    var nineOclock = btn9.parentElement.previousSibling;
    localStorage.setItem("nineslot", nineOclock.value)
};

//10
var btn10 = document.querySelector(".saveBtn10");
var tenOclock = document.querySelector("input10");

document.getElementById("input10").innerHTML = localStorage.getItem("tenslot")

btn10.addEventListener("click", tenTimeSlot);


function tenTimeSlot(event1) {
    var btn10 = event1.target;
    var tenOclock = btn10.parentElement.previousSibling; 
    localStorage.setItem("tenslot", tenOclock)
};

//11
var btn11 = document.querySelector(".saveBtn11");
var elevenOclock = document.querySelector("input11");

document.getElementById("input11").innerHTML = localStorage.getItem("elevenslot")

btn11.addEventListener("click", elevenTimeSlot);


function elevenTimeSlot(event2) {
    var btn11 = event2.target;
    var elevenOclock = btn11.parentElement.previousSibling; 
    localStorage.setItem("elevenslot", elevenOclock)
};

//12
var btn12 = document.querySelector(".saveBtn12");
var twelveOclock = document.querySelector("input12");

document.getElementById("input12").innerHTML = localStorage.getItem("twelveslot")

btn12.addEventListener("click", twelveTimeSlot);


function twelveTimeSlot(event3) {
    var btn12 = event3.target;
    var twelveOclock = btn12.parentElement.previousSibling; 
    localStorage.setItem("twelveslot", twelveOclock)
};

//1
var btn1 = document.querySelector(".saveBtn1");
var oneOclock = document.querySelector("input1");

document.getElementById("input1").innerHTML = localStorage.getItem("oneslot")

btn1.addEventListener("click", oneTimeSlot);

function oneTimeSlot(event4) {
    var btn1 = event4.target;
    var oneOclock = btn1.parentElement.previousSibling; 
    localStorage.setItem("oneslot", oneOclock)
};

//2
var btn2 = document.querySelector(".saveBtn2");
var twoOclock = document.querySelector("input2");

document.getElementById("input2").innerHTML = localStorage.getItem("twoslot")

btn2.addEventListener("click", twoTimeSlot);

function twoTimeSlot(event5) {
    var btn2 = event5.target;
    var twoOclock = btn2.parentElement.previousSibling; 
    localStorage.setItem("twoslot", twoOclock)
};

//3
var btn3 = document.querySelector(".saveBtn3");
var threeOclock = document.querySelector("input3");

document.getElementById("input3").innerHTML = localStorage.getItem("threeslot")

btn3.addEventListener("click", threeTimeSlot);

function threeTimeSlot(event6) {
    var btn3 = event6.target;
    var threeOclock = btn3.parentElement.previousSibling; 
    localStorage.setItem("threeslot", threeOclock)
};

//4
var btn4 = document.querySelector(".saveBtn4");
var fourOclock = document.querySelector("input4");

document.getElementById("input4").innerHTML = localStorage.getItem("fourslot")

btn4.addEventListener("click", fourTimeSlot);

function fourTimeSlot(event7) {
    var btn4 = event7.target;
    var fourOclock = btn4.parentElement.previousSibling; 
    localStorage.setItem("fourslot", fourOclock)
};

//5
var btn5 = document.querySelector(".saveBtn5");
var fiveOclock = document.querySelector("input5");

document.getElementById("input5").innerHTML = localStorage.getItem("fiveslot")

btn5.addEventListener("click", fiveTimeSlot);

function fiveTimeSlot(event8) {
    var btn5 = event8.target;
    var fiveOclock = btn5.parentElement.previousSibling; 
    localStorage.setItem("fiveslot", fiveOclock)
};

var time = moment().format("hh:mm:ss");
$("#4a").text(time);

var textarea9 = document.querySelector(".container9");
var textarea10 = document.querySelector(".container10");
var textarea11 = document.querySelector(".container11");
var textarea12 = document.querySelector(".container12");
var textarea1 = document.querySelector(".container1");
var textarea2 = document.querySelector(".container2");
var textarea3 = document.querySelector(".container3");
var textarea4 = document.querySelector(".container5");

// function time() {
//     if (time < 9) {
//         textarea1.style.color = ''
//     }
// }


// .style.color = 'red'">
