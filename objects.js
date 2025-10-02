// Singleton
// When we create a object with Constructor.
// Object.create

// Object Literals
const obj = {
  name: "Manikant",
  age: 22,
  greet: function () {
    console.log("Hello, I'm " + this.name);
  },
};

console.log("obj: ", obj);

// The keys of object are always string or symbols
console.log("obj.name: ", obj.name);
console.log("obj['name']: ", obj["name"]);
const key = "age";
console.log("obj[key]: ", obj[key]);
console.log("obj.greet(): ", obj.greet());

// To have symbols as keys
const sym1 = Symbol("key1");
const obj2 = {
  [sym1]: "someValue",
};
console.log("obj2: ", obj2);
console.log("obj2[sym1]: ", obj2[sym1]);

// To freeze an object
Object.freeze(obj);
obj.name = "Sharma"; // This will not change the name as object is freezed
console.log("obj after freeze: ", obj);

const obj3 = Object.assign({}, obj, obj2);
console.log("obj3: ", obj3);

const keys = Object.keys(obj3);
console.log("keys: ", keys);

const values = Object.values(obj3);
console.log("values: ", values);

const entries = Object.entries(obj3);
console.log("entries: ", entries);

const hasKey = obj3.hasOwnProperty("name");
console.log("hasKey: ", hasKey);

const obj4 = { ...obj, ...obj2 };
console.log("obj4: ", obj4);
