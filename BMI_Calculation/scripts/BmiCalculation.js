'use strict'


function jeffBmi(mass,height)
 {
    return mass/(height*height);
 }

 let j = jeffBmi(68,1.68);

  console.log(`Jeff's BMI is ${j}`)

function toddBmi(mass,height){

    return mass/(height*height);
}
 let t = toddBmi(65,1.72)

  console.log(`Todd's BMI is ${t}`) 

let bool

if( bool=j>t){
    console.log(`Jeff's BMI is higher than Todd [ is ${bool} ]`)
}
else{
    console.log(`Todd's BMI is heighr than Jeff [ is ${bool} ]`)
}
