async function fetchWeather(lat, lon) {
    const apiKey = "64346cd0ec34644a2f8dc6b2893165f8";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}`);
            const errorData = await response.json();
            console.log("Error Data JSON:", JSON.stringify(errorData, null, 2)); 
            return;
        }
        const data = await response.json();
        console.log("Full Weather Data JSON:", JSON.stringify(data, null, 2)); 
    } catch (error) {
        console.error("Error Fetching weather data:", error.message);
    }
}


fetchWeather(20.2449896, 85.7974041); 
