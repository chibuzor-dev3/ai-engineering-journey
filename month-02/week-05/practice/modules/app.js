import {
    greet,
    farewell
} from "./greetings.js";

import {
    user,
    introduceUser
} from "./user.js";


console.log(greet(user.name));

console.log(introduceUser());

console.log(farewell(user.name));