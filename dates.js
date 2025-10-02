const date = new Date();
console.log("date: ", date);
console.log("typeof date: ", typeof date);
console.log("Date as string: ", date.toString());
console.log("Date as date string: ", date.toDateString());
console.log("Date as time string: ", date.toTimeString());
console.log("Date as ISO string: ", date.toISOString());
console.log("Date as UTC string: ", date.toUTCString());
console.log("Year: ", date.getFullYear());
console.log("Month: ", date.getMonth() + 1); // Months are zero-based
console.log("Day: ", date.getDate());
console.log("Hours: ", date.getHours());
console.log("Date Locale String: ", date.toLocaleString());
console.log("EPOCH Time: ", date.getTime());
console.log("Day: ", date.getDay());
console.log(
  "Day in Words: ",
  date.toLocaleString("default", {
    weekday: "short",
    era: "long",
    calendar: "gregory",
  })
);
