// let d = new Date();
// console.log(d.getHours()+" : "+d.getMinutes());
// console.log(`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}`);

// d.toString()
// "Sun Aug 15 2021 12:21:02 GMT+0630 (Myanmar Time)"
// d.toDateString()
// "Sun Aug 15 2021"
// d.toTimeString()
// "12:21:02 GMT+0630 (Myanmar Time)"
// d.toLocaleString()
// "8/15/2021, 12:21:02 PM"
// d.toLocaleString("en-AU")
// "15/08/2021, 12:21:02 pm"
// d.toLocaleString("en-US")
// "8/15/2021, 12:21:02 PM"
// d.toLocaleString("ko-KR")
// "2021. 8. 15. 오후 12:21:02"
// d.toLocaleDateString()
// "8/15/2021"
// d.toLocaleTimeString()
// "12:21:02 PM"
// d.toLocaleTimeString("ko-KR")
// "오후 12:21:02"

let d = new Date();
console.log(d);
// let currentHour = d.getHours();
// d.setHours(currentHour+1500);
// d.setMonth(d.getMonth()+4);

let totalLessonHours=50;
let learnHourPerDay = 2;
let dayToFinish = totalLessonHours/learnHourPerDay;
d.setDate(d.getDate()+dayToFinish);
console.log(d);
