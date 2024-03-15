// 암묵적 타입변환

//// 문자열 타입으로 암묵적 타입변환이 발생하는 경우
1 + '2' // "12"
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"
////// 문자열 타입으로 암묵적 타입변환이 수행되는 과정
0 + '' // "0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"
true + '' // "true"
false + '' // "false"
null + '' // "null"
undefined + '' // "undefined"
(Symbol()) + '' // TypeError
({}) + '' // "[object Object]"
Math + '' // "[object Math]"
[10, 20] + '' // "10,20"
(function(){}) + '' // "function(){}"
Array + '' // "function Array() { [native code] }"

//// 숫자 타입으로 암묵적 타입변환이 발생하는 경우
1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN
'1' > 0 // true
////// 숫자 타입으로 암묵적 타입변환이 수행되는 과정
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN
+true // 1
+false // 0
+null // 0
+undefined // NaN
+Symbol() // TypeError
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN

//// 불리언 타입으로 암묵적 타입변환이 발생하는 경우
if ('') console.log('1');
if (true) console.log('2'); // 2
if (0) console.log('3');
if ('str') console.log('4'); // 4
if (null) console.log('5');
////// Falsy 값: false, undefined, null, 0, -0, NaN, ''
////// Truthy 값: 그 외


// 명시적 타입 변환
//// 문자열 타입으로 명시적 변환
////// 1. String 새성자 함수를 new 연산자 없이 호출하는 방법
////// 2. Object.prototype.toString 메서드를 사용하는 방법
////// 3. 문자열 연결 연산자를 이용하는 방법
//// 숫자 타입으로 명시적 변환
////// 1. Number 새서자 함수를 new 연산자 없이 호출하는 방법
////// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 가능)
////// 3. + 단항 산술 연산자를 이용하는 방법
////// 4. * 산술 연산자를 이용하는 방법
//// 불리언 타입으로 변환
////// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
////// 2. ! 부정논리 연산자를 두번 사용하는 방법