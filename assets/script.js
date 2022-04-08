// link HTML to JavaScript
// link time to CSS for color change

var gradDate = moment().format("dddd, MMM Do");
$("#time-block").text(gradDate);


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
    // document.getElementById("item2").previousSibling.textContent;
    var nineOclock = btn9.parentElement.previousSibling;
    // document.getElementById("input").innerHTML = nineOclock;
    localStorage.setItem("nineslot", nineOclock)
};

//10
var btn10 = document.querySelector(".saveBtn10");
var tenOclock = document.querySelector("input10");

document.getElementById("input10").innerHTML = localStorage.getItem("tenslot")

btn10.addEventListener("click", tenTimeSlot);


function tenTimeSlot(event1) {
    var btn10 = event1.target;
    // document.getElementById("item2").previousSibling.textContent;
    var tenOclock = btn10.parentElement.previousSibling; 
    // document.getElementById("input").innerHTML = nineOclock;
    localStorage.setItem("tenslot", tenOclock)
};

//11
var btn11 = document.querySelector(".saveBtn11");
var elevenOclock = document.querySelector("input11");

document.getElementById("input11").innerHTML = localStorage.getItem("elevenslot")

btn11.addEventListener("click", elevenTimeSlot);


function elevenTimeSlot(event2) {
    var btn11 = event2.target;
    // document.getElementById("item2").previousSibling.textContent;
    var elevenOclock = btn11.parentElement.previousSibling; 
    // document.getElementById("input").innerHTML = nineOclock;
    localStorage.setItem("elevenslot", elevenOclock)
};

//12
var btn12 = document.querySelector(".saveBtn12");
var twelveOclock = document.querySelector("input12");

document.getElementById("input12").innerHTML = localStorage.getItem("twelveslot")

btn12.addEventListener("click", twelveTimeSlot);


function twelveTimeSlot(event3) {
    var btn12 = event3.target;
    // document.getElementById("item2").previousSibling.textContent;
    var twelveOclock = btn12.parentElement.previousSibling; 
    // document.getElementById("input").innerHTML = nineOclock;
    localStorage.setItem("twelveslot", twelveOclock)
};

//1
var btn1 = document.querySelector(".saveBtn1");
var oneOclock = document.querySelector("input1");

document.getElementById("input1").innerHTML = localStorage.getItem("oneslot")

btn1.addEventListener("click", oneTimeSlot);

function oneTimeSlot(event4) {
    var btn1 = event4.target;
    // document.getElementById("item2").previousSibling.textContent;
    var oneOclock = btn1.parentElement.previousSibling; 
    // document.getElementById("input").innerHTML = nineOclock;
    localStorage.setItem("oneslot", oneOclock)
};

//2
var btn2 = document.querySelector(".saveBtn2");
var twoOclock = document.querySelector("input2");

document.getElementById("input2").innerHTML = localStorage.getItem("twoslot")

btn2.addEventListener("click", twoTimeSlot);

function twoTimeSlot(event5) {
    var btn2 = event5.target;
    // document.getElementById("item2").previousSibling.textContent;
    var twoOclock = btn2.parentElement.previousSibling; 
    // document.getElementById("input").innerHTML = nineOclock;
    localStorage.setItem("twoslot", twoOclock)
};