let form = document.querySelector("form");
let genderBtns = document.getElementsByName("gender");

let adjustMonth = function(month) {
    // This function returns the adjusted month
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
    // This function returns the adjust year
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

let getDayOfWeek = function(day, month, year) {
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
    let maleNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    let femaleNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

    if(gender.toLowerCase() === "male") {
        return maleNames[day];
    } else if (gender.toLowerCase() === "female") {
        return femaleNames[day];
    }
}

let validateGender = function() {
    // This function makes sure that gender has been chosen 
    // if gender has been chosen, it returns true
    // otherwise it will alert the user of the missing gender input
    if((!genderBtns[0].checked) && (!genderBtns[1].checked)) {
        alert("Please Select a Gender");
    } else {
        return true;
    }
};

let getGender = function() {
    // This function returns the selected gender 
    genderBtns.forEach((gender) => {
        if(gender.checked) {
            return gender.value;
        }
    });
};

let validateDay = function() {
    // This function makes sure that the day entered
    // is valid. meaning its in the range of 1-31
}

let getDay = function() {
    // This function returns the selected day
}

let validateMonth = function() {
    // This function makes sure that the month entered
    // is valid. meaning its in the range of 1-12
}

let getMonth = function() {
    // This function returns the selected month
}

let validateYear = function() {
    // This function makes sure that the year entered
    // is valid. meaning it has 4 digits
}

let getYear = function() {
    // This function returns the selected year
}

form.addEventListener('submit', function(event) {
    let gender;

    let day, month, year;

    // stop the form from doing the action and GET stuff
    event.preventDefault(); 
    console.log("form submitted");
    
    // gender validation
    if(validateGender()) {
        gender = getGender();
    }

    // birthday validation
    if(validateDay()) {
        day = getDay();
    }

    if(validateMonth()) {
        month = getMonth();
    }

    if(validateYear()) {
        year = getYear();
    }
})