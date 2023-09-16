## Search Task
### DOMContentLoaded
#### It is an event that occurs when a page has fully loaded , When this event occurs, you can execute the codes that need to be executed when the front end of the page is ready and can be interacted with
```
document.addEventListener('DOMContentLoaded', function() {
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button Clicked!');
    });
});
```
### example while loop
```
var correctPassword = "secret";
let attempts = 3;

while (attempts > 0) {
  let password = prompt("Enter your password:");
  
  if (password === correctPassword) {
    console.log("Access granted!");
    break; 
  } else {
    attempts--;
    console.log(`Incorrect password. ${attempts} attempts left.`);
  }
}

if (attempts === 0) {
  console.log("Access denied.");
}
```
### example do while loop
```
let n = 5;
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= n);

console.log(`Factorial of ${n} is ${factorial}`);
```
### has own property 
##### hasOwnProperty method is used to check if an object has a specific property.
```
const myObject = {
  firstName: "Mohamed",
  lastName: "Omran",
  age: 21,
};

if (myObject.hasOwnProperty("firstName")) {
  console.log("myObject has a property called 'firstName'");
} else {
  console.log("myObject does not have a property called 'firstName'");
}
```





