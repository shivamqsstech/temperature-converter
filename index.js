const submit = document.getElementById('submit');

const temperature_result = document.getElementById('temperature-result');
const temperatureInput = document.getElementById("temperature-input");
submit.onclick= function(){
    temperature = document.getElementById("temperature-input").value;
    console.log(temperature);

    temperatureUnit = document.getElementById("temperature-unit").value;
    console.log(temperatureUnit);

    conversionUnit = document.getElementById("conversion-unit").value;
    console.log(conversionUnit);



    if(temperatureUnit ===conversionUnit ){

        temperature_result.textContent= "The Entered Unit Cannot be same as conversion unit. Please select a different unit";
        

    }
    else if(temperature ==""){

      temperature_result.textContent= "Please enter the temperature first.";
    }

    else{
        if (temperatureUnit=="celsius" && conversionUnit=="fahrenheit" ){

            let result = (temperature *9/5)+32;
            temperature_result.textContent= result + " (°F)";

        }

        else if (temperatureUnit=="fahrenheit" && conversionUnit=="celsius" ){

            let result = ((temperature-32)*5)/9;
            temperature_result.textContent= result + " (°C)";

        }






    }





// Clears the result when the user starts tyoing the temperature again
temperatureInput.addEventListener("input", function() {
    const temperature_result = document.getElementById('temperature-result');
    temperature_result.textContent = ""; 


});





}