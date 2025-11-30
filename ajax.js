async function loadMenu() {
    const response = await fetch('menu.json');
    const menuItems = await response.json();
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card menu-card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

loadMenu();
