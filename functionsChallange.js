function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello("Alice")); // Hello, Alice

let multiply = function (a, b) {
      return a * b;
}

console.log(multiply(5, 3)); // 15

let divide = (a, b) => { 
    return a / b; 
}
console.log(divide(10, 2)); // 5

function greetUser(surname, name = 'Misafir') {
  return 'Hoş geldin ' + name + ' ' + surname + '!';
}

console.log(greetUser('Doe', 'John')); // Hoş geldin John Doe!
console.log(greetUser('Doe')); // Hoş geldin Misafir Doe!