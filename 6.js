const scalePrice = 10;
const scaleAmount = 2;

const penPrice = 15;
const penAmount = 3;

const bookPrice = 20;
const bookAmount = 1;

const totalScale = scalePrice * scaleAmount;
const totalPen = penPrice * penAmount;
const totalBook = bookPrice * bookAmount;

const totalAmount = totalScale + totalPen + totalBook;

console.log("Total amount for scale: " + totalScale);
console.log("Total amount for pen: " + totalPen);
console.log("Total amount for book: " + totalBook);
console.log("Total amount for all items: " + totalAmount);
