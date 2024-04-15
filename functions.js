import {DAYS_IN_MONTHS} from "./constants.js";

function getAnyDate({day, month, year}){
    return new Date(`${year}-${month}-${day}`)
}

function getTodayDate(){
    return new Date();
}

function displayFullDateString(date) {
    return date.toLocaleDateString("en-us", {year: "numeric", day: "numeric", month: "long"})
}

function getMonth(date){
    return date.getMonth();
}


function getNumDaysinMonth({month, year}){
    const mappableMonth = month + 1;
    if (mappableMonth == 2 && isLeapYear(year)) return 29;
    return DAYS_IN_MONTHS[mappableMonth];
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || !(year % 400) 
}   


// let month = getAnyDate({day: 25, month:3, year: 2021}).getMonth();
// let numDays = getNumDaysinMonth({month: 11, year: 2024})
// console.log(numDays)

// let today = getTodayDate();
// console.log(displayFullDateString(today));



