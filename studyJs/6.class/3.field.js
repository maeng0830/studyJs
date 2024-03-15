// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
    #name;
    #type = '과일';

    constructor(name) {
        this.#name = name;
    }

    display = () => {
        console.log(`${this.#name}`);
    }
}

const apple = new Fruit('apple');
console.log(apple); // Fruit { display: [Function: display] } <- private 필드 제외됨.
// console.log(apple.#name); // error
// apple.#name = '오렌지'; // error
