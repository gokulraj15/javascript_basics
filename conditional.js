

let a = 2

if(a>5){
    console.log(`${a} is greater than 5`)
}else if(a==5){
    console.log(`${a} is equal to 5`)
}
else{
    console.log(`${a} is less than 5`)
} 


switch(a){

    case 1:
        console.log(`${a}is equal to 1`)
        break;
    case 2:
        console.log(`${a} is equal to 2`)
        break;
    case 3:
        console.log(`${a} is equal to 3`)
        break;
    default:
        console.log(`${a} is greater than 3`)
}