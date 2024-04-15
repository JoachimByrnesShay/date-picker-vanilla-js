import * as dateFunctions from "./functions.js";
const df = dateFunctions;
let today = df.getTodayDate();
console.log(df.getFullDateString(today))


const datePickerButton = document.querySelector('.date-picker-button');
const currentCalendarMonthHeadline = document.querySelector(".current-month");

// "October - 2020"
datePickerButton.innerText = df.getFullDateString(today)

currentCalendarMonthHeadline.innerText = df.getMonthYearHeadline(today);

//     November, April, June, and September are the months with 30 days ,
//  February has 28 days (29 days in the leap year) and 
 
//  all the remaining months have 31 days.

//  GET LEAP YEAR 
