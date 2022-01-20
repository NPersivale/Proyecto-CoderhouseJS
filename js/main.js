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

class shoppingCartProd {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}



// *******************************************************
// CODE
// *******************************************************

const productsArray = [];

// Store products - Object instances
productsArray.push(new storeProduct(0, "iRacing Hoodie", 60, "../assets/Store/hoodie-iracing.jpg"));
productsArray.push(new storeProduct(1, "iRacing T-Shirt", 30, "../assets/Store/tshirt-iracing.jpg"));
productsArray.push(new storeProduct(2, "Escape From Tarkov T-Shirt", 30, "../assets/Store/tshirt-eft.jpg"));
productsArray.push(new storeProduct(3, "Star Citizen Backpack", 70, "../assets/Store/SC-backpack.jpg"));


let storeFeed = document.getElementById("storeFeed");
createProduct(productsArray);



// *******************************************************
// EVENT LISTENERS
// *******************************************************

const shoppingCart = [];

let storeBtn = document.getElementsByClassName("storeBtn");
for (let  index = 0 ; index < storeBtn.length; index++) {
    storeBtn[index].addEventListener('click' , addToCart) ; 
}
console.log(shoppingCart); //TESTING PURPOSES ONLY


let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click",saveCart);


let recoverBtn = document.getElementById("recoverBtn");
recoverBtn.addEventListener("click",recoverCart);


let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click",resetStorage);



// *******************************************************
// FUNCTIONS
// *******************************************************

const saveLocally = (key, value) => { localStorage.setItem(key, value) };

function saveCart(){ //ALMOACENA EL CARRITO ACTUAL EN EL LOCALSTORAGE
    saveLocally("shoppingCartLocal", JSON.stringify(shoppingCart));
}

function resetStorage(){ //LIMPIA EL LOCALSTORAGE
    localStorage.clear();
}

function recoverCart(){ //RECUPERA EL CARRITO DEL LOCALSTORAGE
    const storedProducts = JSON.parse(localStorage.getItem("shoppingCartLocal"));
    const recoveredProducts = [];
    for (const product of storedProducts){
        recoveredProducts.push(new shoppingCartProd(product.name, product.price));
    }
    console.log(recoveredProducts); //TESTING PURPOSES ONLY
}

function createProduct(productsArray) {
    for(products of productsArray){
        let div = document.createElement("div");
        div.className = "entry col-lg-5 col-sm-12";
        div.innerHTML = `
        <div class="storeItem">
            <h2 class="h2Prod" >${products.name}</h2>
            <img class="store__img" src=\"${products.image}">
            <h3 class="priceProd" >Price: ${products.price}</h3>
            <input class="btn storeBtn" id="${products.id}" type="submit" value="Add to Cart">
        </div>
        `;
        storeFeed.appendChild(div);
    }
}


function addToCart(event){
    let targetId = event.target.id;
    let addItem = document.getElementsByClassName("storeBtn")[targetId].parentElement.querySelectorAll(".priceProd, .h2Prod");
    shoppingCart.push(new shoppingCartProd(addItem[0].innerHTML, addItem[1].innerHTML.replace(/[^0-9]/g,'')));
    console.log(shoppingCart); //TESTING PURPOSES ONLY
}