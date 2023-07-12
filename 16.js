const inputString = "madam"; 

const reversedString = inputString.split("").reverse().join("");

if (inputString === reversedString) {
  console.log("YES");
} else {
  console.log("NO");
}
