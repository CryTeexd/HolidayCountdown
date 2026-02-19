export function parseHolidayDate(yyyy_mm_dd) {
    const [year, month, day] = yyyy_mm_dd.split('-').map(Number);
    return new Date(year, month - 1, day);
}

export function getCountDownParts(targetDate) {
    diff = targetDate - new Date();
    if (diff < 0) {
        return null;
    }   
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);   
    const minutes = Math.floor((diff / (1000 * 60)) % 60);  // tady * a ne / ne?
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
}

export function formatCountDown(n) {
    return n.toString().padStart(2, '0');
}