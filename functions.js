// //hoisted
// firstValue()
// function firstValue()
// {
//     console.log("firstValue");
// }


// //Not fully hoisted -- means we cant call that function stating stage

// const firstValue = function()
// {
//     console.log("firstValue");
// }

// firstValue()


const secondValue = () =>
{
    console.log("secondValue")
}
secondValue()
