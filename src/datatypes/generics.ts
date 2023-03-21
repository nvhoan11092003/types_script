





const numArr1 = [1,2,3,5,8,13] // Fibonacci
const stringArr : Array<string> = ["hoan","loc","quân"]


const we17309_map1 = function <T>(arr : T[] , callback : (item:T,index?: number)=> T )  {
    let temp: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        const newitem = callback(element,index)
        temp.push(newitem)
    }
    return temp
}

// const result1 = we17309_map(numArr , (item,index) =>{
//     console.log(index);
//     return  item  * item
// })

// console.log(result1);
