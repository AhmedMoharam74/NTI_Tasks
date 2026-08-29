//Task Day_5
// NTI Mini Store 

var products = [
    {
    id: 1,
    name: "Laptop",
    price: 18500,
    category: "Electronics",
    quantity: 4
    },
    { 
    id: 2,
    name: "Mouse",
    price: 180,
    category: "Electronics",
    quantity: 25
    },
    {
    id: 3,
    name: "Notebook",
    price: 35,
    category: "Stationery",
    quantity: 100
    },
    {
    id: 4,
    name: "Desk Lamp",
    price: 420,
    category: "Home",
    quantity: 0
    }
];


function printProducts(list) {
    console.table(list);
}


function createProduct(name, price, category, quantity) {

    name = name.trim();
    category = category.trim();

    if (name === "") {
    return "Error: name is required";
    }

    if (price <= 0 || quantity < 0) {
    return "Error: invalid price or quantity";
    }

    var exists = products.some(function (product) {
    return product.name.trim().toLowerCase() === name.toLowerCase();
    });

    if (exists) {
    return "Error: product name already exists";
    }

    var id = products.length + 1;
    var product = {
        id: id,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };
    products.push(product);
    return product;
}


function getAllProducts() {
    var list = products.slice();
    printProducts(list);
    return list;
}


function getProductById(id) {
    var product = products.find(function (product) {
    return product.id === id;
    });
    if (!product) {
    return null;
    }
    return product;
}


function updateProduct(id, name, price, category, quantity) {
    var index = products.findIndex(function (product) {
    return product.id === id;
    });

    if (index === -1) {
    return "Error: product not found";
    }
    name = name.trim();
    category = category.trim();
    if (name === "") {
    return "Error: name is required";
    }
    if (price <= 0 || quantity < 0) {
    return "Error: invalid price or quantity";
    }
    products[index].name = name;
    products[index].price = price;
    products[index].category = category;
    products[index].quantity = quantity;
    return products[index];
}


function deleteProduct(id) {
    var index = products.findIndex(function (product) {
    return product.id === id;
    });
    if (index === -1) {
    return "Error: product not found";
    }
    var confirmDelete = confirm("Delete this product?");
    if (!confirmDelete) {
    return "Delete cancelled";
    }
    var deletedProduct = products[index];
    products.splice(index, 1);
    return deletedProduct;
}


function filterProducts(keyword) {
    keyword = keyword.trim().toLowerCase();
    var result = products.filter(function (product) {
    return (
    product.name.trim().toLowerCase().includes(keyword) ||
    product.category.trim().toLowerCase().includes(keyword)
    );
    });
    printProducts(result);
    return result;
}


function sortByPrice(order = "asc") {
    var result = products.toSorted(function (a, b) {
    if (order === "desc") {
        return b.price - a.price;
    }
    return a.price - b.price;
    });
    printProducts(result);
    return result;
}


function getStoreStats() {
    var totalValue = products.reduce(function (total, product) {
    return total + product.price * product.quantity;
    }, 0);
    var totalQuantity = products.reduce(function (total, product) {
    return total + product.quantity;
    }, 0);
    var averagePrice = products.reduce(function (total, product) {
    return total + product.price;
    }, 0) / products.length;
    var outOfStock = products.filter(function (product) {
    return product.quantity === 0;
    }).length;
    return {
    totalProducts: products.length,
    totalQuantity: totalQuantity,
    totalValue: totalValue,
    averagePrice: Number(averagePrice.toFixed(2)),
    outOfStock: outOfStock
    };
}


function groupByCategory() {
    var result = products.reduce(function (groups, product) {
    if (!groups[product.category]) {
        groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
    }, {});
    console.log(result);
    return result;
}


function filterByPriceRange(min = 0, max = Infinity) {
    var result = products.filter(function (product) {
    return product.price >= min && product.price <= max;
    });
    printProducts(result);
    return result;
}


var inStock = (list) => {
    return list.filter((product) => product.quantity > 0);
};

function withAfterAction(fn, callback) {
    var result = fn();
    callback();
    return result;
}


var store = (function () {
    return {
    showStats: function () {
        console.log(getStoreStats());
    },
    showCategories: function () {
        groupByCategory();
    },
    showInStock: function () {
        printProducts(inStock(products));
    }
    };

})();


function addMany(...items) {
    for (var i = 0; i < items.length; i++) {
    createProduct(
        items[i].name,
        items[i].price,
        items[i].category,
        items[i].quantity
    );
    }
}


function startApp() {
    var choice;
    while (choice !== "0") {
    choice = prompt(
        "===== NTI Mini Store =====\n" +
        "1) Add product\n" +
        "2) Show all products\n" +
        "3) Show product by ID\n" +
        "4) Update product\n" +
        "5) Delete product\n" +
        "6) Search / Filter\n" +
        "7) Sort by price\n" +
        "8) Store statistics\n" +
        "9) Group by category\n" +
        "10) Filter by price range\n" +
        "11) Show in-stock products\n" +
        "0) Exit"
    );

    if (choice === null) {
        break;
    }

    switch (choice) {
        case "1":
        var name = prompt("Enter product name:");
        var price = Number(prompt("Enter price:"));
        var category = prompt("Enter category:");
        var quantity = Number(prompt("Enter quantity:"));
        var added = createProduct(
            name,
            price,
            category,
                quantity
        );
        console.log(added);
        break;
        case "2":
        getAllProducts();
        break;
        case "3":
        var id = Number(prompt("Enter product ID:"));
        var product = getProductById(id);
        if (product) {
            console.log(product);
        }else {
            console.log("Error: product not found");
        }
        break;
        case "4":
        var updateId = Number(prompt("Enter product ID:"));
        var updateName = prompt("Enter new name:");
        var updatePrice = Number(prompt("Enter new price:"));
        var updateCategory = prompt("Enter new category:");
        var updateQuantity = Number(prompt("Enter new quantity:"));
        var updated = updateProduct(
            updateId,
            updateName,
            updatePrice,
            updateCategory,
            updateQuantity
        );
        console.log(updated);
        break;
        case "5":
        var deleteId = Number(prompt("Enter product ID:"));
        console.log(deleteProduct(deleteId));
        break;
        case "6":
        var keyword = prompt("Search by name or category:");
        filterProducts(keyword);
        break;
        case "7":
        var order = prompt(
            'Enter "asc" or "desc":',
            "asc"
        );
        sortByPrice(order);
        break;

        case "8":
        store.showStats();
        break;
        case "9":
        store.showCategories();
        break;
        case "10":
        var min = Number(prompt("Enter minimum price:"));
        var max = Number(prompt("Enter maximum price:"));
        filterByPriceRange(min, max);
        break;
        case "11":
        var result = withAfterAction(
            () => inStock(products),
            () => console.log("Done")
        );
        printProducts(result);
        break;
        case "0":
        console.log("Goodbye!");
        break;
        default:
        console.log("Invalid choice");
    }
    }
}