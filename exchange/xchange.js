const base_url = " https://v6.exchangerate-api.com/v6/c7928a0f5e8731eac26cf86a/latest"

const fromcurrncy = document.querySelector(".from select") 
const tocurrency = document.querySelector(".TO select") 
const droplist = document.querySelectorAll("#Currency")

const msg = document.querySelector(".calculate");
const msg2 = document.querySelector(".msg");

const btn = document.querySelector(".calculate");
for(let select of droplist){
    for(curcode in listCountry){
        let newoption = document.createElement("option");
        newoption.innerText = curcode;
        newoption.value = curcode;
        if (select.name==="FROM" && curcode==="USD"){
            newoption.selected = "selected";
        }
        else if(select.name==="TO" && curcode==="INR"){
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element)=>{
    let currcode = element.value;
    let countrycode = listCountry[currcode];
    let newSrc =  `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

let inputdata =document.querySelector("input").value;
let numdata = parseFloat(inputdata);


// btn.addEventListener(("click"),async (evt)=>{
//     evt.preventDefault();
//     let amount = document.querySelector("input");
//     let inamount = amount.value;
//     if(inamount ==="" || inamount <1){
//         inamount = 1;
//         amount.value = 1;
//     }
//     console.log(inamount);
//     console.log(fromcurrncy.value);
//     console.log(tocurrency.value);
//     const FURL1 = `${base_url}/${fromcurrncy.value}`
//     const FURL2 = `${base_url}/${tocurrency.value}`

//     let fun1 = await fetch(FURL1);
//     let final1 = await fun1.json();
//     let fun2 = await fetch(FURL1);
//     let final2 = await fun2.json();

//     console.log(final1.conversion_rates[fromcurrncy.value]);
//     var toconvert = final2.conversion_rates[tocurrency.value];
//     let finalamount = numdata*toconvert;
//     console.log(typeof toconvert);
//     console.log(typeof numdata);
//     console.log(typeof finalamount);
//     console.log("final amount after converting: ", finalamount);
//     let Text = `${numdata} ${fromcurrncy} "=" ${finalamount} ${tocurrency}`
//     // msg.innerText = Text;
// })

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    // Always read fresh value from input
    let amount = document.querySelector("input");
    let inamount = parseFloat(amount.value);

    if (isNaN(inamount) || inamount < 1) {
        inamount = 1;
        amount.value = 1;
    }

    const FURL = `${base_url}/${fromcurrncy.value}`;
    let response = await fetch(FURL);
    let data = await response.json();

    // Get conversion rate for selected "to" currency
    let rate = data.conversion_rates[tocurrency.value];

    // Calculate final amount
    let finalamount = inamount * rate;

    console.log("Input:", inamount);
    console.log("Rate:", rate);
    console.log("Final amount:", finalamount);

    let Text = `${inamount} ${fromcurrncy.value} = ${finalamount.toFixed(2)} ${tocurrency.value}`;
    msg2.innerText =`1${fromcurrncy.value}=${rate}${tocurrency.value}`
    msg.innerText = Text;
});
