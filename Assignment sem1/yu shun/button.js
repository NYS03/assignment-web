function incrementButton1() {
    var value = parseInt(document.getElementById('cart-quantity1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity1').value = value;
    console.log(value);
}

function decrementButton1() {
    var value = parseInt(document.getElementById('cart-quantity1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity1').value = value;
    console.log(value);
}

function incrementButton2() {
    var value = parseInt(document.getElementById('cart-quantity2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity2').value = value;
    console.log(value);
}

function decrementButton2() {
    var value = parseInt(document.getElementById('cart-quantity2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity2').value = value;
    console.log(value);
}

function incrementButton3() {
    var value = parseInt(document.getElementById('cart-quantity3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity3').value = value;
    console.log(value);
}

function decrementButton3() {
    var value = parseInt(document.getElementById('cart-quantity4').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity3').value = value;
    console.log(value);
}

function incrementButton4() {
    var value = parseInt(document.getElementById('cart-quantity4').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity4').value = value;
    console.log(value);
}

function decrementButton4() {
    var value = parseInt(document.getElementById('cart-quantity4').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity4').value = value;
    console.log(value);
}

function incrementButton5() {
    var value = parseInt(document.getElementById('cart-quantity5').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity5').value = value;
    console.log(value);
}

function decrementButton5() {
    var value = parseInt(document.getElementById('cart-quantity5').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity5').value = value;
    console.log(value);
}

function incrementButton6() {
    var value = parseInt(document.getElementById('cart-quantity6').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity6').value = value;
    console.log(value);
}

function decrementButton6() {
    var value = parseInt(document.getElementById('cart-quantity6').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity6').value = value;
    console.log(value);
}

function incrementButton7() {
    var value = parseInt(document.getElementById('cart-quantity7').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity7').value = value;
    console.log(value);
}

function decrementButton7() {
    var value = parseInt(document.getElementById('cart-quantity7').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity7').value = value;
    console.log(value);
}

function incrementButton8() {
    var value = parseInt(document.getElementById('cart-quantity8').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity8').value = value;
    console.log(value);
}

function decrementButton8() {
    var value = parseInt(document.getElementById('cart-quantity8').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity8').value = value;
    console.log(value);
}

function incrementButton9() {
    var value = parseInt(document.getElementById('cart-quantity9').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart-quantity9').value = value;
    console.log(value);
}

function decrementButton9() {
    var value = parseInt(document.getElementById('cart-quantity9').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('cart-quantity9').value = value;
    console.log(value);
}

function countCart() {
    var quantity = document.getElementById('cart-quantity1');
    var price = document.getElementsByClassName("price1");
    var totalPrice = document.getElementById('cart-price1');
    totalPrice = 0;
    totalPrice = quantity * price;
    return totalPrice;
}