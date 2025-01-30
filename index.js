document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Color Caps", price: 15000, image: "./images/product1.jpg" },
        { id: 2, name: "Complete Male Outfit", price: 30000, image: "./images/product2.jpg" },
        { id: 3, name: "Ladies Wear", price: 28000, image: "./images/product3.jpg" },
        { id: 4, name: "Complete Ladies Outfits", price: 40000, image: "./images/product4.jpg" },
        { id: 5, name: "Fit Men Top", price: 12000, image: "./images/product5.jpg" },
        { id: 6, name: "Men Top and Short", price: 30000, image: "./images/product6.jpg" },
        { id: 7, name: "Blue/Black Men Shirt", price: 20000, image: "./images/product7.jpg" },
        { id: 8, name: "Men Pants", price: 25000, image: "./images/product8.jpg" },
        { id: 9, name: "Unisex Top", price: 20000, image: "./images/product9.jpg" },
        { id: 10, name: "Unisex Men Baggie Tops", price: 25000, image: "./images/product10.jpg" },
    ];
    console.log(products); 
    console.log("JavaScript Loaded");

    let cart = [];
    let productList = document.getElementById("product-list");
    let cartItemDiv = document.getElementById("cart-items");
    let cartTotalDiv = document.getElementById("cart-total");
    let clearCartButton = document.getElementById("clear-cart");

    // Display products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        let name = document.createElement("h3");
        name.textContent = product.name;

        let price = document.createElement("p");
        price.textContent = `₦${product.price}`;

        let button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.setAttribute("data-id", product.id);
        button.addEventListener("click", () => addToCart(product));

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(button);

        productList.appendChild(productDiv);
    });

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItemDiv.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p>${item.name} - ₦${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemDiv.appendChild(cartItem);
        });

        cartTotalDiv.textContent = `₦${total}`;
    }

    window.removeFromCart = function (productId) {
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCart();
        }
    };

    clearCartButton.addEventListener("click", () => {
        cart.length = 0;
        updateCart();
    });







    // Teams

    const teams=[
        {name:"Nzubechukwu onodika",regno:"Ns/Csc/22/7697"}]
    let team_main=document.querySelector(".teams")
    console.log(team_main)
    let li =document.createElement("li")
    teams.forEach(name=>{
        li.innerHTML=`${name.name} <br/>${name.regno}`
        team_main.appendChild(li)
    })
    

});
