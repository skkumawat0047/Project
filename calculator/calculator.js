let boxes = document.querySelectorAll(".box")

const first = ["(", ")", "AC", "C", "n!", "π", "1/x", "|x|", "%", "x<sup>y</sup>", "7", "8", "9", "/", "x<sup>1/y</sup>", "4", "5", "6", "*", "log", "1", "2", "3", "-", "ln", "0", ".", "=", "+"];
const second = ["(", ")", "AC", "C", "<sup>n</sup>C<sub>r</sub>", "<sup>n</sup>P<sub>r</sub>", "sin", "cos", "%", "tan", "7", "8", "9", "/", "cot", "4", "5", "6", "*", "sec", "1", "2", "3", "-", "cosec", "0", ".", "=", "+"];
const third = ["(", ")", "AC", "C", "<sup>n</sup>C<sub>r</sub>", "<sup>n</sup>P<sub>r</sub>", "sin<sup>-1</sup>", "cos<sup>-1</sup>", "%", "tan<sup>-1</sup>", "7", "8", "9", "/", "cot<sup>-1</sup>", "4", "5", "6", "*", "sec<sup>-1</sup>", "1", "2", "3", "-", "cosec<sup>-1</sup>", "0", ".", "=", "+"];
let isfirst = false;
let issecond = true;
let change = document.querySelector("#change");
change.addEventListener("click", () => {
    let current;
    if (isfirst === true) {
        current = first;
        isfirst = false;
        issecond = true;
    }
    else if (issecond === true) {
        current = second;
        issecond = false;
    }
    else {
        current = third;
        isfirst = true;
    }
    boxes.forEach((a, i) => {
        a.innerHTML = current[i];
    })

})
// ========== Get elements ==========
// const boxes = document.querySelectorAll(".box");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

let current = ""; // user input
let result = "";  // evaluated result

// ========== Add event to each button ==========
boxes.forEach(box => {
  box.addEventListener("click", (e) => {
    let value = e.target.textContent.trim();
    console.log(value);
    console.log(typeof(value));
    switch (value) {
      case "AC":
        current = "";
        result = "";
        input.textContent = "";
        output.textContent = "";
        break;

      case "C":
        current = current.slice(0, -1);
        input.textContent = current;
        break;

      case "=":
        try {
          // safe evaluate using JS built-in Math
          let exp = replaceMathSymbols(current);
          result = eval(exp);
          output.textContent = result;
        } catch (err) {
          output.textContent = "Error";
        }
        break;

      case "π":
        current += Math.PI;
        input.textContent = current;
        break;

      case "1/x":
        try {
          let val = eval(replaceMathSymbols(current));
          result = 1 / val;
          output.textContent =result;
        } catch {
          output.textContent = "Error";
        }
        break;

      case "|x|":
        try {
          let val = eval(replaceMathSymbols(current));
          result = Math.abs(val);
          output.textContent = result;
        } catch {
          output.textContent = "Error";
        }
        break;

      case "n!":
        try {
          let val = eval(replaceMathSymbols(current));
          result = factorial(val);
          output.textContent =result;
        } catch {
          output.textContent = "Error";
        }
        break;

      case "log":
        try {
          let val = eval(replaceMathSymbols(current));
          result = Math.log10(val);
          output.textContent =result;
        } catch {
          output.textContent = "Error";
        }
        break;

      case "ln":
        try {
          let val = eval(replaceMathSymbols(current));
          result = Math.log(val);
          output.textContent =  result;
        } catch {
          output.textContent = "Error";
        }
        break;
      case "<sup>n</sup>C<sub>r</sub>":
        try {
          
        } catch {
          output.textContent = "Error";
        }
      default:
        // for normal numbers & operators
        current += value;
        input.textContent = current;
    }
  });
});

// ========== Helper Functions ==========

// factorial function
function factorial(n) {
  n = Math.floor(n);
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

// Replace symbols with JS operators
function replaceMathSymbols(exp) {
  return exp
    .replace(/π/g, Math.PI)
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/\^/g, "**"); // optional if using x^y later
}

function ncr(n,r) {
  return factorial(n)/(factorial(n-r)*factorial(r));
}

function npr(n,r){
  return factorial(n)/factorial(n-r);
}