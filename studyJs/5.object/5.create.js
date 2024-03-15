// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}`);
//     },
// }

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}`);
//     },
// }

// 생성자 함수(첫글자 대문자)
function Fruit(name) {
    this.name = name;
    this.display = () => {
        console.log(`${this.name}`)
    }

    return this; // 생략가능
}

const apple = new Fruit('apple');
const orange = new Fruit('orange');

console.log(apple);
console.log(orange);