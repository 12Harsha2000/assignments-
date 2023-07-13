const scalePrice = 10;
const scaleQuantity = 2;

const penPrice = 15;
const penQuantity = 3;

const bookPrice = 20;
const bookQuantity = 1;

const totalScale = scalePrice * scaleQuantity;
const totalPen = penPrice * penQuantity;
const totalBook = bookPrice * bookQuantity;

const totalAmount = totalScale + totalPen + totalBook;

console.log("Total amount for scale: " + totalScale);
console.log("Total amount for pen: " + totalPen);
console.log("Total amount for book: " + totalBook);
console.log("Total amount for all items: " + totalAmount);
      