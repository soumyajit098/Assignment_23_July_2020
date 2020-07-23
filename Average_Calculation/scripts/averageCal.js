'use strict'

function heathAvg(a,b,c){
    return (a+b+c)/3;
}

let x = heathAvg(89,120,103)
console.log('The avg score by Heath : ' + x)

function zaneAvg(a,b,c){
    return (a+b+c)/3;
}

let y = zaneAvg(116,94,123)
console.log('The avg score by Zane : ' + y)

//ternary operator

x > y ?console.log(` Heath scores more than Zane and his score is ${x}`) : console.log(`Zane scores more than Heath and his score is ${y}`)

let p = heathAvg(92,110,98)
let q = zaneAvg(118,82,94)

console.log('.............ANOTHER GAME BY CHANGING THE SCORES.............')

if(p>q){
    console.log(`Heath scores more than Zane and his score is ${p} `)
}
else if(q>p){
    console.log(`Zane scores more than Heath and his score is ${q} `)
}else{
    console.log('Match Drawn')
 }

function mariaAvg(a,b,c){
    return (a+b+c)/3;
}

let z = mariaAvg(97,134,105)

console.log(`The avg score of Maria is ${z}`)

if( x>y && x>z ){
    console.log('Heath Won the game')
}
else if( y>z && y>x ) {
    console.log('Zane won the game')
} else {
    console.log('Maria won the game')
}