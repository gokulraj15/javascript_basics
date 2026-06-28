// 1) Find the length of the string
const message = "Hello, JavaScript!"

console.log(message.length) //18


// 2) Searching in Strings
// Tasks:
// • Check if "JavaScript" exists using includes()
// • Find index of "fun" using indexOf()
// • Try searching "python" and observe output

const text = "Learning JavaScript is fun!"
console.log(text.includes("JavaScript"))  //true

console.log(text.indexOf("fun")) //23

console.log(text.search("python")) //-1. Not found so retuen -1


// 3) Replace & Clean

// • Remove extra spaces using trim()
// • Replace "World" with "JS"
// • Replace all "JavaScript" with "JS"

const dirtyText = " Hello World "
const replaceText = "I love JavaScript. JavaScript is powerful!"

console.log(dirtyText.trim())
console.log(dirtyText.replace("World","JS"))
console.log(replaceText.replaceAll("JavaScript","JS"))


// 4) Extracting Data
// Tasks:
// • Extract "Frontend" using slice()
// • Extract "Developer" using slice()
// • Extract last 4 characters using negative index

const sentence = "Frontend Developer"

console.log(sentence.slice(0,8))
console.log(sentence.slice(9,18))
console.log(sentence.slice(-4))


// 5) Character & Position
// Tasks:
// • Find character at index 0
// • Find character at last index
// • Find index of "g" using lastIndexOf()

const word = "Programming"

console.log(word.charAt(0))
console.log(word.slice(-1))
console.log(word.charAt(word.length-1))
console.log(word.lastIndexOf("g"))


// 6) Validation Checks
// Tasks:
// • Check if filename starts with "report“
// • Check if it ends with ".pdf"

const fileName = "report.pdf"

console.log(fileName.startsWith("report"))
console.log(fileName.endsWith(".pdf"))



// 7) Convert String to Array
// Tasks:
// • Convert into array using split()
// • Split into individual characters

const data1 = "apple,banana,mango"

console.log(data1.split())
console.log(data1.split(''))




// 8) Concatenation

// Tasks:
// • Combine using concat()
// • Combine using template literals (bonus)

const firstName = "Aravind"
const lastName = "Purusothaman"

console.log(firstName.concat(" ",lastName))
console.log(`${firstName} ${lastName}`)



// Tasks:
// Use Math.floor() on all numbers
// Use Math.ceil() on all numbers
// Use Math.round() on all numbers

const num1 = 4.7
const num2 = 4.3
const num3 = -4.7

console.log(Math.floor(num1))
console.log(Math.ceil(num2))
console.log(Math.round(num3))


// 2) Random Numbers

// Generate a random number between 0 and 1
// Generate a random number between 0 and 10
console.log(Math.ceil(Math.random()))
console.log(Math.round(Math.random()*10))


// 3) Find Maximum & Minium
// (10, 25, 5, 40, 15)

console.log(Math.min(10, 25, 5, 40, 15))
console.log(Math.max(10, 25, 5, 40, 15))



// Task: Mastering Array Destructuring in JavaScript
const fruits = ["apple", "banana", "cherry"]

const [firstFruit,secondFruit,thirdFruit] = fruits
console.log(firstFruit)
console.log(secondFruit)
console.log(thirdFruit)


// 2) Skipping Values
// const colors = ["red", "green", "blue", "yellow"];
// primaryColor → "red"
// secondaryColor → "blue" (skip "green")


// 2) Skipping Values
// primaryColor → "red"
// secondaryColor → "blue" (skip "green")

const colors = ["red", "green", "blue", "yellow"]
const [primaryColor, ,secondaryColor1,secondaryColor2] = colors
console.log(primaryColor,secondaryColor1)


// 3) Rest Operator
// firstNumber
// remainingNumbers (use rest operator)

const numbers = [10, 20, 30, 40, 50]

const [num11,num22,...restValues] = numbers
console.log(num11)
console.log(restValues)


// 4) Default Values
// Assign default values: c = 100, d = 200
const data = [1, 2]

const [a,b,c=100,d=200] = data
console.log(a,d)


// 5) Nested Array Destructuring

const user1 = ["Aravind", [25, "Developer"], "India"]

const [name2,[age1,role1],country] = user1
console.log(name2,age1,role1,country)


// 6) Function Return Destructuring

// Use destructuring to extract:
// username
// userAge

function getUser() {
return ["John", 30]
}

const [username1,userAge] = getUser()
console.log(username,userAge)


// Object Destructuring
// 1) Basic Destructuring

// Tasks:
// Extract name, age, and course
// Print all values

const student = {
name: "Aravind",
age: 22,
course: "JavaScript"
}

const {name,age,course} = student
console.log(name,age,course)



// 2) Renaming Variables
const student = {
name: "Aravind",
age: 22,
course: "JavaScript"
}

// Tasks:
// name → studentName
// age → studentAge
// course → studentCourse


const{name:studentName,age:studentAge,course:studentCourse} = student

console.log(studentName)
console.log(studentAge)
console.log(studentCourse)


// 3) Default Values

// Tasks:
// Username
// Email
// role (default value: "user")

const user = {
username2: "john_doe",
email: "john@example.com"
}

const {username2,email,role="user"} = user
console.log(username2,email,role)


// 4) Nested Object Destructuring

const employee = {
id: 101,
details: {
name3: "Sara",
department: "IT" }
}

const {id,details:{name3,department}} = employee

console.log(id)
console.log(name)
console.log(department)

// 5) Rest Operator

const product = {
id:1,
name: "Laptop",
price: 50000,
brand: "Dell"
}

const {name4,...otherDetails} = product
console.log(name4)
console.log(otherDetails)

// Spread Operator & Rest Parameter
// Tasks:
// Log all numbers passed into
// the function
// Call the function with at least
// 5 values


function collectNumbers(...nums) {

    console.log(nums)
}
collectNumbers(10,20,30,40,50)


// 2) Rest with Other Parameters
// 1) Rest Parameter Basics
// Tasks:
// Print a and b
// Print remaining numbers
// (rest)
// Call the function with at least 5 arguments

function processNumbers(a,b,...nums) {
console.log(a)
console.log(b)
console.log(...nums)
}
processNumbers(10,20,30,40,50)



// 3) Sum Using Rest
// Tasks:
// Return the sum of all numbers

function sumAll(...numbers) {
        let res = 0
        for (let i of numbers)
        {
            res += i
        }
        return res

}
console.log(sumAll(1, 2, 3, 4)) // Output: 10



// 3) Sum Using Rest

// Tasks:
// Call function using spread
// operator
// Print result

function multiply(a, b, c) {
    return a * b * c
}

const values = [2, 3, 4]
console.log(multiply(...values))










































