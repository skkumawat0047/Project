let you= 0;
let cscore =0;
let cyou =document.querySelector(".yscore");
let ccump =document.querySelector(".cscore");

let choics = document.querySelectorAll(".button")
let msg = document.querySelector(".countmove");
const compchoice = ()=>{
    const arr = ["rock", "paper","scissor"];
    const a=(Math.floor(Math.random()*3));
    console.log(arr[a]);
    return arr[a];
}

choics.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const id = choice.getAttribute("id");
        console.log(`choice is clicked! ${id}`);
        const comp = compchoice();
        checkwinner(id,comp)
    })
}
)
const checkwinner = (id,comp) =>{
    if (id == comp){
        console.log("mathc is drow");
        msg.innerText = "match is draw";
        msg.style.backgroundColor = "burlywood";
    }
    else{
        let userwin = true;
        if(id === "rock"){
            userwin = comp === "paper" ? false : true;
        }
        else if(id === "paper"){
            userwin = comp === "scissor" ? false : true;
        }
        else{
            userwin = comp === "rock" ? false : true;
        }
        if(userwin){
            console.log("you win");
            msg.innerText = "you win";
            msg.style.backgroundColor = "green";
            you++;
            cyou.innerText = you;
            console.log(you);
        }
        else{
            console.log("computer win");
            msg.innerText= "Computer wins!";
            msg.style.backgroundColor = "red";
            cscore++;
            ccump.innerText = cscore;
        }
    }
}