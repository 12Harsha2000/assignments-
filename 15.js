const pinCode = "686510";

if (pinCode.length === 6 && pinCode.startsWith("5") && pinCode.includes("0")) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
} 
