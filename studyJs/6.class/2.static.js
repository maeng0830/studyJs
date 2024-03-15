// static
class Fruit {
    // 클래스 레벨의 속성
    static MAX_FRUITS = 4;

    // 생성자: new 키워드로 호출되는 함수
    constructor(name) {
        this.name = name;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this 참조 불가능
        return new Fruit('banana');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}`);
    }
}

const banana = Fruit.makeRandomFruit();
const apple = new Fruit('apple');
const orange = new Fruit('orange');
console.log(banana); // Fruit { display: [Function: display], name: 'banana' }
console.log(apple); // Fruit { display: [Function: display], name: 'apple' }
console.log(orange); // Fruit { display: [Function: display], name: 'orange' }
console.log(Fruit); // [class Fruit] { MAX_FRUITS: 4 }
banana.display();
apple.display();
orange.display();