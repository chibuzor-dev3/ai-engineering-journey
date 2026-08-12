# Day 32 — Module Organization & Default Exports

## 🎯 Objective

Today I learned how to organize JavaScript modules more effectively and how to use default exports alongside named exports.

The goal was to move from simply understanding modules to understanding how modules can be structured in a larger application.

---

# 1. Review of JavaScript Modules

A JavaScript module is a JavaScript file that can share functionality with other JavaScript files.

Instead of putting everything into one large file, code can be separated into smaller files.

Example:

```text
project/
├── app.js
├── user.js
├── products.js
└── discount.js
```

Each file can have a specific responsibility.

---

# 2. Named Exports

A named export allows a file to export one or more specific values.

Example:

```javascript
export function getUserGoal() {
    return "AI Engineer";
}
```

It is imported using curly braces:

```javascript
import { getUserGoal } from "./user.js";
```

---

# 3. Default Exports

A default export allows one main value to be exported from a module.

Example:

```javascript
const user = {
    name: "Chibuzor",
    role: "AI Engineering Student",
    goal: "AI Engineer"
};

export default user;
```

The default export is imported without curly braces:

```javascript
import user from "./user.js";
```

---

# 4. Named Export vs Default Export

## Named Export

```javascript
export const name = "Chibuzor";
```

Import:

```javascript
import { name } from "./user.js";
```

## Default Export

```javascript
export default user;
```

Import:

```javascript
import user from "./user.js";
```

### Important Difference

Named exports use:

```javascript
{ }
```

Default exports do not.

---

# 5. Combining Default and Named Exports

A module can contain both a default export and named exports.

Example:

```javascript
const user = {
    name: "Chibuzor",
    role: "AI Engineering Student",
    goal: "AI Engineer"
};

export function getUserGoal() {
    return user.goal;
}

export default user;
```

Import both:

```javascript
import user, {
    getUserGoal
} from "./user.js";
```

The default export is imported first, followed by the named export.

---

# 6. Module Organization

As applications grow, JavaScript can be separated by responsibility.

Example:

```text
src/
├── main.js
├── data/
│   └── projects.js
├── components/
│   ├── navbar.js
│   ├── projectCard.js
│   └── modal.js
├── services/
│   └── api.js
├── utils/
│   ├── format.js
│   └── storage.js
└── theme/
    └── theme.js
```

Each module has a specific purpose.

This makes the project easier to:

- Understand
- Maintain
- Debug
- Extend
- Reuse

---

# 7. Module Entry Point

An application often has one main entry point.

Example:

```text
main.js
```

It can import functionality from other modules and bring the application together.

Example:

```javascript
import user from "./user.js";
import {
    getUserGoal
} from "./user.js";

console.log(user.name);
console.log(getUserGoal());
```

---

# 8. HTML Module Setup

When using ES Modules in a browser, the script must use:

```html
<script type="module" src="app.js"></script>
```

The `type="module"` attribute tells the browser that the script uses JavaScript modules.

---

# 9. Relative Module Paths

When importing another file, the correct relative path must be used.

Example:

```javascript
import user from "./user.js";
```

The `./` means the file is in the current directory.

Another example:

```javascript
import data from "./data/projects.js";
```

This means the `projects.js` file is inside the `data` folder.

---

# 10. Mini Challenge

Created a product module using a default export.

Example:

```javascript
const product = {
    name: "AI Engineering Course",
    price: 50000,
    category: "Education"
};

export default product;
```

Then imported the product into another module:

```javascript
import product from "./products.js";
```

---

# 11. Bonus Challenge

Created a discount module with a named export.

```javascript
export function calculateDiscount(price, percentage) {
    return price - (price * percentage / 100);
}
```

Imported it:

```javascript
import {
    calculateDiscount
} from "./discount.js";
```

Then combined the default export and named export in `shop.js`.

Example:

```javascript
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
```

Expected output:

```text
Product: AI Engineering Course
Original Price: ₦50000
After 10% Discount: ₦45000
Category: Education
```

---

# 12. Key Concepts Learned

- JavaScript modules
- Named exports
- Default exports
- Importing default exports
- Importing named exports
- Combining default and named exports
- Relative module paths
- Module entry points
- Organizing code by responsibility
- Using ES Modules in HTML

---

# 13. Real-World Application

The same concepts can be used to organize larger applications.

For example:

```text
src/
├── main.js
├── components/
├── services/
├── utils/
├── data/
└── storage/
```

Instead of creating one extremely large JavaScript file, functionality can be separated into smaller, focused modules.

---

# 🧠 Reflection

Today I learned that modules are not only about splitting files.

They are also about organizing an application so that each file has a clear responsibility.

I also learned the difference between named exports and default exports and how both can be used together.

This is an important step toward writing cleaner and more scalable JavaScript applications.

---

# ✅ Day 32 Complete

Topics completed:

- JavaScript Modules
- Default Exports
- Named Exports
- Combining Default + Named Exports
- Module Organization
- Relative Imports
- Module Entry Points
- Product Module
- Discount Module