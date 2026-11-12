//declaring all the constants and variables needed

const textBox = document.getElementById("textBox");
const convertToFahrenheit = document.getElementById("convertToFahrenheit");
const convertToCelsius = document.getElementById("convertToCelsius");
const result = document.getElementById("result");

let temperature;


function convert(){

    if(convertToFahrenheit.checked){
        temperature = Number(textBox.value);
        temperature = temperature * 9 / 5 + 32
        result.textContent = temperature.toFixed(1) + "°F";

    }
    else if(convertToCelsius.checked){
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * (5 / 9);
        result.textContent = temperature.toFixed(1) + "°C";
    }
    else{
        result.textContent = `Select a unit`
    }

}