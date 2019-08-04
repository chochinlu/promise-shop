// function first() {
//   return Promise.resolve('secrect');
// }

// function second(value) {
//   return Promise.resolve(value);
// }

// function onFulfilled(res) {
//   console.log(res);
// }

// first()
//   .then(second)
//   .then(onFulfilled);

first()
  .then(second)
  .then(console.log);
