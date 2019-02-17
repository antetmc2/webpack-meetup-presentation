const message = 'Hello world from .NET meetup! :)'

console.log(message);

const element = document.createElement('h1');
element.innerHTML = message;
document.body.appendChild(element);

const array = [1, 2, 3];

console.log(array.find(element => element === 2));