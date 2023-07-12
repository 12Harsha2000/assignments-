const sizeCode = "M";

let sizeName;
switch (sizeCode) {
  case "XS":
    sizeName = "Extra Small";
  case "S":
    sizeName = "Small";
    break;
  case "M":
    sizeName = "Medium";
    break;
  case "L":
    sizeName = "Large";
    break;
  case "XL":
    sizeName = "Extra Large";
    break;
  default:
    sizeName = "None";
    break;
}

console.log(sizeName);