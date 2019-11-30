var amount = 0;
/*--Munesu Maminimini, @Moriarty221B-->*/
/*returns corresponding selected colour*/
/*Provide option to add multiple items to cart */
function colorSelect(color) {
    document.getElementById("color").innerHTML = color;
    document.getElementById("color2").innerHTML = color;
    document.getElementById("myBtn").innerHTML = "Add to Cart";

}

/*increments the cart items when + button is pressed*/
function increment() {
    amount++;
    document.getElementById("amount").innerHTML = amount;
}

/*decrements the cart items when - button is pressed*/
function decrement() {
    amount = amount < 1 ? 0 : --amount;
    document.getElementById("amount").innerHTML = amount;
}

/*closes popup modal and resets amount to zero when cancel button is pressed*/
function cancel() {
    amount = 0;
    document.getElementById("amount").innerHTML = amount;
    modal.style.display = "none";
}
/*closes popup modal, proceeds to checkout and shows details of selected items */
function agree() {
    document.getElementById("amountBtn").innerHTML = amount;
    document.getElementById("myBtn").innerHTML = "Check out Now";
    document.querySelector("#myBtn").dataset.target = "#checkoutModal"
        /*-----------------------------------------------------------------------*/
        /*--Add details--*/
    var i = 0;
    for (i = 0; i < amount; i++) {
        /*Create element creates whatever is in <>*/
        var newBtn = document.createElement("Button");
        /*Add a class defined in css*/
        newBtn.classList.add("color-button");
        /*Generate the button colour class. class names are '-' delimited (no spaces) and are in all small letters*/
        var btnColor = "button-" + document.getElementById("color").innerHTML;
        btnColor = btnColor.toLowerCase().replace(" ", "-");
        newBtn.classList.add(btnColor);
        /*Add the newly created element to detail division.*/
        document.getElementById("detail_no").appendChild(newBtn);

    }
    /*-----------------------------------------------------------------------*/
    amount = 0;
    modal.style.display = "none";

    /*add corresponding price and color */


}

/*Update and display summary of cart items at checkout */
function checkout() {

    /*Show corresponding colors in details and cart*/






}