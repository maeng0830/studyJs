// 산술 연산자
//// 단항연산자 +는 숫자 타입이 아닌 피연산자에 적용하면, 피연산자를 숫자 타입으로 변환한 값을 생성해서 반환한다.
 var x = '1';
 console.log(+x); // 1
 console.log(x); // "1"
 //// 단항연산자 -는 부호 반전, 숫자 타입이 아닌 피연산자를 숫자 타입으로 변환
 -(-10); // 10
 -'10'; // -10
 -true; // -1

// 비교 연산자
//// 동등 비교(==), 부동등 비교(!=) 연산자는 암묵적 타입 변환을 통해 좌항과 우항의 타입을 일치시키고 비교를 실시한다.
//// 일치 비교(===), 불일치 비교(!===) 연산자는 암묵적 타입 변환 없이 비교를 실시한다.
//// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN // false
Number.isNaN(NaN) // true
Number.isNaN(10) // false

// typeof 연산자
typeof '' // "string"
typeof 1 // "number"
typeof NaN // "number"
typeof true // "boolean"
typeof undefined // "undifined"
typeof Symbol() // "symbol"
typeof null // "object"
typeof [] // "object"
typeof {} // "object"
typeof new Date() // "object"
typeof /test/gi // "object"
typeof function() {} // "function"
//// typeof null이 "object"를 반환함을 주의
var foo = null;
typeof foo === null; // false
foo === null; // true
//// 선언하지 않은 식별자에 대한 typeof의 반환 값은 "undefined"이다.
typeof undeclared; // "undefined"
