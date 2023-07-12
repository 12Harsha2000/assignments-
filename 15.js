const pinCode = "686510";

const isValid = pinCode.length === 6 && pinCode.startsWith("5") && pinCode.includes("0");

if (isValid) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}
