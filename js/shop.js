// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

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
    console.log("Buy Item")
    let product = products.find( p => p.id == id);
    console.log(product)
    // 2. Add found product to the cart array
    let product2 = cart.find( p => p.id == id)
    if(!product2){
        product.quantity = 1;
        console.log("Product quantity = 1")
        console.log(product)
        cart.push(product)
    }else{
        product.quantity++;
        console.log("Product quantity++")
        console.log(product)
    }
    console.log(`Cart: added ${product.name}, quantity ${product.quantity}`)
    console.log(cart)
    console.log("Products")
    console.log(products)
    countProduct=document.getElementById("count_product")
    countProduct.innerHTML = parseInt(countProduct.innerHTML) + 1 
}

// Exercise 2
function cleanCart() {
    console.log("Cart to clean:")
    console.log(cart)
    cart.map( p => delete p.quantity )
    cart.map( p => delete p.subtotalWithDiscount )
    cart = []
    console.log("Cart cleaned:")
    console.log(cart)
    console.log("Products quantity reset:")
    console.log(products)
    printCart();
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
    console.log(`Total amount: ${total}`)
    return total
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach( (p) =>{
        if(p.offer){
            if(p.offer.number <= p.quantity){
                p.subtotalWithDiscount = Math.round((p.price * p.quantity) * (1 - p.offer.percent/100) *100)/100
                console.log(`Offer:`)
                console.log(p)
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
            <td>$${p.subtotalWithDiscount? p.subtotalWithDiscount: p.price * p.quantity}</td>
        </tr>`
        cartList.innerHTML += text
    });
    const totalPrice = document.getElementById("total_price")
    totalPrice.innerHTML = total
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}