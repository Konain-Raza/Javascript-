const currentDate = new Date(); // Create a new Date object representing the current date and time
console.log(currentDate); // Output: current date and time
console.log(currentDate.getFullYear()); // Output: current year
console.log(currentDate.getMonth()); // Output: current month (0-indexed)
console.log(currentDate.getDate()); // Output: current day of the month
console.log(currentDate.getDay()); // Output: current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
console.log(currentDate.getHours()); // Output: current hour
console.log(currentDate.getMinutes()); // Output: current minute
console.log(currentDate.toLocaleString()); // Output: date and time in local format
console.log(currentDate.toLocaleTimeString()); // Output: time in local format
