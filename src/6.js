const p = Promise.reject(new Error('error'));

p.then(null, err => console.log(err.message)).catch(err =>
  console.log(err.message)
);
