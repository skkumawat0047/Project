let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcont = document.querySelector(".msgcont");
let winner = document.querySelector(".winner");
let newbtn = document.querySelector(".newbtn");
let turnO = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame = () => {
    turnO = true;
    enablesboxs();
    msgcont.classList.add("hide");
}

btn.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disablesboxs = ()=>{
    for(let box of btn){
        box.disabled=true;
    }
};
const enablesboxs = ()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText = "";
    }
};
const showwinner = (text) => {
    winner.innerText=text;
    msgcont.classList.remove("hide");
    disablesboxs();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos0value = btn[pattern[0]].innerText;
        let pos1value = btn[pattern[1]].innerText;
        let pos2value = btn[pattern[2]].innerText;
        if (pos0value != "" && pos1value != "" && pos2value != "") {
            if (pos0value === pos1value && pos1value === pos2value) {
                console.log("winner is found!",pos0value);
                showwinner(`Congratulation, winner is ${pos0value}`);
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);