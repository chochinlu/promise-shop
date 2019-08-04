const p = new Promise((fullfill, reject) => {
  fullfill('I FIRED');
  reject(Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
}

p.then(console.log, onRejected);
