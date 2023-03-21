const products = [
    {id: 1,name: "san pham 1", price: 100},
    {id: 2,name: "san pham 2", price: 100},
    {id: 3,name: "san pham 3", price: 100},
    {id: 4,name: "san pham 4", price: 100},
    {id: 5,name: "san pham 5", price: 100},
]

const table = document.querySelector("#table")
let content = ""
products.forEach(item => {
    console.log(item.id);
    // Imperative
    // const tr = document.createElement("tr")
    // const name = document.createElement("td")
    // name.innerHTML = item.name
    // const price = document.createElement("td")
    // price.innerHTML = item.price
    // tr.appendChild(name)
    // tr.appendChild(price)
    // table.appendChild(tr)

    // HTML string
    content += `
    <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button data-id="${item.id}" class="delete">Xoa</button></td>
        <td><button  onClick="alert("nhuw cc")" class="delete">log id</button></td>
    </tr>

    `
})

function logid(id) {
    console.log(id)
}

table.innerHTML = content

const btns = document.querySelectorAll(".delete")
btns.forEach(btn => {
    btn.onclick = function() {
        const id = this.dataset.id
        console.log(id);
    }
})