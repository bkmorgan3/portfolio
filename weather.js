
document.addEventListener("DOMContentLoaded", () => {
    const temp = document.getElementById("temp")
    const apiKey = "1a997775e4e4cf1300a58f5cbb31b415"
    const city = "Los Angeles"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.cod === 200) {
            
            temp.innerHTML = `<p>  I live in ${city} where the current temperature is ${data.main.temp}F</p>`;
        } else {
            console.error("Error fetching weather:", data.message)
        }
    })
    .catch(err => console.error(err))
});