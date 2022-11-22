// Iteration 1: Names and Input
var hacker1 = "Leander German";
var hacker2 = "Leo Alman";




// Iteration 2: Conditionals
/*
function longerName(driver, navigator) {
    var result;
    if (driver.length > navigator.length) {
        result = `The driver has the longest name, it has ${driver.length} characters.`;
    }
    if (driver.length < navigator.length) {
        result = `It seems that the navigator has the longest name, it has ${navigator.length} characters.`;
    }
    if (driver.length == navigator.length){
        result = `Wow, you both have equally long names, ${driver.length} characters!`;
    }

    return result;
}


console.log(longerName(hacker1, hacker2));
*/


// Iteration 3: Loops
function driversName(driver) {
    var arr = driver.toUpperCase().split(" ");
    var driverName = [... arr[0]]
    var result = "";
    for (i = 0; i < driverName.length; i++) {
        result += driverName[i] + " ";
    }
    return result;
}

console.log(driversName(hacker1));