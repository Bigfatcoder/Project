const productlist = document.getElementById("js_product");
console.log(productlist); //Kiem tra xem da lay duoc the productlist hay chua

fetch("../assets/js/Test.json")
  .then((res) => res.json())
  .then((json) => {
    
    console.log(json); //Kiem tra xem da co du lieu chua
    json.map((product) =>{
        productlist.innerHTML+=`<div class="products">
        <img src="../assets/img/body/image 1.png" alt="" style="width: 100%;">
        <div class="products-content">
            <p class="products-name">${product.name}</p>
            <p class="products-desc">${product.description}</p>
            <p class="products-price">Rp ${product.price.toLocaleString("vi-VN")}</p>
        </div>
   </div>`
    })
}

  
  );