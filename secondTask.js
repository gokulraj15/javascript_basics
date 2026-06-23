// 1. Create a function printEvenNumbers(arr) that prints
// only even numbers from an array.

function printEvenNumbers(arr)
{
    const result=[]
    for (i of arr)
    {
        if(i%2==0){
            result.push(i)

        }

    }
    return result

}

const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(printEvenNumbers(arrNums))

// 2. Traditional for loop - Print all numbers from 1 to 10
// using a for loop.

const value1 = 10
for (let i =1;i<=value1;i++)
{
    console.log(i)
}

// 3. Use for...of to loop through an array and print each
// value.

const arr1 = ["cypress", "playwright", "selenium","testcafe", "puppeteer", "webdriverio"]

for (i of arr1){
    console.log(i)
}

// 4. Use for...in on this array and print the output:

// Input: const arr = ["cypress", "playwright", "selenium",
// "testcafe", "puppeteer", "webdriverio"]


const arr2 = ["cypress", "playwright", "selenium",
"testcafe", "puppeteer", "webdriverio"]

arr2.forEach((value,index) =>
{
  console.log(index,end = " ",value)
})

// 5. Loop through the array below and skip the string
// selenium and print rest of the values

const arr3 = ["cypress", "playwright", "selenium",
"testcafe", "puppeteer", "webdriverio"]

for (i of arr3){
    if(i=="selenium")
    {
        continue
    }
    console.log(i)
}

// 6. Loop through numbers from 1 to 20 and stop the loop
// when you reach 10


const value = 20
for(let i=1;i<=value;i++){
    if(i>10){
        break
    }
    console.log(i)
}

// 7. Loop the array using for loop and print each value
// one by one

const arr4 = ["cypress", "playwright", "selenium",
"testcafe", "puppeteer", "webdriverio"]
for (i of arr4){
    console.log(i)
}

// Mini Challenge

// Fix this Code : 'in' to 'of' in for
const arr5 = ["a","b", "c"];

for (const val of arr5) {
console.log(val) 
}

// 8. Create a function declaration named showTool that
// prints "selenium" and call it before the function
// definition.

showTool()

function showTool(){
    console.log("Selenium")
}

// 9. Create a function expression named frameworkName that
// prints "playwright“and call it before the function
// definition.


results()
let results = function frameworkName(){
    console.log("playwright")
}
// ReferenceError: Cannot access 'result' before initialization

// 10. Write 3 functions to print the same word
// "automation" using:

// • function declaration
// • function expression
// • arrow function


showTool()
function showTool(){
    console.log("automation")
}

let result = function frameworkName(){
    console.log("automation")
}
result()


const frameworkName2 =()=> {
    console.log("automation")
}
frameworkName2()

//  *** Function declaration is shortest and which is hoisted one ***

// 11. Add Elements to Array


const tools11 = ["cypress", "playwright", "selenium"]

tools11.push("testcafe")
tools11.unshift("webdriverio")

console.log(tools11)


// 12. Remove Elements from Array


const tools12 = ["webdriverio", "cypress", "playwright",
"selenium", "testcafe"]

tools12.pop()
tools12.shift()

console.log(tools12)



// 13. Check whether "playwright" exists in the array.
const tools13 = ["cypress", "playwright", "selenium","testcafe" ,"webdriverio"]

const result1 = tools13.some(temp =>temp === "playwright")
if (result1){
    console.log("yes existed")
}

// 14. Find the index of "selenium" in the array above.
const tools14 = ["cypress", "playwright", "selenium","testcafe" ,"webdriverio"]

tools14.forEach((value,index) =>{
    if (value == "selenium")
    {
        console.log(index)
    }


})

// 15. Create a new array from index 0 to 2 using slice().
const tools15 = ["cypress", "playwright", "selenium","testcafe" ,"webdriverio"]

let result2 = tools15.slice(0,3)
console.log(result2)



// 16. In the array below, remove 2 items starting from
// index 1 and replace them with “nightwatch“ and “qtp”

const tools16 = ["cypress", "playwright", "selenium","testcafe","webdriverio"]

tools16.splice(1,2,"“nightwatch“","“qtp”")

console.log(tools16)




// 17. Use For of Loop through an array using arr.keys()
// and print all indexes.
const tools17 = ["cypress", "playwright", "selenium","testcafe","webdriverio"]

for(i of tools17.keys()){
    console.log(i)
}


// Debug Challenge 1:

// Fix the code:

const arr6 = ["cypress", "playwright", "selenium"];
console.log(arr.includes("playwright"));

//case sensitive so it returns false for Playwright


// Debug Challenge 2:

// Question: Why is it printing indexes instead of values?

const arr7 = ["cypress", "playwright", "selenium"];
for (const value of arr7.keys()) {
console.log(value);
}

