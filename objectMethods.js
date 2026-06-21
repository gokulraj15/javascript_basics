
const tool = {
  name : "Playwright",
  age  :6,
  company : "Microsoft",
  country : "USA"

}

tool.language = "javascript" //add a new property
tool.name = "Cyprus" //update a value

delete tool.company //delete an existing property
console.log(tool)

for (const key_value in tool)
{
    console.log(tool[key_value])
    //Undefined - console.log(tool.key). - Undefined
}
Not Working { for of }
for (const key_value of tool)
{
    console.log(tool[key_value])
    //Undefined - console.log(tool.key). - Undefined
}


for (const key of Object.keys(tool))
{
    console.log(key)
    //Undefined - console.log(tool.key). - Undefined
}


for (const values of Object.values(tool))
{
    console.log(values)
    //Undefined - console.log(tool.key). - Undefined
}


// object.freeze(var) - we cant modify anything inside Dicts
const tools = {
  name : "Playwright",
  age  :6,
  company : "Microsoft",
  country : "USA"

}
Object.freeze(tools)

tool.language = "javascript"
tool.name = "Selenium"

delete tool.age

console.log(tool)

// Object.seal(var) - only update
Object.seal(tools)
tool.name = "Selenium"
console.log(tool)

//Concate Two Objects
const obj1 = {a:10}
const obj2 = {b:20}

const result = Object.assign(obj1,obj2)
console.log(result)


