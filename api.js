export async function fetchNextHolidays(countryCode) {
    const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}