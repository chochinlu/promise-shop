function all(promise1, promise2) {
  let counter = 0;
  let result = [];

  return new Promise(resolve => {
    promise1.then(res => {
      result.push(res);
      promise2.then(res => {
        result.push(res);
        resolve(result);
      });
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
