


fetch('js/items.json')
        .then(response => response.json())
        .then(data => {
            const swiper_items_sale = document.getElementById("swiper_items_sale");
            const other_product_swiper = document.getElementById("other_product_swiper");
            const other_product_swiper2 = document.getElementById("other_product_swiper2");
        // add products to slide (swiper_items_sale)
             data.forEach(product => {
                if(product.old_price){
                    const product_olde_price_pragraph = product.old_price ? ` <p class="old_price">$${product.old_price}</p>`: "";
                    const percent_discount = Math.floor((product.old_price - product.price) / product.old_price  * 100)

                    all_products_jeson = data


                    swiper_items_sale.innerHTML +=`

                     <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sale_persent">%${percent_discount}</span>
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
                }
                
             });

        // add products to slide with banner (other_product_swiper)
             data.forEach(product => {
                    all_products_jeson = data
                    const product_olde_price_pragraph = product.old_price ? ` <p class="old_price">$${product.old_price}</p>`: "";


                    other_product_swiper.innerHTML +=`
                                        
                     <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                    
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

             data.forEach(product => {
                all_products_jeson = data

                const product_olde_price_pragraph = product.old_price ? ` <p class="old_price">$${product.old_price}</p>`: "";

                other_product_swiper2.innerHTML +=`

                 <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                
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
