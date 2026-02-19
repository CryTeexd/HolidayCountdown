console.log("api loaded");

export async function fetchNextHolidays(countryCode) {
    const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
     return data[0];
}