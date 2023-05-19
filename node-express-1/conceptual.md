### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- you can use callbacks, promises, or asyinc/await

- What is a Promise?
- it is a javascript object that represents the eventual completion of an asynchronous operation. 
- it can either be Pending, fulfulled or rejected.

- What are the differences between an async function and a regular function?
- a async function can use the keyword 'await' to pause its execution and wait for the promise to resolve or be reject. where as a regular function won't wait for the promise to resolve.

- What is the difference between Node.js and Express.js?
- Node.js is a runtime enviroment that makes it so javascript can be used as a serverside language. Whereas Express.js is a framework for building web apps and APIs

- What is the error-first callback pattern?
- its a pattern where you pass a callback as the last function of a asynchronous function. in this callback it takes two parameters, an error object and the second is the result of the operation. if the operation is successful the error object will be null, and the result will be passed as the second argument.
- const fs = require('fs');

fs.readFile('file.txt', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

- What is middleware?
- middleware refers to functions or components that sit between the incoming request and the outgoing response in the application's request-response lifecycle. so it can be a function that is used upon each request without writing that function in every route function.
- example would be if you had to verify a user you can make a middleware function that verifys the user. that can be used on some or all the routes in your app.

- What does the `next` function do?
- its a function put in middleware to signal express that the middleware function is finished and should be passed to the other route functions. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
- there are 3 different await requests in a row so one will wait to be fulfilled before moving to the next instead you can send them then await all in something like 
- ```js
   await promise.all([elie, joel, matt])
- ```
- there also is no error handling which can cause a lot of problems

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
