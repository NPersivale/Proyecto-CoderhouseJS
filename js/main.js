// *******************************************************
// DOM READY
// *******************************************************

$(() => {
    console.log("The DOM is ready");
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

$(`.nav-cart`).ready(()=>{ //CREATES CART STRUCTURE
    $(`.shoppingCart`).append(
        `<div class="containerProducts">
            <h1>Shopping Cart:</h1>
            <h5 class="closeBtn btn">x</h5>
        </div>
        <div class="container d-flex justify-content-around row m-auto my-5">
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Units</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody id="containerCart">              
                    </tbody>
                </table>
            </div>
    </div>

    <input class="btn w-30 d-sm-inline-flex p-3" id="clearBtn" type="submit" value="Clear Cart"> (NOT WORKING YET)
    `
    );
})

$(`.nav-cart`).click(()=>{ //TOGGLES SHOPPING CART
    index1++;
    $(`.shoppingCart`).slideDown(function(){
        $(`.closeBtn`).click(()=>{
            $(`.shoppingCart`).slideUp();
        });
    })
})