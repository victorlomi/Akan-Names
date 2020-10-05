let adjustMonth = function(month) {
    // this function returns the adjusted month
    // the month is adjusted because according to the formula
    // mar is month 1, apr is 2, and so on
    // jan and feb are special because they are months #11 & #12
    if((month === 1) || (month === 2)) {
        month += 10;
    } else {
        month -= 2;
    }
    return month;
};

let getDay = function(day, month, year, century) {
    // This function returns the day of the week based on date
    return (day + (Math.floor(2.6 * month - 0.2)) - (2 * century) + year + (Math.floor(year / 4)) + (Math.floor(century / 4))) % 7;
};

// Test getDay()

// October 5th 2020 -> should be 1 for monday
console.log(getDay(5, 10, 20, 20));

// August 5th 2020 -> should be 3 for wednesday
console.log(getDay(5, 8, 20, 20));
