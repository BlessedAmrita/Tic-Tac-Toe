let boxes = document.querySelectorAll(".box");
let buttonSet = document.querySelectorAll(".click");//new and reset game button
let popup = document.querySelector("p");//final message
let mode = document.querySelector("#mode");
let body = document.querySelector("body");//used for changing the background color in modes

//diaabling all buttons once the game is over
let disableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

//checking for winner
let win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
let check = (() => {
    for (let position of win) {
        let b1 = boxes[position[0]].innerText;
        let b2 = boxes[position[1]].innerText;
        let b3 = boxes[position[2]].innerText;
        if (b1 !== "" && b2 !== "" & b3 !== "") {
            if (b1 === b2 && b2 === b3) {
                disableBtn();
                popup.classList.remove("hide");
                popup.classList.add("msgbox");
                popup.innerText = `Congratulations! \n The Winner is ${b1}`;
            }
        }
    }
});


//checking draw condition
let drawCheck = () => {
    for (let position of win) {
        let b1 = boxes[position[0]].innerText;
        let b2 = boxes[position[1]].innerText;
        let b3 = boxes[position[2]].innerText;
        if (b1 !== "" && b2 !== "" & b3 !== "") {
            if (b1 !== b2 || b2 !== b3 || b1 !== b3) {
                disableBtn();
                popup.classList.remove("hide");
                popup.classList.add("msgbox");
                popup.innerText = `That's a Draw!\n Let's play once more!`;
            }
        }
    }
}

//practicing for-of loop
// let complete = () => {
//     for (let box of boxes) {
//         if (box.innerText === "")
//             return false;
//     }
//     return true;
// }


//checks if all boxes are filled
let complete = () => {
    let bool = true;
    boxes.forEach((box) => {
        if (box.innerText ==="")
            bool = false;
    });
    return bool;
}

//main working part
let turnX = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX === true) {
            box.innerHTML = "X";
            box.style.color = "#37123c";
            turnX = false;
        }
        else {
            box.innerHTML = "O";
            turnX = true;
            box.style.color = "#10451d";
        }
        check();
        if (complete() === true) {
            drawCheck();
            check();
        }
        box.disabled = true;
    })
});


//new and reset game button
buttonSet.forEach((button) => {
    button.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.disabled = false;
            box.innerHTML = "";
        })
        popup.classList.add("hide");
        popup.classList.remove("msgbox");
    })
});

//Mode Color
let modeColor = "light";
mode.addEventListener("click", () => {
    if (modeColor === "light") {
        body.classList.add("dark");
        boxes.forEach((box) => {
            box.classList.add("darkBox");
            box.classList.remove("box");
        })
        modeColor = "dark";
    }
    else if (modeColor === "dark") {
        body.classList.add("blue");
        body.classList.remove("dark");
        boxes.forEach((box) => {
            box.classList.add("blueBox");
            box.classList.remove("darkBox");
        })
        modeColor = "blue";
    }
    else if (modeColor === "blue") {
        body.classList.add("green");
        body.classList.remove("blue");
        boxes.forEach((box) => {
            box.classList.add("greenBox");
            box.classList.remove("blueBox");
        })
        modeColor = "green";
    }
    else {
        body.classList.remove("green");
        boxes.forEach((box) => {
            box.classList.remove("greenBox");
            box.classList.add("box");
        })
        modeColor = "light";
    }
});



