import './styles/style.css';
import 'react';
import 'react-dom';

const message = 'Hello world from .NET meetup! :)'

console.log(message);

const element = document.createElement('h1');
element.innerHTML = message;
document.body.appendChild(element);

const image = document.createElement('div');
image.className = 'image';
document.body.appendChild(image);