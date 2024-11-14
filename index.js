/*async function fetchWeather(lat, lon) {
    const apiKey = "1234567891011121314";
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
*/
const apiKey = "1234567891011121314"; // Define the API key(pseudo)
const query = 'London';
const url = `https://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${query}`;//used the other API because it was not working for me

async function fetchCoordinates() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}`);
            const errorData = await response.json();
            console.log("Error Data JSON:", JSON.stringify(errorData, null, 2)); 
            return null; // Ensure we return null in case of error
        }
        
        const data = await response.json();
        
        // Check if data is available and has a valid structure
        if (data && data.data && data.data.length > 0) {
            const Latitude = data.data[0].latitude; // Extract the latitude of the first result
            const Longitude = data.data[0].longitude;
            return { latitude: Latitude, longitude: Longitude };
        } else {
            console.log("No data found for the query.");
            return null; // Ensure we return null if no data is found
        }

    } catch (error) {
        console.error("Error Fetching coordinates:", error.message);
        return null; // Return null if an error occurs
    }
}

async function fetchWeather(lat, lon) {
    const apiKey = "1234567891011121314";//pseudo
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
        // Only print the weather element from the JSON
        console.log("Weather Data:", JSON.stringify(data, null, 2)); 
    } catch (error) {
        console.error("Error Fetching weather data:", error.message);
    }
}

async function main() {
    const coordinates = await fetchCoordinates(); // Wait for coordinates to resolve
    if (coordinates) {
        const { latitude, longitude } = coordinates;
        fetchWeather(latitude, longitude);
    } else {
        console.log("No coordinates to pass.");
    }
}

// Call the main function to execute the flow
main();

