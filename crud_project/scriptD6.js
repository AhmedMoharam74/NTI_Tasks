// Selectors

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productQuantity = document.getElementById("productQuantity");

var addBtn = document.querySelector("#addBtn");
var updateBtn = document.querySelector("#updateBtn");
var tableBody = document.querySelector("#tableBody");
var searchInput = document.querySelector("#searchInput");


// Products Array

var products = [];
var updateIndex = null;

var nextId = 1;

// Add Product Event

addBtn.addEventListener("click", function () {

    var product = {
        id: nextId,
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        quantity: productQuantity.value
    };

    // Validation

    if (
        product.name === "" ||
        product.price === "" ||
        product.category === "" ||
        product.quantity === ""
    ) {

        alert("Please fill all fields");

        return;
    }

    products.push(product);
    nextId++;
    displayProducts(products);
    clearInputs();
});

// Display Products

function displayProducts(productsArray) {

    var cartona = "";


    for (var i = 0; i < productsArray.length; i++) {
        cartona += `
        <tr>
            <td>${productsArray[i].id}</td>
            <td>${productsArray[i].name}</td>
            <td>${productsArray[i].price}</td>
            <td>${productsArray[i].category}</td>
            <td>${productsArray[i].quantity}</td>
            <td>

                <button
                    class="deleteBtn"
                    onclick="deleteProduct(${productsArray[i].id})"
                >
                    Delete
                </button>

                <button
                    class="editBtn"
                    onclick="editProduct(${productsArray[i].id})"
                >
                    Update
                </button>
            </td>
        </tr>
        `;
    }
    tableBody.innerHTML = cartona;
}

// Delete Product

function deleteProduct(id) {
    products = products.filter(function (product) {
        return product.id !== id;
    });
    displayProducts(products);
}

// Edit Product

function editProduct(id) {
    updateIndex = products.findIndex(function (product) {
        return product.id === id;
    });


    productName.value = products[updateIndex].name;
    productPrice.value = products[updateIndex].price;
    productCategory.value = products[updateIndex].category;
    productQuantity.value = products[updateIndex].quantity;


    addBtn.style.display = "none";
    updateBtn.style.display = "block";
}

// Update Product Event

updateBtn.addEventListener("click", function () {


    products[updateIndex].name = productName.value;
    products[updateIndex].price = productPrice.value;
    products[updateIndex].category = productCategory.value;
    products[updateIndex].quantity = productQuantity.value;

    displayProducts(products);
    clearInputs();

    addBtn.style.display = "block";
    updateBtn.style.display = "none";
    updateIndex = null;
});


// Search Event
// Search by Name or Category

searchInput.addEventListener("input", function () {

    var searchValue =
        searchInput.value
            .trim()
            .toLowerCase();

    var filteredProducts = products.filter(function (product) {

        return (
            product.name
                .toLowerCase()
                .includes(searchValue)
            ||
            product.category
                .toLowerCase()
                .includes(searchValue)
        );
    });

    displayProducts(filteredProducts);
});

// Clear Inputs

function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productQuantity.value = "";
}

updateBtn.style.display = "none";