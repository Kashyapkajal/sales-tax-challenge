const { roundTax } = require("./util");

// This function checks whether an item is exempt from basic sales tax
function isItemExempt(item) {
  const exemptItems = ["book", "chocolate", "pill"];
  // Check if item includes any exempt keyword
  return exemptItems.some((keyword) => item.includes(keyword));
}

// This function checks whether an item is imported
function isItemImported(item) {
  return item.includes("imported"); // Returns true if the item is imported
}

// This function calculates the tax for a given item name and price
function calculateTax(name, price) {
  let tax = 0; // Start with no tax
  // If the item is NOT exempt, add 10% basic tax
  if (!isItemExempt(name)) {
    tax += 0.1 * price;
  }

  // If the item is imported, add 5% import tax
  if (isItemImported(name)) {
    tax += 0.05 * price;
  }
  return roundTax(tax);
}

// This function parses a single line of input text (e.g., "1 book at 12.49")
function parseInputData(line) {
  // Split the line into item description and price part
  const [left, priceStr] = line.split(" at ");
  const price = parseFloat(priceStr);
  // Separate the quantity and item name
  const [quantityStr, ...nameParts] = left.trim().split(" ");
  const quantity = parseInt(quantityStr);
  const name = nameParts.join(" ");
  return { quantity, name, price };
}

// Main function to calculate total tax and price for the entire input
function calculateSalesTaxAmount(input) {
  const lines = input.trim().split("\n");

  // Parse each line into item objects
  const items = lines.map((line) => parseInputData(line));

  // Initialize total tax and total price
  let totalTax = 0;
  let totalPrice = 0;

  // Process each item one by one
  items.forEach(({ quantity, name, price }) => {
    // Calculate tax for this item
    const tax = calculateTax(name, price);

    // Calculate final price including tax and round to 2 decimal places
    const total = Number((price + tax).toFixed(2));
    totalTax += tax;
    totalPrice += total;

    // Print each item's final price
    console.log(`${quantity} ${name}: ${total.toFixed(2)}`);
  });

  // Print the total tax and total amount to be paid
  console.log(`Sales Taxes: ${totalTax.toFixed(2)}`);
  console.log(`Total: ${totalPrice.toFixed(2)}`);
}
// Export the main function so it can be used elsewhere
module.exports = { calculateSalesTaxAmount };
