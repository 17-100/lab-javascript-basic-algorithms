console.log("Hello");

//Iteration 1
let hacker1
hacker1 = "Oezge"
console.log(`The driver's name is ${hacker1}.`)

let hacker2;
hacker2 = "Oriane"
console.log(`The navigator's name is ${hacker2}.`)


console.log(hacker2.length);


//Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  //
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

//3.1
let i=0;
let stringName = ''
for(i=0; i< hacker1.length; i++) {
  stringName = stringName + ` ` + hacker1[i]
  }

console.log(stringName.toUpperCase())

//3.2
let y;
let stringName2 = ''
for(y=hacker2.length-1; y >= null; y--) {
  stringName2 = stringName2 + hacker2[y]
  }

console.log(stringName2)





