// 변수에 값을 할당
var userId = 1;
var userName = 'Lee';
var user = { id: 1, name: 'Lee'}; // 객체
var users = [ { id: 1, name: 'Lee'}, { id: 2, name: 'Kim'}]; // 배열

// 변수 선언
//// 변수명에는 문자(특수문자X), 숫자, _, &을 포함할 수 있음. 단 숫자로 시작하면 안됨.
//// 변수명 및 함수명: camelCase / 클래스명 및 생성자: PascalCase
//// 변수명과 변수값은 key:value의 형태로 실행 컨텍스트에 저장됨.
//// 변수 선언은 선언과 초기화가 동시에 진행됨. 값을 할당하지 않아도, 해당 변수는 undifined라는 값으로 초기화됨.
var score;

// 변수 선언은 Runtime 이전 단계에서 먼저 실행된다.
// 자바스크립트는 인터프리터가 코드를 실행하기전에 코드 평가 단계를 거친다. 이 때 모든 선언문을 먼저 실행함.
console.log(scoreA); // ReferenceError가 발생하지 않음.
var scoreA;

// 변수 선언은 Runtime 이전에, 값의 할당은 Runtime 시점에 실행된다.
console.log(scoreB); // undifined
var scoreB;
scoreB = 80;
console.log(scoreB); // 80

console.log(scoreC); // undifined
var scoreC = 80; // 한 줄로 선언과 할당을 표현해도, 선언과 할당은 개별적으로 처리된다.
console.log(scoreC); // 80

console.log(scoreD); // undifined
scoreD = 80;
var scoreD;
console.log(scoreD); // 80