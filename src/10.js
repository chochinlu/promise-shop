function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(num = 1) {
  console.log(num);
  return num + 1;
}

Promise.resolve(iterate())
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(error => console.log(error.message));
