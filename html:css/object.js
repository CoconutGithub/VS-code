const student = {}
// 동적 객체 속성 추가
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'
//동적 객체 속석 제거
delete student.장래희망
console.log(JSON.stringify(student, null, 2))

//JSON.srtringify - 값이나 객체를 문자열 형태로 변환
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)])); 
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })); 
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));

//JSON.parse - 구문을 분석하고 결과에서 값이나 객체 생성
const json = '{"result":true, "count":42}'; 
const obj = JSON.parse(json); 
console.log(obj.count); 
console.log(obj.result);
console.log(obj);

const test = { 
    a: function () {//익명함수 선언
        console.log(this) //정보 출력
    },
    b:()=>{//화살표 함수 선언
        console.log(this) //원하는 정보 출력 불가
    }
}
test.a()
test.b()

Number.prototype.power = function (n = 2) {
    //prototype객체에 속성과 메소드를 추가하면 모든객체에서 메소드 사용가능
    return this.valueOf() ** n
}
const a = 12
console.log('a.power():', a.power())
console.log('a.power(3):', a.power(3))
console.log('a.power(4):', a.power(4))

String.prototype.contain = function (data) {
    return this.indexOf(data) >= 0
}
Array.prototype.contain = function (data) {
    return this.indexOf(data) >= 0
}
// String 객체의 contain() 메소드를 사용합니다.
const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕'))
console.log('없는데 in 안녕하세요:', a.contain('없는데'))
// Array 객체의 contain() 메소드를 사용합니다.
const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57, 52]:', b.contain(273))
console.log('0 in [273, 32, 103, 57, 52]:', b.contain(0))

const data = [
    {
    name: '혼자 공부하는 파이썬', price: 18000,
    publisher: '한빛미디어'
    },
    {
    name: 'HTML5 웹 프로그래밍 입문', price: 26000,
    publisher: '한빛아카데미'
    }
]
    // 자료를 JSON으로 변환합니다. 
    const json = JSON.stringify(data) 
    console.log(json)
    // JSON 문자열을 다시 자바스크립트 객체로 변환합니다. 
    console.log(JSON.parse(json))