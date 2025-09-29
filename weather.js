let url = `https://geocoding-api.open-meteo.com/v1/search?name=Delhi`

let btn = document.querySelector(".btn");
let input = document.querySelector(".box");

async function myWeather(){
    let response = await fetch(url);
    let data= await response.json;
    // console
    console.log(data);
}


btn.addEventListener('click', () => {
    // let city = input.value;
    myWeather();
    


})