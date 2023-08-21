// Node.Js Modules 

// importing fs module
const fs = require("fs");

let text = fs.readFileSync("sample.txt", "utf-8");
console.log(text);

text = text.replace("Hello", "hii");

console.log("The content of the file is updated ...")
console.log(text);

// creating a new file --------{fs.writeFileSync() module is used}
console.log("Creating a new file...")
fs.writeFileSync("bhupi.txt", text);
