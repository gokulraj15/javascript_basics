// // 1. Create a function printEvenNumbers(arr) that prints
// // only even numbers from an array.

// function printEvenNumbers(arr)
// {
//     const result=[]
//     for (i of arr)
//     {
//         if(i%2==0){
//             result.push(i)

//         }

//     }
//     return result

// }

// const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(printEvenNumbers(arrNums))

// // 2. Traditional for loop - Print all numbers from 1 to 10
// // using a for loop.

// const value = 10
// for (let i =1;i<=value;i++)
// {
//     console.log(i)
// }

// // 3. Use for...of to loop through an array and print each
// // value.

// const arr = ["cypress", "playwright", "selenium","testcafe", "puppeteer", "webdriverio"]

// for (i of arr){
//     console.log(i)
// }

// // 4. Use for...in on this array and print the output:

// // Input: const arr = ["cypress", "playwright", "selenium",
// // "testcafe", "puppeteer", "webdriverio"]


// const arr = ["cypress", "playwright", "selenium",
// "testcafe", "puppeteer", "webdriverio"]

// arr.forEach((value,index) =>
// {
//   console.log(index,end = " ",value)
// })

// // 5. Loop through the array below and skip the string
// // selenium and print rest of the values

// const arr = ["cypress", "playwright", "selenium",
// "testcafe", "puppeteer", "webdriverio"]

// for (i of arr){
//     if(i=="selenium")
//     {
//         continue
//     }
//     console.log(i)
// }

// // 6. Loop through numbers from 1 to 20 and stop the loop
// // when you reach 10


// const value = 20
// for(let i=1;i<=value;i++){
//     if(i>10){
//         break
//     }
//     console.log(i)
// }

// // 7. Loop the array using for loop and print each value
// // one by one

// const arr = ["cypress", "playwright", "selenium",
// "testcafe", "puppeteer", "webdriverio"]
// for (i of arr){
//     console.log(i)
// }

// // Mini Challenge

// // Fix this Code : 'in' to 'of' in for
// const arr = ["a","b", "c"];

// for (const val of arr) {
// console.log(val) 
// }

// // 8. Create a function declaration named showTool that
// // prints "selenium" and call it before the function
// // definition.

// showTool()

// function showTool(){
//     console.log("Selenium")
// }

// // 9. Create a function expression named frameworkName that
// // prints "playwright“and call it before the function
// // definition.


// result()
// let result = function frameworkName(){
//     console.log("playwright")
// }
// // ReferenceError: Cannot access 'result' before initialization

// 10. Write 3 functions to print the same word
// "automation" using:

// • function declaration
// • function expression
// • arrow function


// showTool()
// function showTool(){
//     console.log("automation")
// }

// let result = function frameworkName(){
//     console.log("automation")
// }
// result()


// const frameworkName2 =()=> {
//     console.log("automation")
// }
// frameworkName2()

// //  *** Function declaration is shortest and which is hoisted one ***

// // 11. Add Elements to Array


// const tools = ["cypress", "playwright", "selenium"]

// tools.push("testcafe")
// tools.unshift("webdriverio")

// console.log(tools)


// // 12. Remove Elements from Array


// const tools = ["webdriverio", "cypress", "playwright",
// "selenium", "testcafe"]

// tools.pop()
// tools.shift()

// console.log(tools)



// // 13. Check whether "playwright" exists in the array.
// const tools = ["cypress", "playwright", "selenium","testcafe" ,"webdriverio"]

// const result1 = tools.some(temp =>temp === "playwright")
// if (result1){
//     console.log("yes existed")
// }

// // 14. Find the index of "selenium" in the array above.
// const tools = ["cypress", "playwright", "selenium","testcafe" ,"webdriverio"]

// tools.forEach((value,index) =>{
//     if (value == "selenium")
//     {
//         console.log(index)
//     }


// })

// // 15. Create a new array from index 0 to 2 using slice().
// const tools = ["cypress", "playwright", "selenium","testcafe" ,"webdriverio"]

// let result2 = tools.slice(0,3)
// console.log(result2)



// // 16. In the array below, remove 2 items starting from
// // index 1 and replace them with “nightwatch“ and “qtp”

// const tools = ["cypress", "playwright", "selenium","testcafe","webdriverio"]

// tools.splice(1,2,"“nightwatch“","“qtp”")

// console.log(tools)




// // 17. Use For of Loop through an array using arr.keys()
// // and print all indexes.
// const tools = ["cypress", "playwright", "selenium","testcafe","webdriverio"]

// for(i of tools.keys()){
//     console.log(i)
// }


// // Debug Challenge 1:

// // Fix the code:

// const arr = ["cypress", "playwright", "selenium"];
// console.log(arr.includes("playwright"));

// //case sensitive so it returns false for Playwright


// // Debug Challenge 2:

// // Question: Why is it printing indexes instead of values?

// const arr = ["cypress", "playwright", "selenium"];
// for (const value of arr.keys()) {
// console.log(value);
// }

// // we are used key function so printing key values

// // Debug Challenge 3:

// // Fix the code:

// const arr = ["cypress", "playwright", "selenium"];
// const newArr = arr.slice(1, 2);
// console.log(newArr);

// // Question: Does slice() change original array? - No it doesn't affect original array

