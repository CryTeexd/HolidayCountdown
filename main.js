import { parseHolidayDate, getCountDownParts, formatCountDown } from "./time.js";
import { fetchNextHolidays } from "./api.js";

let timerId = null;
let currentCountry = "CZ";
let currentTargetDate = null;

function setActiveButton(countryCode) {
  document.querySelectorAll(".country-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.id.toUpperCase() === countryCode);
  });
}

function renderHolidayInfo(holiday) {
    document.getElementById("holidayName").textContent = holiday.name;
    document.getElementById("holidayDate").textContent = holiday.date;
}

function renderCountDown(parts) {
    document.getElementById('cdDays').textContent = parts.days;
    document.getElementById('cdHours').textContent = formatCountDown(parts.hours);
    document.getElementById('cdMins').textContent = formatCountDown(parts.minutes);
    document.getElementById('cdSecs').textContent = formatCountDown(parts.seconds);
}

function startCountDown() {
  if (timerId) clearInterval(timerId);
  
  renderCountDown(getCountDownParts(currentTargetDate));

  timerId = setInterval(() => {
    renderCountDown(getCountDownParts(currentTargetDate));
  }, 1000);
}
 

async function loadCountry(countryCode) {
  currentCountry = countryCode;
  setActiveButton(countryCode);
    const holiday = await fetchNextHolidays(countryCode);
    currentTargetDate = parseHolidayDate(holiday.date);

    renderHolidayInfo(holiday);
    startCountDown();
}

document.querySelectorAll(".country-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    loadCountry(btn.id.toUpperCase());
  });
});

loadCountry(currentCountry);