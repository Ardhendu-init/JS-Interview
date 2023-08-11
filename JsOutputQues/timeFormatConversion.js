function convertTo24Hour(time12) {
  const parts = time12.split(" ");
  if (parts.length !== 2 || (parts[1] !== "AM" && parts[1] !== "PM")) {
    return "Invalid time format";
  }

  const time = parts[0].split(":");
  if (time.length !== 2 || isNaN(time[0]) || isNaN(time[1])) {
    return "Invalid time format";
  }

  let hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);
  const period = parts[1].toUpperCase();

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  // Formatting the 24-hour time
  const formattedHours = (hours < 10 ? "0" : "") + hours;
  const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
  const time24 = `${formattedHours}:${formattedMinutes}`;

  return time24;
}

const time12 = "12:30 AM";
const time24 = convertTo24Hour(time12);
console.log(`12-hour time: ${time12}`);
console.log(`24-hour time: ${time24}`);
