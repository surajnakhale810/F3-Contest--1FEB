let result = document.getElementById("result")

fetch("https://dummyjson.com/products").then((response)=>{
return response.json()
}).then((data)=>{
// console.log(data.products[1])
let fData = data.products
fData.map((products)=>{
    let row = document.createElement("tr")
row.innerHTML = `<div class="display">
<div><img src="${products.images[0]}"/></div><div class ="side">Title : ${products.title}</div><div class ="side">Brand : ${products.brand}</div><div class ="side">Price : $${products.price}</div><div class ="side">Rating : ${products.rating}</div><div class ="side">Stock : ${products.stock}</div></div>
`
result.appendChild(row)
})
})