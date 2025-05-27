// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let product = products.find( p => p.id === id)
    // 2. Add found product to the cart array
    let product2 = cart.find( p => p.id === id)
    if(!product2){
        product.quantity = 1;
        cart.push(product)
    }else{
        product.quantity++;
    }
    modifyCountProduct(1)
}

function modifyCountProduct(value)
{
    let countProduct=document.getElementById("count_product");
    if(value != 0)
        value = parseInt(countProduct.innerHTML) + value;

    countProduct.innerHTML = value;
}

function buyCart(id){
    buy(id);
    printCart();
}

// Exercise 2
function cleanCart() {
    cart.map( p => delete p.quantity )
    cart.map( p => delete p.subtotalWithDiscount )
    cart = []
    printCart();
    modifyCountProduct(0);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    applyPromotionsCart()
    let total = cart.reduce( (total, p) => {
        if(p.subtotalWithDiscount)
            return total + p.subtotalWithDiscount
        return total + (p.price * p.quantity)
    }, 0)
    total = Math.round(total * 100) / 100;
    return total
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach( (p) => {
        if(p.offer){
            if(p.offer.number <= p.quantity){
                p.subtotalWithDiscount = Math.round((p.price * p.quantity) * (1 - p.offer.percent/100) *100)/100
            } else {
                delete p.subtotalWithDiscount;
            }
        }
    })
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let total = calculateTotal()
    const cartList = document.getElementById("cart_list")
    cartList.innerHTML =""
    cart.forEach(p => {
        text = `<tr>
            <th scope="row">${p.name}</th>
            <td>$${p.price}</td>
            <td>${p.quantity}</td>
            <td class="d-flex justify-content-between">
                <span>$${p.subtotalWithDiscount? p.subtotalWithDiscount: p.price * p.quantity}</span>
                <div class="ms-auto">
                    <button class="btn btn-sm btn-outline-primary" onclick="buyCart(${p.id})">+</button>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${p.id})">-</button>
                </div>
            </td>
        </tr>`
        cartList.innerHTML += text
    });
    const totalPrice = document.getElementById("total_price")
    totalPrice.innerHTML = total
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    let product = cart.find( p => p.id == id);
    if(product){
        product.quantity--;
        if(product.quantity<=0){
            let index = cart.indexOf(product);
            if(index >= 0)
                cart.splice(index, 1);
        }
    }
    printCart();
    modifyCountProduct(-1)
}

function open_modal() {
    printCart();
}