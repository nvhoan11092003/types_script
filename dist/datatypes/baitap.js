const arr = [1, 2, 5, 7, 9, 3, 4, 6, 8];
const arrstr = ["1", "2", "5", "7", "9", "3", "4", "6", "8"];
console.log("Arr ban dau ", arr);
// short
function shortfake(arr, a, b, callback) {
    if (a && b && callback) {
        const tem = callback(a, b);
        if (tem > 0) {
            console.log("tăng");
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < (arr.length - 1); j++) {
                    if (arr[i] < arr[j]) {
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                    }
                }
            }
        }
        else {
            console.log("giảm");
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < (arr.length - 1); j++) {
                    if (arr[i] > arr[j]) {
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                    }
                }
            }
        }
        console.log(tem);
    }
    else {
        console.log("tang");
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
// shortfake(arr, 1, 2, (a, b) => { return a - b })
shortfake(arr);
const we17309__map = function (arr, callback) {
    let temp = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const newitem = callback(element, index);
        temp.push(newitem);
    }
    return temp;
};
const result1 = we17309__map(numArr, (item, index) => {
    console.log(index);
    return item * item;
});
