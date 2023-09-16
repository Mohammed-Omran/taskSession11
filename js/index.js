// Task1

// create elements

let div = document.createElement('div');
let span = document.createElement('span');
let p = document.createElement('p');
let a = document.createElement('a');

// add text to every element

div.textContent = 'This is div';
span.textContent = 'This is span';
p.textContent = 'This is paragraph';
a.textContent = 'This is link';

// add color to every element

div.style.color = 'yellow';
span.style.color = 'blue';
p.style.color = 'red';
a.style.color = 'green';

// add elements to the body of html

document.body.appendChild(div);
document.body.appendChild(span);
document.body.appendChild(p);
document.body.appendChild(a);


// Task2

// create input(text) + input(number) + textarea

let textInput = document.createElement('input');
textInput.type = 'text';

let numInput = document.createElement('input');
numInput.type = 'number';

let textarea = document.createElement('textarea');

// create form
let form = document.createElement('form');

// put elements inside form
form.appendChild(textInput);
form.appendChild(numInput);
form.appendChild(textarea);

// put form inside body
document.body.appendChild(form);

// put focus on textarea during load
window.onload = function() {
    textarea.focus();
};


// Task3

window.onload = function() {
    let myButton = document.getElementById('idButton');

    let newElement = document.createElement('div');

    newElement.setAttribute('data-attribute', 'new-attribute-value');
    newElement.classList.add('new-class');

    document.body.appendChild(newElement);

    myButton.addEventListener('click', function() {
        alert('Button Clicked!');
    });
};
