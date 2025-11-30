const cart = [];

async function loadMenu() {
    try {
        const response = await fetch('menu.json');
        const menuItems = await response.json();
        const menuContainer = document.getElementById("menu-container");
        menuContainer.innerHTML = "";

        menuItems.forEach(item => {
            const card = document.createElement("div");
            card.className = "col-md-4";
            card.innerHTML = `
                <div class="card menu-card">
                    <img src="images/${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">$${item.price.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            `;
            menuContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

function addToCart(id) {
    fetch('menu.json')
        .then(res => res.json())
        .then(menuItems => {
            const item = menuItems.find(i => i.id === id);
            cart.push(item);
            updateCartUI();
        });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">x</button>
        `;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    alert(`Order placed! Total: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`);
    cart.length = 0; // Clear cart
    updateCartUI();
}

loadMenu();
