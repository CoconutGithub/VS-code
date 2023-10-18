const 함수 = function () {
    console.log('함수 내부의 코드입니다 ... 1') 
    console.log('함수 내부의 코드입니다 ... 2') 
    console.log('함수 내부의 코드입니다 ... 3') 
    console.log('')
    }
함수()// 함수를 호출 
console.log(typeof (함수)) 
console.log(함수)

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}
console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`)
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`)
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`)
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`)

function min(array) {
    let output = array[0]
    for (const item of array) {// 현재 output보다 더 작은 item이 있다면 
        if (output > item) {// output의 값을 item으로 변경
            output = item 
        }
    }
    return output 
}
const testArray = [52, 273, 32, 103, 275, 24, 57]     
console.log(`${testArray} 중에서`)     
console.log(`최솟값 = ${min(testArray)}`)


// 나머지 매개변수를 사용한 함수 만들기
function min(...items) {// 매개변수 items는 배열처럼 사용합니다.
    let output = items[0]
    for (const item of items) {
        if (output > item) {
        output = item
        }
    }
    return output
}
console.log('min(52, 273, 32, 103, 275, 24, 57)')
console.log(`= ${min(52, 273, 32, 103, 275, 24, 57)}`)

function min(first, ...rests) {
    let items
    if (Array.isArray(first)) {// 매개변수의 자료형에 따라 조건 분기하기 
        output = first[0]
        items = first
    } 
    else if (typeof(first) === 'number') {
        output = first
        items = rests 
    }
    for (const item of items) {// 이전 절에서 살펴보았던 최솟값 구하는 공식 
        if (output > item) { 
            output = item
        } 
    }
    return output 
}
console.log(`min(배열): ${min([52, 273, 32, 103, 275, 24, 57])}`)
console.log(`min(숫자, ...): ${min(52, 273, 32, 103, 275, 24, 57)}`)
//만약 선언을 $min(52,(273, 32, 103, 275, 24, 57))로 선언하면 items에 57밖에 들어가지 않음

function isLeapYear(year=new Date().getFullYear()) {
    console.log(`매개변수 year: ${year}`)
    return (year % 4 === 0) && (year % 100 !== 0) ||(year % 400 === 0)
}
console.log(`올해는 윤년일까? === ${isLeapYear()}`)

function callThreeTimes(callback) {//callback함수로 함수를 매개변수로 넘김
    for (let i = 0; i < 3; i++) { callback(i)
    } }
    callThreeTimes(function (i) {console.log(`${i}번째 함수 호출`) })

let numbers = [273, 52, 103, 32, 57]
numbers = numbers.map(function (value, index, array) {return value * value})
//매개변수로 value, index, array를 갖는콜백함수를사용
numbers.forEach(console.log)

setTimeout(() => {
    console.log('1초 후에 실행됩니다')
    }, 1 * 1000)
let count = 0 
setInterval(() => {
    console.log(`1초마다 실행됩니다(${count}번째)`) 
    count++
}, 1 * 1000)

선언적함수()
function 선언적함수 () {
    console.log('1번째 선언적 함수입니다.')
}
function 선언적함수 () {
    console.log('2번째 선언적 함수입니다.')
}

//반복문으로 풀력하는 것과 같은 형태로 forEach함수 이용해서 출력
const array = ['사과', '배', '귤', '바나나'] 
console.log('# for in 반복문')
array.forEach(function(value,index){console.log(`${index}`)})
console.log('# for of 반복문') 
array.forEach(function(value,index){console.log(`${value}`)})