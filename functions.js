import {DAYS_IN_MONTHS} from "./constants.js";

export function getAnyDate({day, month, year}){
    return new Date(`${year}-${month}-${day}`)
}

export function getTodayDate(){
    return new Date();
}

export function getFullDateString(date) {
    return date.toLocaleDateString("en-us", {year: "numeric", day: "numeric", month: "long"})
}

export function getMonthYearHeadline(date){
    return date.toLocaleDateString("en-us", {year: "numeric", month: "long"}).split(RegExp(/\s/)).join(" - ");
}

export function getMonth(date){
    return date.getMonth();
}

export function getNumDaysinMonth({month, year}){
    const mappableMonth = month + 1;
    if (mappableMonth == 2 && isLeapYear(year)) return 29;
    return DAYS_IN_MONTHS[mappableMonth];
}

export function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || !(year % 400) 
}   


// let month = getAnyDate({day: 25, month:3, year: 2021}).getMonth();
// let numDays = getNumDaysinMonth({month: 11, year: 2024})
// console.log(numDays)

// let today = getTodayDate();
// console.log(displayFullDateString(today));



