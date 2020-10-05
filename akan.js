let getDay = function(day, month, year, century) {
    // This function returns the day of the week based on date
    return (day + (Math.floor(2.6 * month - 0.2)) - (2 * century) + year + (Math.floor(year / 4)) + (Math.floor(century / 4))) % 7;
};
