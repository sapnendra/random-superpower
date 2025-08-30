const { randomSuperpower } = require('./index');

console.log("One random power:", randomSuperpower());
console.log("One weird power:", randomSuperpower({ type: "weird" }));
console.log("Three random powers:", randomSuperpower({ count: 3 }));
