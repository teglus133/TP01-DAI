import { EJ1 } from "./EJ1.js";

EJ1();
console.log("-----------------------")
import { EJ2 } from "./EJ2.js";

EJ2();
console.log("-----------------------")
import { EJ3 } from "./EJ3.js";

EJ3();
console.log("-----------------------")

import { EJ4 } from "./EJ4.js";
EJ4();

import { Pizza } from "./pizza-services.js"
console.log( await Pizza.getById(3))