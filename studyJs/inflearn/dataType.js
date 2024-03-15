// JS의 데이터타입
//// 원시: number, string, boolean, undefined, null, symbol
//// 객체: 객체, 함수, 배열 등

// number
//// 모든 숫자를 실수 처리
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5
//// 특별한 값
console.log(10 / 0); // Infinity(양의 무한대)
console.log(10 / -0); // -Infinity(음의 무한대)
console.log(1 * 'String') // NaN

// string
//// 문자열 표현
var string;
string = '문자열'; // 가장 일반적인 표현
string = "문자열";
string = `문자열`; // 템플릿 리터럴을 위한 표현식
//// 템플릿 리터럴 예시
////// 멀티라인 문자열
var template = `템플릿 리터럴은
이스케이프 없이도 멀티라인 문자열이 가능하다.`;
////// 표현식 삽입
var first = 'Lee';
var last = "Ung-mo";
console.log(`I am ${first} ${Ung-mo}`); // I am Lee Ung-mo
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3;

// 동적 타입
//// JS의 변수는 선언 시에 타입이 결정되지 않으며, 변수에 할당된 값에 의해 타입이 결정된다.