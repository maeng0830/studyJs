// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 매우 좋지 않음!
// 상태변경이 필요한 경우에는, 새로운 상태(오브젝트, 값)를 만들어서 반환해야한다.
// 원시값 - 값에 의한 복사
// 객체값 = 참조에 의한 복사(메모리 주소)

// 예제1
function display(num) {
    num = 5;
    console.log(num);
}

const value = 4;
display(value);
console.log(value);

// 예제2
function displayObj(obj) {
    obj.name = 'Bob'; // 외부로부터 주어진 인자의 값을 내부에서 변경하지 말아야한다..
    console.log(obj);
}

const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

function changeName(obj) {
    return { ...obj, name: 'Bob' }; // 상태변경이 필요한 경우, 새로운 오브젝트를 만들어서 반환하자.
}