let form = document.querySelector("form");
let submit = document.getElementById("submit");
let genderBtns = document.getElementsByName("gender");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

// elements for annoucing the akan name
let resultsDiv = document.getElementById("results");
let result = document.createElement("h1");

// add css styles 
result.id = "result";
result.classList.add("right-title-alternative");

// to keep track of whether year was already clicked
let wasPressed = false;

form.addEventListener('submit', function(event) {
    let gender;
    let day, month, year;

    // stop the form from doing the action and GET stuff
    event.preventDefault(); 
    
    // validate the form data
    gender = validateGender() ? getGender() : undefined;
    day = validateDay() ? getDay() : undefined;
    month = validateMonth() ? getMonth() : undefined;
    year = validateYear() ? getYear() : undefined;

    if((gender !== undefined) && (day !== undefined) && (month !== undefined) && (year !== undefined)) {
        displayResults(gender, day, month, year);
    }

});

year.addEventListener("click", function() {
    // This function will set the value of the year
    // input to 2020 to make it easier to use the
    // increase/decrease buttons
    if(!wasPressed) {
        year.value = 2020;
    }
    wasPressed = true;
})

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
};

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
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if(gender.toLowerCase() === "male") {
        return maleNames[day];
    } else if (gender.toLowerCase() === "female") {
        return femaleNames[day];
    }
};

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
    if(genderBtns[0].checked) {
        return genderBtns[0].value;
    } else {
        return genderBtns[1].value;
    }
};

let validateDay = function() {
    // This function makes sure that the day entered
    // is valid. meaning its in the range of 1-31
    if(day.value === "") {
        alert("Please Select a Day");
    } else if((Number(day.value) < 1) || (Number(day.value) > 31)) {
        alert("Please Select a Day in the Range: 1-31");
    } else {
        return true;
    }
};

let getDay = function() {
    // This function returns the selected day
    return Number(day.value);
};

let validateMonth = function() {
    // This function makes sure that the month entered
    // is valid. meaning its in the range of 1-12
    if(month.value === "") {
        alert("Please Select a Month");
    } else {
        return true;
    }
};

let getMonth = function() {
    // This function returns the selected month
    return Number(month.value);
};

let validateYear = function() {
    // This function makes sure that the year entered
    // is valid. meaning it isn't negative or zero
    if(year.value === "") {
        alert("Please Select a Year");
    } else if (Number(year.value) < 1)  {
        alert("Please Select a Year That is Greater Than or Equal to 1");
    } else {
        return true;
    }
};

let getYear = function() {
    // This function returns the selected year
    return Number(year.value);
};

let displayResults = function(gender, day, month, year) {
    // This function inserts the result h1 element into the page 
    result.innerText = `Your Akan Name is ${selectAkanName(getDayOfWeek(day, month, year), gender)}`;
    resultsDiv.appendChild(result);

    submit.style.marginTop = "10px";
};

