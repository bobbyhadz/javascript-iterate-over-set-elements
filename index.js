// EXAMPLE 1 - Iterate over the Elements of a Set in JavaScript

const set1 = new Set(['bobby', 'hadz', 'com']);

// ✅ ️ using forEach
set1.forEach(element => {
  console.log(element); // 👉️ bobby, hadz, com
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Iterate over the Elements of a Set using a `for...of` loop

// const set1 = new Set(['bobby']);

// set1.add('hadz');
// set1.add('com');

// // ✅ using for...of
// for (const element of set1) {
//   console.log(element); // 👉️ bobby, hadz, com
// }
