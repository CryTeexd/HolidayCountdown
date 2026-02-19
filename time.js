console.log("times loaded");

export function parseHolidayDate(yyyy_mm_dd) {
    const [year, month, day] = yyyy_mm_dd.split('-').map(Number);
    return new Date(year, month - 1, day, 0, 0, 0);
}

export function getCountDownParts(targetDate) {
    const diff = targetDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
       
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);   
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}

export function formatCountDown(n) {
    return String(n).padStart(2, "0");
}