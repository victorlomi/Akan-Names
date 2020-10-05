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

let adjustYear = function(month, year) {
    // this function returns the adjust year
    // the year is adjusted because according to the formula
    // when calculating for jan and feb, you have to minus 1 
    // from the year
    if((month === 1) || (month === 2)) {
        return year - 1;
    } else {
        return year;
    }
}

let splitYear = function(originalYear) {
    // This function returns the century((19)20, (20)19, (18)75) 
    // and year(19(20), 20(19), 18(75)) from the string 'originalYear'
    originalYear = originalYear.toString();
    return {
        century: Number(originalYear[0] + originalYear[1]),
        year: Number(originalYear[2] + originalYear[3])
    };
};

let getDay = function(day, month, year, century) {
    // This function returns the day of the week based on date
    year = adjustYear(month, year);
    month = adjustMonth(month);
    return (day + (Math.floor(2.6 * month - 0.2)) - (2 * century) + year + (Math.floor(year / 4)) + (Math.floor(century / 4))) % 7;
};

// Test getDay()

// October 5th 2020 -> should be 1 for monday
console.log(getDay(5, 10, 20, 20));

// August 5th 2020 -> should be 3 for wednesday
console.log(getDay(5, 8, 20, 20));

// February 18th 2020 -> should be 2 for tuesday
console.log(getDay(18, 2, 20, 20));
