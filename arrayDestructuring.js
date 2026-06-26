const arr = ["Playwright","Cyprus","selenium","Tools","Night Watch"]

const [toolOne, ,toolThree,toolFour] = arr //assign variable name for arra values

console.log(toolOne)
console.log(toolThree)
console.log(toolFour)



const num = [10,20,[30,40]]
const number = [10,20,78]


const [one,two,[three,four]] = num
console.log(one)
console.log(four)


const [ten,twenty,thirty = 30] = number
console.log(thirty)


function getValues()
{
    return [10,20]
}

const [ten,twenty] = getValues()

console.log(twenty)





