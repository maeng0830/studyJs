// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근할 수 있는 arguments 객체에 저장된다.
// 매개변수의 기본 값을 임의의 값으로 지정해줄 수 있다. a = 1, b = 1
function add(a = 1, b = 1) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
}

add(1, 2, 3);
add();

// Rest Parameters
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1, 2, 3, 4, 5); // [ 3, 4, 5 ]