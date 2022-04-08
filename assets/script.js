// link HTML to JavaScript
// link time to CSS for color change

var gradDate = moment().format("dddd, MMM Do");
$("#time-block").text(gradDate);

var btn9 = document.querySelector(".saveBtn9");
var nineOclock = document.querySelector("input9");

document.getElementById("input9").textContent = localStorage.getItem("nineslot");
// document.getElementById("input10").textContent = localStorage.getItem("tenslot");
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


// var btn10 = document.querySelector(".saveBtn10");
// var tenOclock = document.querySelector("input10");

// document.getElementById("input10").textContent = localStorage.getItem("tenslot")

// btn10.addEventListener("click", tenTimeSlot);


// function tenTimeSlot(event1) {
//     var btn10 = event1.target;
//     // document.getElementById("item2").previousSibling.textContent;
//     var tenOclock = document.getElementById("btn10").previousSibling; 
//     // document.getElementById("input").innerHTML = nineOclock;
//     localStorage.setItem("tenslot", tenOclock.textContent)
// };


// var btn11 = document.querySelector(".saveBtn11");
// var elevenOclock = document.querySelector("input11");

// document.getElementById("input11").textContent = localStorage.getItem("elevenSlot")

// btn11.addEventListener("click", elevenTimeSlot);


// function elevenTimeSlot(event) {
//     var btn11 = event.target;
//     // document.getElementById("item2").previousSibling.textContent;
//     var elevenOclock = document.getElementById("btn11").previousSibling; 
//     // document.getElementById("input").innerHTML = nineOclock;
//     localStorage.setItem("elevenSlot", elevenOclock.textContent)
// };