//const helloWorld = () =>{
//    console.log('hello  world')
//}
//helloWorld()

//const callBack3 = (param="hello", param2="Your", param3="World") =>{
//    return `${param} ${param2} ${param3}`
//}
//
//console.log('!@-----callback-----@!')
//console.log('Hello World')
//console.log(callBack3('Hello', 'Your', 'World!!!!'))
//
//const restOperator =(...params)=>{
//    return params.join(' ')
//}
//
//
//console.log('!-----2 params-----@!')
//console.log(restOperator("Hello", "World"))
//console.log('!-----3 params-----@!')
//console.log(restOperator("Hello","Your", "World"))

let iterator = 0
function add(param0, param1=1) {
    let total = param0 + param1
    return total
}
const subtract = (param0, param1)=>{
    let total = param0 - param1
    return total
}

const multiply = (param0, param1=3)=>{
    let total = param0 * param1
    return total
}

//console.log('!@-----add-----@!')
//console.log(add(2,2))
//console.log(add(iterator))
//iterator = add(iterator)
//console.log(iterator)
//iterator = add(iterator)
//console.log(iterator)
//
//console.log('!@-----subtract-----@!')
//console.log(subtract(4,2))
//
//console.log('!@-----multiply-----@!')
//console.log(multiply(2))

const calculate = (param0, param1, callBackFunc)=>{
    let output = callBackFunc(param0,param1)
    console.log('!@-----output-----@!')
    console.log(output)
}

calculate(2,3,multiply)
