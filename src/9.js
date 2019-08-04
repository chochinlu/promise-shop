function parsedPromised(json) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  });
}

parsedPromised(process.argv[2])
  .then(console.log)
  .catch(err => console.log(err.message));
