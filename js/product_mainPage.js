

//open and close filter 
var filters = document.querySelector(".filters");
function openANDcloseFilters(){
    filters.classList.toggle("active");
}


fetch('js/items.json')
        .then(response => response.json())
        .then(data => {
            const products_dev = document.getElementById("products_dev");

        // add products to slide (swiper_items_sale)
             data.forEach(product => {

                    
                    const percent_discount_div = product.old_price ? `<span class="sale_persent">%${Math.floor((product.old_price - product.price) / product.old_price  * 100)}</span>`: "";

                    const product_olde_price_pragraph = product.old_price ? ` <p class="old_price">$${product.old_price}</p>`: "";

                    all_products_jeson = data


                    products_dev.innerHTML +=`

                     <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        ${percent_discount_div}                     
                        <div class="img_product">
                            <img src="${product.img}" alt="product">
                            <img class="img_hover" src="${product.img_hover}" alt="product">
                        </div>
                        <h3 class="name_product"><a href="product_details.html">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${product_olde_price_pragraph}
                        </div>
                    </div>
                    `
                
                
             });
        })
