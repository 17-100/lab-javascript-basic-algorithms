// Iteration 1: Names and Input
var hacker1 = "Zelli Gehrman";
var hacker2 = "Stefan Alman";



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



// Bonus

var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare elementum ullamcorper. Curabitur volutpat enim vitae sem euismod accumsan. Donec tempor at eros gravida maximus. Nulla interdum enim vitae erat accumsan vestibulum. Etiam tempor diam ac metus iaculis laoreet. Nulla dictum finibus urna, a porttitor felis. Fusce venenatis sapien vitae ex molestie, at pellentesque dui varius. Duis dignissim lorem luctus leo gravida posuere.

Etiam accumsan erat ipsum. Praesent semper magna eget lectus euismod, at elementum massa consequat. Etiam et arcu mi. Mauris imperdiet, odio a tristique accumsan, velit orci cursus sem, id mollis sem magna nec ipsum. Nunc vitae dolor est. Proin tincidunt nulla in metus molestie mattis. Suspendisse non lectus tellus. In hac habitasse platea dictumst.

Vestibulum interdum massa at lorem maximus porta. Etiam rutrum tincidunt lectus non consectetur. Nunc massa mi, auctor a massa sed, vehicula mattis justo. Donec suscipit dolor ac est luctus vestibulum. Phasellus convallis lacinia odio, eu tempus enim volutpat eget. Vivamus rutrum ac lorem in consectetur. Suspendisse id ex ut nulla fermentum auctor. Etiam sed nulla est. Cras eu venenatis nisl. Donec id hendrerit risus. Suspendisse interdum ipsum placerat, commodo purus aliquet, tincidunt lorem. Sed faucibus pretium magna, vel sodales ex suscipit quis.`

function numberOfWords(text) {
    var arr = text.split(" ");
    return `number of words in input-text: ${arr.length}`;
}
console.log(numberOfWords(lorem));


function numberOfSpecificWord(text, word) {
    var arr = text.split(" ");
    var count = 0;
    var map = arr.map(a => {
        if (a == word) {
            count += 1;
        }
    })

    return `The word "${word}" occurs ${count} time(s) in the input-text.`
}
console.log(numberOfSpecificWord(lorem, "et"));



