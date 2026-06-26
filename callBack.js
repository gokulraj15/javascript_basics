

// function add(value){
//     return  value + 10
// }

// // const result = add(30)
// // console.log(result)

// function print(callback){
//     const result = add(20)
//     console.log(result)
// }


// print(add)



function calculate(a,b,operation){
    return operation(a,b)
}


function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function multiply(a,b){
    return a*b

}
const result = calculate(20,30,multiply)
console.log(result)