// *******************************************************
// DOM READY
// *******************************************************

$(() => {
    console.log("El DOM esta listo");
});


// *******************************************************
// ANIMATIONS
// *******************************************************

$(`#navbarDropdownMenuLink`).click(function(){
    $(`.dropdown-menu`).slideToggle("fast");
})


// *******************************************************
// SHOPPING CART - WIP
// *******************************************************

let index1 = 0;

$(`.nav-cart`).ready(()=>{
    $(`.shoppingCart`).append(
        `<div class="">
            <h1>Shopping Cart:</h1>
            <h5 class="closeBtn btn">x</h5>
        </div>`
    );
})

$(`.nav-cart`).click(()=>{
    index1++;
    $(`.shoppingCart`).slideDown(function(){
        $(`.closeBtn`).click(()=>{
            $(`.shoppingCart`).slideUp();
        });
    })
    $(`.shoppingCart`).append(
        `<div class="w-100">
            <h2>${"Hola! Tocaste el boton "+ index1 + " veces!"}</h2>
        </div>`
    )
})

