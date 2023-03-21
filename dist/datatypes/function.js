// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}
const func2 = function () {
    console.log("func2");
};
const func3 = () => {
    console.log("func3");
};
// 2. Function return
let num3;
// function divide(): number {
//     return;
// }
// const showName = function(): string {
//     return;
// }
const func4 = function () {
    console.log("4");
};
const showError = function () {
    const err = new Error("Something went wrong!");
    throw err;
};
// 3. Function parameter
function divide(a, b = 1) {
    return a / b;
}
console.log(divide(10));
const showName = function (ho, ten, tendem) {
    return `${ho} ${ten} ${tendem}`;
};
// 4. Rest parameter
function showname(...name) {
    console.log(name);
    return `${name.join("   ")}`;
}
let result12 = showname("hoan", "long", "quan", "loc");
console.log(result12);
// 5. Callback
const numArr = [1, 2, 3, 5, 8, 13]; // Fibonacci
const we17309_map = function (arr, callback) {
    let temp = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const newitem = callback(element, index);
        temp.push(newitem);
    }
    return temp;
};
const result = we17309_map(numArr, (item, index) => {
    console.log(index);
    return item * item;
});
