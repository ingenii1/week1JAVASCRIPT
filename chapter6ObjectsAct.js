
const day = "monday"
let alarm = ""
const alarmclock = {
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am"
}

if (day === "saturday" || day === "sunday"){
  alarm = alarmclock.weekendAlarm
}else {
  alarm = alarmclock.weekdayAlarm
}
console.log(alarm) 

let favoriteSongs=
["fuel","atwa","higuer ground"];
console.log(favoriteSongs);
