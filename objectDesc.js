

// const tool = {
//     name : "playwright",
//     age :6,
//     comapny:"microsoft",
//     country:"India"
// }

// const {name,company,country} = tool
// const {age} = tool

// console.log(name)



const tool = {
    name : "playwright",
    age :6,
    comapny:"microsoft",
    country:"India",
    info : {
        birth_place:"Madurai"
    }
}

const {name,info:{birth_place}} = tool

console.log(birth_place)