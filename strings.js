const myName = "Manikant Sharma";
console.log("typeof myName: ", typeof myName);

console.log("My name: ", myName);

console.log("Length of my name: ", myName.length);

console.log("Index of 'S' in my name: ", myName.indexOf("S"));

console.log("Slice my name from index 0 to 8: ", myName.slice(0, 8));

console.log(
  "Replace 'Manikant' with 'Mani': ",
  myName.replace("Manikant", "Mani")
);

console.log("Convert my name to uppercase: ", myName.toUpperCase());

console.log("Convert my name to lowercase: ", myName.toLowerCase());

console.log(
  "Concatenate ' is a developer' to my name: ",
  myName.concat(" is a developer")
);

console.log("Split my name by space: ", myName.split(" ", 1));

const greeting = new String("Hello");
console.log("typeof greeting: ", typeof greeting);
console.log("greeting: ", greeting);
console.log("Length of greeting: ", greeting.length);
console.log("Index of 'e' in greeting: ", greeting.indexOf("e"));
console.log("Slice greeting from index 0 to 3: ", greeting.slice(0, 3));
console.log("Replace 'Hello' with 'Hi': ", greeting.replace("Hello", "Hi"));
console.log("Convert greeting to uppercase: ", greeting.toUpperCase());
console.log("Convert greeting to lowercase: ", greeting.toLowerCase());
console.log("Concatenate ' World' to greeting: ", greeting.concat(" World"));
