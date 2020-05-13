const timeDisplay = $('#timeDisplay')
let now = moment().format("dddd MMM Mo YYYY hh:mm a");
let nowHours = Number(moment().format("H"));

timeDisplay.text(now);