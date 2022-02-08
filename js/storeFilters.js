$("#storeFilters").append(`
    <h2>Store Filters</h2>
    <div class="flex-row storeSubFilters">
        <h3>Filter by game:</h3>
        <ul>
            <li><input type="checkbox" class="checkboxFilter filterByGame" name="EFTGame" value="EFT"><label for="EFTGame">EFT</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByGame" name="SCGame" value="Star Citizen"><label for="SCGame">Star Citizen</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByGame" name="IRGame" value="iRacing"><label for="IRGame">iRacing</label></li>
        </ul>
    </div>
    <div class="flex-row storeSubFilters">
        <h3>Filter by Color:</h3>
        <ul>
            <li><input type="checkbox" class="checkboxFilter filterByColor" name="blackColor" value="Black"><label for="blackColor">Black</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByColor" name="grayColor" value="Gray"><label for="grayColor">Gray</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByColor" name="whiteColor" value="White"><label for="whiteColor">White</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByColor" name="clearColor" value="Clear"><label for="clearColor">Clear</label></li>
        </ul>
    </div>
    <div class="flex-row storeSubFilters">
        <h3>Filter by Product Type:</h3>
        <ul>
            <li><input type="checkbox" class="checkboxFilter filterByProdType" name="typeDrinkware" value="Drinkware"><label for="typeDrinkware">Drinkware</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByProdType" name="typeApparel" value="Apparel"><label for="typeApparel">Apparel</label></li>
            <li><input type="checkbox" class="checkboxFilter filterByProdType" name="typeLuggage" value="Luggage"><label for="typeLuggage">Luggage</label></li>
        </ul>
    </div>
`);


// *******************************************************
// STORE FILTER LOGIC - WIP
// *******************************************************

$(`.checkboxFilter`).change( 
    function(event){
        $(`#storeFeed`). empty();
        const checkedBox = [];
        $.each($("input:checkbox:checked"), function (){
            checkedBox.push($(this).val());
        })
        $.getJSON(URLproducts, function (answer, status) {
            if(status === "success"){
                for(filter of checkedBox){
                    filtered = answer.filter(product => product.game === filter || product.color === filter || product.prodType === filter);
                    // for(let index = 1; index <= checkedBox.length; index++){
                    //     console.log(index);
                    // }
                    // createProduct(filtered);
                    createProduct(filtered);
                }
            };
            if(checkedBox.length == 0){
                $.getJSON(URLproducts, function (answer, status) {
                    if(status === "success"){
                        createProduct(answer);
                    }
                })
            }
        })
    })