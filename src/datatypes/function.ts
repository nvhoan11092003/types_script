// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function() {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}


// 2. Function return
let num3: number; 
// function divide(): number {
//     return;
// }

// const showName = function(): string {
//     return;
// }

const func4 = function(): void{
    console.log("4");
}

const showError = function(): never {
    const err = new Error("Something went wrong!")
    throw err;
}

// 3. Function parameter
function divide(a: number, b: number = 1): number {
    return a / b;
}

console.log(divide(10,));


const showName = function(ho , ten , tendem?): string {
    return `${ho} ${ten} ${tendem
    }`;
}

// 4. Rest parameter

function showname(...name:string[]) {
    console.log(name);
    
    return `${name.join("   ")}`
}

let result12 = showname("hoan","long","quan","loc")
console.log(result12);
// 5. Callback

const numArr = [1,2,3,5,8,13] // Fibonacci
const we17309_map = function <T>(arr : T[] , callback : (item:T,index?: number)=> T )  {
    let temp: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        const newitem = callback(element,index)
        temp.push(newitem)
    }
    return temp
}

const result = we17309_map(numArr , (item,index) =>{
    console.log(index);
    return  item * item 
})

