/*
JS variable scope
global
function - var
block - let

LET allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used
VAR which defines a variable globally, or locally to an entire function regardless of block scope

*/



// function myfunc(){
//     var v = "myfunc_var"
//     let le = "myfunc_let"
//     console.log(v)
//     console.log(le)

//     // var will still console out 
//     for (let i = 0; i < 10; i++)
//     {
//         console.log(i)
//     }
//     // console.log(i)
// }

// myfunc()
// console.log(v)

// var cb1 = ()=>{console.log("cb1")}
// var cb2 = ()=>{console.log("cb2")}

// console.log("start...")
// setTimeout(cb1,1000)
// setTimeout(cb2,500)
// console.log("end...")
