const temperature =28;
const windspeed =12;

function calculateWindChill(temp, speed){
return 13.12+(0.6215 * temp) - (11.37 * Math.pow(0.16)) + (0.3965 * temp * Math.pow(speed,0.16))
}

let windChill =N/A;

if (temperature<= 10 && windSpeed>4.8){
    windChill = calculateWindChill(temperature,windspeed).toFixed(1)+"c";

}
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wiind-speed").textContent = windspeed;
document.querySelector("#wind-chill").textContent = windChill;

document.querySelector("# currentyear").textContent =new Date().getFullYear();

document.querySelector("#lastModified").textContent =document.lastModified;
