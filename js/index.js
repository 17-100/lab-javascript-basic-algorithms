// Iteration 1: Names and Input
var hacker1 = "Zelli Gehrman";
var hacker2 = "Stefan Alman";



/*
// Iteration 2: Conditionals
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

/*
// Iteration 3: Loops
// 3.1
function nameCapital(driver) {
    var arr = driver.toUpperCase().split(" ");
    var driverName = [... arr[0]]
    var result = "";
    for (i = 0; i < driverName.length; i++) {
        result += driverName[i] + " ";
    }
    return result;
}
console.log(nameCapital(hacker1));

// 3.2
function nameReverse(navigator){
    var arr = navigator.split(" ")
    var name = arr[0]
    var nameArr = [... name];
    var nameArrReverse = nameArr.reverse();
    var nameReverse = nameArrReverse.join("");

    return nameReverse;
};
console.log(nameReverse(hacker2));


// 3.3
function lexicographicOrder(driver, navigator) {
    var arr1 = driver.split(" ");
    var arr2 = navigator.split(" ");
    var driverName = arr1[0];
    var naviName = arr2[0];

    var bothNames = [driverName, naviName];
    var sortedNames = bothNames.sort();

    var result;
    
    if(sortedNames[0] == driverName) {
        result = "The driver's name goes first.";
    }
    if(sortedNames[0] == naviName) {
        result = "Yo, the navigator goes first definitely.";
    }

    return result;
}
console.log(lexicographicOrder(hacker1, hacker2));
*/


// Bonus