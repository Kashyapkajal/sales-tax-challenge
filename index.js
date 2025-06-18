const { calculateSalesTaxAmount } = require("./calculateSalesTaxAmount");

const input1 = `
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
`;

const input2 = `
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50
`;

const input3 = `
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
1 box of imported chocolates at 11.25
`;

console.log("Output 1:");
calculateSalesTaxAmount(input1);

console.log("\nOutput 2:");
calculateSalesTaxAmount(input2);

console.log("\nOutput 3:");
calculateSalesTaxAmount(input3);
