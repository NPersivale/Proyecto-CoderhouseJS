// *******************************************************
// DOM READY
// *******************************************************

$(() => {
    console.log("El DOM esta listo");
});


// *******************************************************
// CLASSES
// *******************************************************

class storeProduct {
    constructor(id, name, price, prodType, game, color, image){
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.prodType = prodType;
        this.game = game;
        this.color = color;
        this.image = image;
    }
}

class shoppingCartProd {
    constructor(name, price, prodType, game, color){
        this.name = name;
        this.price = price;
        this.prodType = prodType;
        this.game = game;
        this.color = color;
    }
}



// *******************************************************
// OBJECTS INSTANTIATING
// *******************************************************

const productsArray = [];

// Store products
productsArray.push(new storeProduct(0, "iRacing Hoodie", 60, "Apparel", "iRacing", "Gray", "../assets/Store/hoodie-iracing.jpg"));
productsArray.push(new storeProduct(1, "iRacing T-Shirt", 30, "Apparel", "iRacing", "Gray", "../assets/Store/tshirt-iracing.jpg"));
productsArray.push(new storeProduct(2, "Escape From Tarkov T-Shirt", 30, "Apparel", "EFT", "Black", "../assets/Store/tshirt-eft.jpg"));
productsArray.push(new storeProduct(3, "Star Citizen Backpack", 70, "Luggage", "Star Citizen", "Black", "../assets/Store/SC-backpack.jpg"));

$(`#storeFeed`).on('trigger', createProduct(productsArray)); //ASSOCIATED EVENT LISTENER



// *******************************************************
// EVENT LISTENERS
// *******************************************************

const shoppingCart = [];

let storeBtn = document.getElementsByClassName("storeBtn");
for (let  index = 0 ; index < storeBtn.length; index++) {
    $(storeBtn[index]).on('click', addToCart);
}
console.log(shoppingCart); //TESTING PURPOSES ONLY

$(`#saveBtn`).on('click', saveCart);
$(`#recoverBtn`).on('click', recoverCart);
$(`#clearBtn`).on('click', resetStorage);


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
        recoveredProducts.push(new shoppingCartProd(product.name, product.price, product.prodType, product.game, product.color));
    }
    console.log(recoveredProducts); //TESTING PURPOSES ONLY
}

function createProduct(productsArray) {
    for(products of productsArray){
        $("#storeFeed").append(`
        <div class="entry col-lg-5 col-sm-12">
            <div class="storeItem">
                <h2 class="prodH2" >${products.name}</h2>
                <img class="store__img" src=\"${products.image}">
                <h3 class="prodPrice" >Price: ${products.price}</h3>
                <input class="prodType" value="${products.prodType}" type="hidden">
                <input class="prodGame" value="${products.game}" type="hidden">
                <input class="prodColor" value="${products.color}" type="hidden">
                <input class="btn storeBtn" id="${products.id}" type="submit" value="Add to Cart">
            </div>
        </div>`);
    }
}


function addToCart(event){
    let targetId = event.target.id;
    let addItem = document.getElementsByClassName("storeBtn")[targetId].parentElement.querySelectorAll(".prodPrice, .prodH2, .prodType, .prodGame, .prodColor");
    shoppingCart.push(new shoppingCartProd(addItem[0].innerHTML, addItem[1].innerHTML.replace(/[^0-9]/g,''), addItem[2].value, addItem[3].value, addItem[4].value));
    console.log(shoppingCart); //TESTING PURPOSES ONLY
}