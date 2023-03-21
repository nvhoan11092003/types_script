const arr = [1, 2, 5, 7, 9, 3, 4, 6, 8];
const arrstr = ["1", "2", "5", "7", "9", "3", "4", "6", "8"];
console.log("Arr ban dau ", arr);
// short
function shortfake(arr, callback) {
    if (callback) {
        console.log("callback");
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - 1); j++) {
                if (callback(arr[i], arr[j]) > 0) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
    }
    else {
        console.log("ko callback");
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - 1); j++) {
                if (arr[i] < arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
    }
    console.log(arr);
}
shortfake(arr, (a, b) => { return a + b; });
// shortfake(arr)
// const we17309__map = function <T>(arr : T[] , callback : (item:T,index?: number)=> T )  {
//     let temp: T[] = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index]
//         const newitem = callback(element,index)
//         temp.push(newitem)
//     }
//     return temp
// }
// const result1 = we17309__map(numArr , (item,index) =>{
//     console.log(index);
//     return  item * item 
// })
