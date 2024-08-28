

// open and close cart function
var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}


// open and close menu function
var menu = document.querySelector('.menu');

function open_menu() {
    menu.classList.add("active")
}
function close_menu() {
    menu.classList.remove("active")
}

// open and close sidebar in header if the screen less than 1000px function

var side_head = document.querySelector('.side_head');

function open_sideBar() {
    side_head.classList.add("active")
}
function close_sideBar() {
    side_head.classList.remove("active")
}

// change img product function 
let bigImg = document.getElementById("bigImg");
function changeProductImg(img) {
    bigImg.src = img
}

// add product to cart
var all_products_jeson;
var items_in_cart = document.querySelector('.items_in_cart');
let product_cart = [];
function addToCart(id , btn){
    product_cart.push(all_products_jeson[id])
    btn.classList.add("active")

    getCartItems()
}

// price for cart_header (count_item) function
let count_item = document.querySelector('.count_item');
let pric_cart_head = document.querySelector('.pric_cart_head');
// price for cart total and items
let pric_cart_total = document.querySelector('.pric_cart_total')
let count_item_cart = document.querySelector('.count_item_cart')





// function to include card structer in html and to get information from json file (forloop function)
function getCartItems() {
    let total_price = 0;
    let items_C = "";
    for (let i = 0; i < product_cart.length; i++) {
         items_C +=`
                <div class="item_cart">
                    <img src="${product_cart[i].img}" alt="product">
                    <div class="content">
                        <h4>${product_cart[i].name}</h4>
                        <p class="price_cart">${product_cart[i].price}</p>
                    </div>
                    <a onclick="remove_from_cart(${i})" class="delete_item "><i class="fa-solid fa-trash-can"></i></a>
                </div>
         
        `       
        total_price += product_cart[i].price
    }   
        items_in_cart.innerHTML = items_C

        //for header price & items
        pric_cart_head.innerHTML = "$" + total_price
        count_item.innerHTML = product_cart.length
        //for cart price & items
        pric_cart_total.innerHTML = "$" + total_price
        count_item_cart.innerHTML = `${product_cart.length} items in cart`
       
}
function remove_from_cart(index) {
    product_cart.splice(index,1)
    getCartItems()
    let addToCartButtons = document.querySelectorAll(".fa-cart-shopping")
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active")
        product_cart.forEach(product => {
            if (product.id == i) {
                addToCartButtons[i].classList.add("active")
            }
        })
        
    }
}

// back_to_top function

let back_to_top = document.querySelector('.back_to_top');

back_to_top.addEventListener("click" , function() {
    window.scrollTo({
        top: "0",
        behavior: "smooth",
    })
})