const p = new Promise(fulfill => fulfill('PROMISE VALUE'));

p.then(console.log);

console.log('MAIN PROGRAM');
