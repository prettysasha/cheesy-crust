let cart = [];
const buttons = document.querySelectorAll('.add-to-cart');
const cartList = document.getElementById('cart-list'); 
const totalSpan = document.getElementById('total');    
const clearBtn = document.querySelector(".clear-cart-btn");
const checkoutBtn = document.querySelector(".checkout-btn");
const form = document.getElementById('contact-form');

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const name = this.getAttribute('data-name');
        const price = Number(this.getAttribute('data-price'));
        if(!name || isNaN(price)) return;
       
        cart.push({ name, price});
        showCart();
    });
});
function showCart(){
    cartList.innerHTML = "";
let total = 0;

cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.innerText = `${item.name} - ksh ${item.price.toLocaleString()}`;
    cartList.appendChild(li);
} );
totalSpan.textContent = total.toLocaleString();

}

clearBtn?.addEventListener('click', () => {
cart = [];
showCart();

});


checkoutBtn?.addEventListener('click', () => {
    if(cart.length === 0)
        {alert("your cart is empty!");
        return;
    }
     const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for ordering from Cheesy Crust!\nTotal amount: Ksh ${total.toLocaleString()}`);
    cart = [];
    showCart();

});


 
 

















































