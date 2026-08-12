console.log("SHOP.JS IS WORKING!");

import product from "./products.js";

import {
    calculateDiscount
} from "./discount.js";


const discountPercentage = 10;

const discountedPrice = calculateDiscount(
    product.price,
    discountPercentage
);


console.log(`Product: ${product.name}`);

console.log(`Original Price: ₦${product.price}`);

console.log(
    `After ${discountPercentage}% Discount: ₦${discountedPrice}`
);

console.log(`Category: ${product.category}`);