// 접근자 프로퍼티(Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // get 키워드를 사용하여 접근자 프로퍼티로 만들 수 있다.
    // 함수지만 속성처럼 접근할 수 있다.
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    // set 키워드를 사용하여 접근자 프로퍼티로 만들 수 있다.
    // 함수지만 속성처럼 접근할 수 있다.
    set fullName(value) {
        console.log(value);
    }
}

const student = new Student('수지', '김');
console.log(student.fullName); // 김 수지. get fullName() 호출

student.fullName = '김 철수'; // set fullName() 호출
console.log(student.fullName);