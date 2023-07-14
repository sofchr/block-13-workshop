// Our objective is to write if/else statements that takes in the test value and print the strings expected 
//Start with "I am a string" is true and go from there
// Set up if/else conditional format

let var1 = "I am a string"


if (var1 === "I am a string"){
    console.log(true)
} else if (var1 === false){
     console.log("The boolean value false is falsy")
} else if (var1 === null) {
     console.log("The null value is falsy")
}  else if(var1 === undefined) {
     console.log("undefined is falsy")
} else if (var1 === 0) { 
    console.log("The number 0 is falsy (the only falsy number)")
}  else if (var1 === ""){
    console.log("The empty string is falsy(the only falsy string)")
}


//practice with Lisa below
// console.log(a)
// console.log(!true)
// console.log(!a)
// console.log(!!a)
// console.log(typeof a)


//using if/else statements that takes sum of two numbers and prints the corresponding result
// establish 2 variables
// establish sum = sum of 2 variables
// write if/else statements
//use concatenation to create the string to be printed

let num1 = 50
let num2 = 51
let sum = num1 + num2

if (sum > 100){
    console.log(sum + " is greater than 100")
} else if (sum > 0){
   console.log(sum + " is greater than 0")
} else if (sum === 0){
     console.log(sum + " is equal to 0")
} else if (sum < -1000){
     console.log(sum + " is less than -1000")
 }  else if (sum < 0){
    console.log(sum + " is a negative number")
} 

// create two variables
// js code that prints true if BOTH variables are greater than or equal to 5
//use if/else

 let val1 = 5
 let val2 = 6

//realized later that both val1 and val2 need to be compared to 5 for it to accurately be tested. this is the code I had in class with my partner so leaving as is!
 if (val1 && val2 >= 5) {
    console.log(true)}
    else {
        console.log(false)
}

//create a script tag comparing two sets of two vales that will print true if at least one of the pairs is truthy
// compare each pair with strictly equal
//use || to compare
//print true if at least one is true, else print false


let param1A = "cake"
let param1B = "cake"
let param2A = "pie"
let param2B = "pie"

if ( param1A === param1B || param2A === param2B) {
    console.log(true)
} else{
    console.log(false)
}
