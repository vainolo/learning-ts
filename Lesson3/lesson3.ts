function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('1', '2')); // 12, not good
console.log(add(1, '2')); // 12, not good

function safer_add(a: number, b: number): number {
    return a + b;
}

console.log(safer_add(1, 2)); // 3
//console.log(safer_add('1', '2')); // 12, not good