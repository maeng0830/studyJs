// 일급 객체: 일반 객체처럼 모든 연산이 가능한 것
//// 함수의 매개변수로 전달
//// 함수의 반환 값
//// 할당 명령문
//// 동일 비교 대상
// 일급 함수: 함수가 일반 객체처럼 모든 연산이 가능한 것

// 고차 함수: 인자로 함수를 받거나(콜백함수), 함수를 반환하는 함수

// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 콜백함수는 고차함수 calculator 내부에서 필요한 순간에 호출된다.
function calculator(a, b, action) {
    let result = action(a, b);
    console.log(result);
    return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);