// *******************************************************
// CLASSES
// *******************************************************

class shoppingCartProd {
    constructor(name, price, prodType, game, color, id, units){
        this.name = name;
        this.price = price;
        this.prodType = prodType;
        this.game = game;
        this.color = color;
        this.id = id;
        this.units = units;
    }
}



// *******************************************************
// HTML POPULATE VIA JSON FILE
// *******************************************************

let URLproducts = "../data/products.json";

$("#storeFeed").ready(() => { 
    $.getJSON(URLproducts, function (answer, status) {
        if(status === "success"){
            $(`#storeFeed`).on('trigger', createProduct(answer)); // CREATES THE HTML
            let storeBtn = document.getElementsByClassName("storeBtn"); // ADDS FUNCTIONALITY TO THE BUTTONS
            for (let  index = 0 ; index < answer.length; index++) {
                $(storeBtn[index]).on('click', addToCart);
            }        
        }
        })
})


const shoppingCart = [];
console.log(shoppingCart); //TESTING PURPOSES ONLY

function createProduct(products) {
    for(product of products){
        $("#storeFeed").append(`
        <div class="entry col-lg-5 col-sm-12">
            <div class="storeItem">
                <h2 class="prodH2" >${product.name}</h2>
                <img class="store__img" src=\"${product.image}">
                <h3 class="prodPrice" >Price: $${product.price}</h3>
                <input class="prodType" value="${product.prodType}" type="hidden">
                <input class="prodGame" value="${product.game}" type="hidden">
                <input class="prodColor" value="${product.color}" type="hidden">
                <input class="prodId" value="${product.id}" type="hidden">
                <input class="btn storeBtn" id="${product.id}" type="submit" value="Add to Cart">
                <h3 style="display: none" id="${product.id}prodAdded">Agregado!</h3>

            </div>
        </div>
        `);
    }
}


// *******************************************************
// SHOPPING CART FUNCTIONALITY - WIP
// *******************************************************

// CART BUTTONS - TEMPORAL
$(`#recoverBtn`).on('click', getStorage);
$(`#clearBtn`).on('click', resetStorage);
$(`#saveBtn`).on('click', setStorage);



const saveLocally = (key, value) => { localStorage.setItem(key, value) };

function setStorage(){ //STORES CART IN LOCALSTORAGE
    saveLocally("shoppingCartLocal", JSON.stringify(shoppingCart));
}

function resetStorage(){ //CLEARS LOCALSTORAGE
    $(`#containerCart`).empty();
    localStorage.clear();
    console.log("localStorage has been cleared!"); //TESTING PURPOSES ONLY
}

function getStorage(){ //RETRIEVES CART FROM LOCALSTORAGE
    const storedProducts = JSON.parse(localStorage.getItem("shoppingCartLocal"));
    const recoveredProducts = [];
    for (const product of storedProducts){
        recoveredProducts.push(new shoppingCartProd(product.name, product.price, product.prodType, product.game, product.color));
    }
    console.log(recoveredProducts); //TESTING PURPOSES ONLY
}

function renderCart(product){ // RENDERS CART
    $(`#containerCart`).append(`        
    <tr>
        <td>${product.units}</td>
        <td>${product.name}</td>
        <td>${"$ " + product.price}</td>
        <td>${"$ " + product.price*product.units}</td>                
        <td><button id="btnDel${product.id}" class="removeItem btn">X</button></td>
    </tr>`);
}


$(`.removeItem`).click(()=>{ // NOT WORKING
    console.log("click");
})

function addToCart(event){ // LISTENS TO "ADD TO CART" BUTTON
    const targetId = event.target.id;
    let addItem = document.getElementsByClassName("storeBtn")[targetId].parentElement.querySelectorAll(".prodH2, .prodPrice, .prodType, .prodGame, .prodColor, .prodAdded, .prodId");
    console.log(shoppingCart); //TESTING PURPOSES ONLY
    $("#"+ targetId + "prodAdded").fadeIn().fadeOut(1000);

    if (shoppingCart.some(product => product.id === targetId)) {
        const chosenProduct = shoppingCart.find(product => product.id === targetId);
        chosenProduct.units++;
        $(`#containerCart`).empty();
        for(product of shoppingCart){
            renderCart(product);
        }
        } else {
            shoppingCart.push(new shoppingCartProd(addItem[0].innerHTML, addItem[1].innerHTML.replace(/[^0-9]/g,''), addItem[2].value, addItem[3].value, addItem[4].value, addItem[5].value, 1));
            const chosenProduct = shoppingCart.find(product => product.id === targetId);
            renderCart(chosenProduct);
        }}
