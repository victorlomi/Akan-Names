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

let getDay = function(day, month, year) {
    // This function returns the day of the week based on date

    // get the year and century from the year parameter 
    century = splitYear(year).century;
    year= splitYear(year).year;

    year = adjustYear(month, year);
    month = adjustMonth(month);
    return (day + (Math.floor(2.6 * month - 0.2)) - (2 * century) + year + (Math.floor(year / 4)) + (Math.floor(century / 4))) % 7;
};

let selectAkanName = function(day, gender) {
    // This function returns an akan name based on the 
    // day of the week and gender
}

// Test getDay() & selectAkanName()

// October 5th 2020 -> should be 1 for monday
// Akan Name for monday(1) -> should be kwadwo/adwoa
console.log(getDay(5, 10, 2020));
console.log(selectAkanName(getDay(5, 10, 2020), 'male'));

// August 5th 2020 -> should be 3 for wednesday
// Akan Name for wednesday(3) -> should be kwaku/akua
console.log(getDay(5, 8, 2020));
console.log(selectAkanName(getDay(5, 10, 2020), 'male'));

// February 18th 2020 -> should be 2 for tuesday
// Akan Name for tuesday(2) -> should be kwabena/abenaa
console.log(getDay(18, 2, 2020));
console.log(selectAkanName(getDay(5, 10, 2020), 'male'));