// we are used key function so printing key values

// Debug Challenge 3:

// Fix the code:

const arr = ["cypress", "playwright", "selenium"];
const newArr = arr.slice(1, 2);
console.log(newArr);

// Question: Does slice() change original array? - No it doesn't affect original array

// 18. total number of elements

const tools = ["cypress", "playwright", "selenium“,'testcafe', 'webdriverion"]
console.log(tools.length+1)

// 19. Merge all names into one array and print it
const teamA = ["Rahul", "Arjun"]
const teamB = ["Kiran", "Vikram"]
const teamC = ["Sneha", "Divya"]

const result3 = teamA.concat(teamB,teamC)
console.log(result3)

// 20. Add " Language" to each item

const languages = ["JavaScript", "Python", "Java"]

const result4 = languages.map(temp =>temp + " Language")
console.log(result4)

// 21. Add " INR" to each value

const prices = [100, 200, 300]
const priceCurr = prices.map(temp => temp + " INR")
console.log(priceCurr)

// 22. Filter marks greater than 50

const marks = [45, 67, 89, 30, 55]
const Value2 = marks.filter(temp =>temp>50)
console.log(Value2)

// 23. Find price greater than 150

const price = [100, 200, 300, 400, 500]
const Value3 = price.filter(temp =>temp>150)
console.log(Value3)

// 24. Sort the array values ascending and descending

const students = ["Zara", "Arun", "Mohan", "Deepa"]
students.sort()
console.log(students)


// 25. Reverse the array values

const prices1 = [100, 200, 300, 400, 500]
const reverseArr = prices1.slice().reverse(). //tried to reverse using slice without affect original array
prices.reverse()
console.log(reverseArr)
console.log(reverse)


// 26. Remove nested arrays and change into single array

const arr8 = [1, 2, [3, 4, [5, 6, [7, 8]]]]
const changeNest = arr8.flat(Infinity)


// 27. i) Check if all are above 18

// ii) Check if any are above 28

const ages = [18, 22, 25, 30]
const checkRange1 = ages.every(temp=>temp>18)
const checkRange2 = ages.some(temp=>temp>28)

console.log(`All are greater than 18 ?- ${checkRange1}    Any are greater than 28 ? - ${checkRange2}`)

// 28. Map vs Filter vs Find

const values = [5, 15, 25, 35, 45];

// Task:
// • multiply by 3
// • values > 20
// • first matching value > 20


const multiPly = values.map(tem => tem *3)
const filterValues = values.filter(temp => temp>20)
const findValue = values.find(temp => temp>20)

console.log(multiPly)
console.log(filterValues)
console.log(findValue)


// Debug Challenge 4:

// Fix the code:

const mark = [40, 60, 80];
const passed = mark.filter(m => m > 50)
console.log(passed);

// Output: [60, 80]

// Debug Challenge 5:

// Fix the code:

const values4 = [10, 20, 30, 40];

const result5 = values4.filter( temp => temp > 20)
console.log(result.length)

// find returns single first matching value so we should use filter


// Debug Challenge 6:

// Fix the code:

const arr9 = [1, [2, [3, 4]]]

console.log(arr9.flat(Infinity)) //added infinity

// Expected output: [1, 2, 3, 4]


// 29. Map vs Filter vs Find

const values3 = [5, 15, 25, 35, 45]

// Task:
// • multiply by 3
// • values > 20
// • first value > 20

const multiPly1 = values3.map(tem => tem * 3)
const filterValues1 = values3.filter(temp => temp>20)
const findValue1 = values3.find(temp => temp>20)

console.log(multiPly1)
console.log(filterValues1)
console.log(findValue1)



// 30. Loop using for...in and print only values

const laptop = {
brand: "Dell",
price: 80000,
ram: "16GB"
}

for (i in laptop){
    console.log(laptop[i])
}


// 31. Print all keys of laptop using for of loop

const laptop1 = {
brand: "Dell",
price: 80000,
ram: "16GB"
}

for(let [i] of Object.entries(laptop1))
    {
    console.log(i)
}


// 32. Print all keys of laptop using for of loop
// repated 31st question


// 33. Convert Object to Array

const student = {
name: "Divya",
marks: 85,
grade: "A"
}
const res = []
for(i in student){
   res.push([i,student[i]])
}

console.log(res)


// 34. Merge the two objects

const o1 = { a: 10 }
const o2 = { b: 20 }

const mergedVal = Object.assign(o1,o2)
console.log(mergedVal)


// 35. Remove the property age and print it

const profile = {
name: "Karthik",
age: 29
}

delete profile.age
console.log(profile)


// Fix the code:
const device = {
name: "Tablet"
}

device.brand = "Samsung"
console.log(device)







