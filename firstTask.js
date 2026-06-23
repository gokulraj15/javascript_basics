//1. Print Basics
console.log("Hello, Welcome to JavaScript!")

//2. Comments Practice
// This is a comment

/*
This is a multi-line comment
*/


//3. Variables Practice
let name1= "Gokul Raj"
const age1 = 28
console.log(name1,age1)

//4. let vs const
let firstName1= "Gokul Raj"
firstName1 = "Raj"
const age2 = "28"
//age = "29"     Error Showing
console.log(firstName1,age2)

//5. Camel Case vs Pascal Case
let firstName= "Gokul Raj" //camelcase

function UserName(){ //PascalCase
    return firstName;
}
console.log(UserName())

//6. Data TypesIdentification
let string = "Gokul"
let number = 28
let boolean = true
let nullValue = null
let undefinedValue = undefined
let arrayValue1 = [12,13,14,15]
let objectValue = {name:"Gokul Raj",age:"28"}
let functionValue = function()
{
    return "Hello from function";
}

console.log(string)
console.log(number)
console.log(boolean)
console.log(nullValue)
console.log(undefinedValue)
console.log(arrayValue1)
console.log(objectValue)
console.log(functionValue())


//7. Array Practice
let arrayValue2 = ["Sachin","Rohit","Kholi","Jasprit","Pandta","Ishant","Kuldeep","Ashwin"]
for (i in arrayValue2){
    console.log(arrayValue2[i])

}

//8. Object Practice
let UserDetails = {
    name: "Gokul Raj",
    age: 28,
    email: "gokul@gmail.com",
    place:"Chanei",
    Skill:"Playwright"
}

console.log(UserDetails.name)
console.log(UserDetails["age"])
console.log(UserDetails["email"])
console.log(UserDetails["place"])
console.log(UserDetails["Skill"])

//9. Arithmetic Operators
let num1 = 25
let num2 = 70
let num3 = num1 + num2
console.log(num3,num1++,++num2,num2/num1,num1*num3)

//10. Function Practice
function checkValue()
{
    let val = "Playwright is a powerful automation tool"
    return val
}
console.log(checkValue())

//11. Comparison Operators
console.log(5=="5")
console.log(5==="5")
//true
//false


// 12. Logical Operators
let num5 = 5
console.log(num5<=10 && num5!=0)
console.log(num5==2 || num5!=5)
console.log(!(num5==5))

//13. Conditional Statement (IF):
let age = 19

if (age >= 18){
    console.log("Eligible to Vote")
}


//14. Conditional Statement (IF-ELSE):
let marks = 29

if (marks >=40){
    console.log("Pass")
}
else{
    console.log("Failed")
}


let score = 75


if(score>=90)
{
    console.log("Grade A")
}else if(score>=75)
{
    console.log("Grade B")

}else if(score>=50)
{
    console.log("Grade C")  
}
else{
    console.log("Failed")
}

