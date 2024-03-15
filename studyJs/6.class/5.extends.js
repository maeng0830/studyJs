// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log('먹자!');
//     }

//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log('먹자!');
//     }

//     sleep() {
//         console.log('잔다');
//     }

//     play() {
//         console.log('놀자아~!')
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹자!');
    }

    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal {

}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }

    play() {
        console.log('놀자아~');
    }

    // 오버라이딩
    eat() {
        super.eat();
        console.log('강아지가 먹는다!');
    }
}

const dog = new Dog('검둥이', '엘리');
console.log(dog); // Dog { color: '검둥이', ownerName: '엘리' }
dog.eat(); // 먹자! -> 강아지가 먹는다!
dog.sleep();
dog.play();