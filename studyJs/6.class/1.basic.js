// 객체를 손쉽게 만들 수 이는 템플릿
// 1. 생성자 함수
// 2. 클래스

class Fruit {
    // 생성자: new 키워드로 호출되는 함수
    constructor(name) {
        this.name = name;
    }

    // function 키워드 사용X
    display = () => {
        console.log(`${this.name}`);
    }
}

const apple = new Fruit('apple');
const orange = new Fruit('orange');
console.log(apple);
console.log(orange);
apple.display();
orange.display();