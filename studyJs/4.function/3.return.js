function add(a, b) {
    return a + b;
}

const result = add(1, 2);
console.log(result);

// return을 명시적으로 하지 않으면, 자동으로 undefined가 반환된다.
function print(num) {
    if (num < 0) {
        return;
    }
    
    console.log(num);
}

print(-1); 