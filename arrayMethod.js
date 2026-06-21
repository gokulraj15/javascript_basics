
/* Important for Automation
push
unshift
shift
includes
indexOf
concat
reverse
flat
for each
slice
splice
map
join
filter
find every
findIndex
sort
isArray
keys
values
entries
*/

const automationTool = ["Playwright","Cyprus","Selenium"]

//array.push()
automationTool.push("Web Driver","TestCafe")
console.log(automationTool)

//array.pop()
automationTool.pop() //remove last value only
console.log(automationTool)

//array.unshift()
automationTool.unshift("Power Apps")
console.log(automationTool)

//array.shift()
automationTool.shift()
console.log(automationTool)

//array.includes()
console.log(automationTool.includes("Power Apps"))

if (automationTool.includes("Selenium"))
{
    console.log("Selenium is included in the array.")
}

//array.indexOf()
console.log(automationTool.indexOf("Selenium"))

//array.concat()
const OSSysytems = ["Windows","Macos","Linux"]

const result1 = automationTool.concat(OSSysytems,"Unix",90,"89")
console.log(result1)

//push()
const result2 = automationTool.push(OSSysytems)
console.log(automationTool)

//array.reverse()
automationTool.reverse()
console.log(automationTool)

//array.splice() - To add value in particular position and move others next index
// array.splice(starting index,delete count,add values...)
// changed directly on main array values

automationTool.splice(1,0,"VS Code","GitHub")
console.log(automationTool)

//array.flat()

const nestedArray = [1,2,3,[4,5,[6,7],8,9,[11,12,[13,14]]]]
console.log(nestedArray.flat(2))
console.log(nestedArray.flat(Infinity))

//array.forEach()

automationTool.forEach((v,i,a )=>{
    console.log(`value: ${v} Index: ${i} Array:${a}`)
})



//array.slice(starting index,ending index). -- we can use variable to change values and get but not directly affect main array

console.log(automationTool.slice(0,1))

// array.map() -- It take all value one by one and store in new array

const num2 =[10,20,30,40,50]

const results3 = num2.map(val =>val *2)
console.log(results3)

const upperCase = automationTool.map(ch => ch.toUpperCase())
console.log(upperCase)

//array.filer()
const num3 = [29,30,40,50,10]
const result4 = num3.filter(value => value>30)
console.log(result)

// array.find() - print very first element not all
const num4 = [29,30,40,50,10]
const results5 = num4.find(val=>val>30)
console.log(results5)

// array.every() - check all the values and return true if all pass or false if any fail
const automationTool = ["Playwright","Cyprus","Selenium"]
const resultss = num.every(temp =>temp>10)
console.log(resultss)

//array.some()-  check all values it returns true if any one matches condition
const results = num.some(temp =>temp>10)
console.log(resultss)

//array.findIndex() -- It take first values matches
const num = [29,30,40,50,10]
const result = num.findIndex(temp =>temp>30)
console.log(result)

//array.sort()
const num = [67,29,30,40,50,10]
const result = num.sort((a,b) => a-b)
console.log(result)

//array.reduce()
const num = [29,30,40,50,10]
const result = num.reduce((a,b) => a+b,1)
console.log(result)

//array.isArray() - True when variable stored in Array
const num2 = [29,30,40,50,10]
const value = 50 //false

console.log(Array.isArray(num2))

const num1 = [10,20,30,40,10,50,10]
console.log(num1.lastIndexOf(10))


// To get only keys


for(const key of automationTool.keys())
{
    console.log(key)
}

//To get values
for(const value of automationTool.values())
{
    console.log(value)
}

//To get All value with key values
for(const allvalue of automationTool.entries())
{
    console.log(allvalue)
}


