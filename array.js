var ar=['apple','grapes','mango'];
console.log(ar.length);  //3

ar.push('banana');  // push new element at the end
console.log(ar);    // ["apple", "grapes", "mango", "banana"]

ar.pop();  // delete an element at the end
console.log(ar);    // ["apple", "grapes", "mango"]

ar.shift();  // delete an element at the start
console.log(ar);    // ["grapes", "mango"]

ar.unshift("banana"); // add an element at the start of an element
console.log(ar);     // ["banana","grapes", "mango"]


