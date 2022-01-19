// *******************************************************
// CLASSES
// *******************************************************

class storeProduct {
    constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.image = image;
    }
}

const productsArray = [];

// Store products - Object instances
productsArray.push(new storeProduct(1, "iRacing Hoodie", 60, "../assets/Store/hoodie-iracing.jpg"));
productsArray.push(new storeProduct(2, "iRacing T-Shirt", 30, "../assets/Store/tshirt-iracing.jpg"));
productsArray.push(new storeProduct(3, "Escape From Tarkov T-Shirt", 30, "../assets/Store/tshirt-eft.jpg"));
productsArray.push(new storeProduct(4, "Star Citizen Backpack", 70, "../assets/Store/SC-backpack.jpg"));


let storeFeed = document.getElementById("storeFeed");
createProduct(productsArray);


// *******************************************************
// JSON FILE - no funciona!
// *******************************************************

// const saveLocally = (key, value) => {localStorage.setItem(key, value)};

// for (const prod of productsArray) {
//     saveLocally(prod.id, JSON.stringify(prod));
// }

// const locally = JSON.parse(localStorage.getItem("listofProducts"));
// const productsLocal = [];

// for(const objeto of locally){
//     productsLocal.push(new Producto(objeto));
// }

// console.log(productsLocal);


// *******************************************************
// EVENT LISTENERS
// *******************************************************

const shoppingCart = [];

let storeBtn = document.getElementsByClassName("storeBtn");
for (var i = 0 ; i < storeBtn.length; i++) {
    storeBtn[i].addEventListener('click' , addToCart) ; 
}
console.log(shoppingCart);


// *******************************************************
// FUNCTIONS
// *******************************************************

function createProduct(productsArray) {
    for(products of productsArray){
        let div = document.createElement("div");
        div.className = "entry col-lg-5 col-sm-12";
        div.innerHTML = `
        <div class="storeItem">
            <h2 class="h2Prod" >${products.name}</h2>
            <img class="store__img" src=\"${products.image}">
            <h3 class="priceProd" >Price: ${products.price}</h3>
            <input class="btn storeBtn" type="submit" value="Add to Cart">
        </div>
        `;
        storeFeed.appendChild(div);
    }
}


function addToCart(event){ // no funciona!
    console.log("Click");
    let addProduct = event.target;
    console.log(addProduct);
    let h2Prod = document.getElementsByClassName("h2Prod").innerText;
    console.log(h2Prod);
    let priceProd = document.getElementsByClassName("priceProd").innerText;
    console.log(priceProd);
    // shoppingCart.push(event.target.);
}
