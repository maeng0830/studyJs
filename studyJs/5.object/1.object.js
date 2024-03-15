// Object literal { key: value }
// new Object()
// Object.create()
// key - 문자, 숫자, 문자열, 심볼 (가능한 문자로 작성한다!)
// value - 원시값, 객체(함수)

let apple = {
    name: 'apple', // 가능한 문자로 작성
    'hello-bye': 'hello',
    0: 1,
    ['hello-bye1']: 'bye',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name);
console.log(apple['name']);

// 속성, 추가
apple.emoji = 'emoji';
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
