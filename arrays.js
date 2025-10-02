const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("arr: ", arr);

const arr1 = arr.slice();
console.log("arr1: ", arr1);

const arr2 = arr.splice();
console.log("arr2: ", arr2);
console.log("arr after splice: ", arr);

const arr3 = [1, 2, 3, [4, 5, 6], [7, 8, 9], [10, [11, 12, [14, 15, 16]]]];
const flatArr = arr3.flat(Infinity);
console.log("flatArr: ", flatArr);

const arr4 = Array.from("Manikant Sharma");
console.log("arr4: ", arr4);

const arr5 = Array.of(1, 2, 3, 4, 5);
console.log("arr5: ", arr5);

const arr6 = Array.from({ name: 5 });
console.log("arr6: ", arr6);
