// inventoryManagement.js

// Create an array called products to store product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product in the array
function logFirstProduct() {
    console.log(products[0]);
}

// Example usage
logFirstProduct();

// Function to add a new product to the array
function addProduct(productName) {
    products.push(productName);
    console.log(`${productName} has been added to the products array.`);
}

// Example usage
addProduct("Keyboard"); // Adds "Keyboard" to the products array
console.log(products);  // Check the updated array

// Function to update the name of a product at a specific position
function updateProductName(position, newName) {
    if (position >= 0 && position < products.length) {
        const oldName = products[position];
        products[position] = newName;
        console.log(`Product at position ${position} updated from "${oldName}" to "${newName}".`);
    } else {
        console.log("Invalid position. Please provide a valid index.");
    }
}

// Example usage
updateProductName(1, "Smartphone"); // Changes "Phone" to "Smartphone"
console.log(products);               // Check the updated array

// Function to remove the last product from the array
function removeLastProduct() {
    if (products.length > 0) {
        const removedProduct = products.pop();
        console.log(`${removedProduct} has been removed from the products array.`);
    } else {
        console.log("The products array is already empty.");
    }
}

// Example usage
removeLastProduct();  // Removes the last product
console.log(products); // Check the updated array



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
products
};

