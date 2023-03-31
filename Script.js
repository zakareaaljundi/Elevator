
let groundFloor = document.querySelector(".ground_floor");
let firstFloor = document.querySelector(".first_floor");
let secondFloor = document.querySelector(".second_floor");
let thirdFloor = document.querySelector(".third_floor");

let audio = document.querySelector("audio")
let theElevator = document.querySelector(".the_elevator");
let elevatorCounter = document.querySelector(".elevator_counter")
let floorsButtons = document.querySelectorAll(".buttons_container button");

let floorArray = [groundFloor, firstFloor, secondFloor, thirdFloor];
// for (let i = 0; i < floorArray.length; i++) {
//     if (getComputedStyle(theElevator).bottom < "301.625") {
//         elevatorCounter.innerHTML = "0"
//     } else if (getComputedStyle(theElevator).bottom >= "301.625" && getComputedStyle(theElevator).bottom < "438.725") {
//         elevatorCounter.innerHTML = "1"
//     } else if (getComputedStyle(theElevator).bottom >= "438.725" && getComputedStyle(theElevator).bottom < "575.825") {
//         elevatorCounter.innerHTML = "2"
//     } else {
//         elevatorCounter.innerHTML = "3"
//     }
// }

floorsButtons.forEach(function (ele) {
    ele.onclick = function (e) {
        floorsButtons.forEach((ele) => {
            ele.classList.remove("Active");
            ele.style.backgroundColor = "#fff";
            console.log(ele.parentElement)
            if (ele.getAttribute("data-id") === e.target.getAttribute("data-id")) {
                ele.style.backgroundColor = "red";
                ele.classList.add("Active");
            }
        });
        this.classList.add("Active");
        this.style.backgroundColor = "red";
        floorArray.forEach(function (ele) {
            ele.style.cssText = "color: #fff; z-index: 11;";
            ele.firstElementChild.style.cssText = "width: 194px; left: -71px; bottom: 14px; transition: all 0.8s; z-index: 29;";
            ele.children[1].style.cssText = "transition: all 0.3s 0.2s";
            elevatorCounter.style.cssText = "background-color: #fff; box-shadow: inset 0 0 13px 5px #fff; transition: all 0.2s";
            if (getComputedStyle(theElevator).bottom === getComputedStyle(ele).bottom) {
                // elevatorCounter.innerHTML = `${floorArray.indexOf(ele)}`
            }
        });
        floorArray.filter(function (ele) {
            if (ele.getAttribute("data-id") === e.target.getAttribute("data-id")) {
                theElevator.style.bottom = `${getComputedStyle(ele).bottom}`;
                // ele.firstElementChild.style.cssText = "z-index: 22";
                ele.firstElementChild.style.cssText = "width: 0px; left: -1px; bottom: -1px; transition: all 0.8s 0.6s; z-index: 2299";
                ele.style.cssText = "color: lightgreen; z-index: 9; transition: all 0.5s 1.3s";
                ele.children[1].style.cssText = "color: #fff; transition: all 0.3s 1.5s;";
                setTimeout(function () {
                    let audio1 = new Audio("./Audio/elevator-ding-at-arenco-tower-dubai-38520.mp3");
                    audio1.style.transition = "all 0s 1.5s";
                    audio1.play();
                    elevatorCounter.style.cssText = "background-color: #fff; box-shadow: 0 0 13px 5px lightgreen; transition: all 0.5s";
                }, 2300)
            }
        });
        theElevator.firstElementChild.style.cssText = "width: 193px; bottom: 13px; right: -126px; z-index: 8; transition: all 0.8s ";
        // theElevator.lastElementChild.style.cssText = "left: 138px; width: 20px; top: 15px; z-index: -1;"
        setTimeout(function () {
            theElevator.firstElementChild.style.cssText = "width: 2px; bottom: 28px; right: -55px; z-index: 10; transition: all 0.8s;";
            // theElevator.lastElementChild.style.cssText = "left: 138px; width: 20px; top: 15px; z-index: 99; transition: all 0.8s 0.3s;"
        }, 2300)
    }
});