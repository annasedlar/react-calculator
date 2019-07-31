# React Calculator

<div align="center">
  <img src="calc.gif" alt="Calculator Demo" width="400"/>
</div>

## To Run: 
To run, install dependencies: `npm install/yarn add`
start server: `npm start/yarn start`

## Tests: 
I ran out of time before I was able to write tests, which is a shame because there definitely are some calculation bugs. I am most familiar with integration testing with [cypress.io](https://www.cypress.io/) but am familiar with unit testing as well. 

## Features: 
I ran out of time before I was able to get this project looking/functioning exactly how I would like. I spent too much time on the styling initially, but moved on to functionality before I got the buttons spaced correctly with flexbox. 

I used [`immutability-helper`](https://github.com/kolodny/immutability-helper) within my Redux store to ensure data immutability and ease of working with nested data.

If I had more time, I would refactor how I am currently storing button presses. Currently, each button press is stored in one of two arrays, which represent each number upon which the operator should operate (to ensure you can add multiple-digit numbers). There is currently no way to use the total from one operation as the first number in a new operation, which I would have liked to code, but ran out of time. 

I would have liked to map through an array of digits in `ButtonRow.js` to build the buttons instead of imperatively setting each digit.

And lastly, currently the separation of stateful and stateless components is hardly existent. `Button` should ideally not be concerned with state at all, and be purely a presentational ("dumb") component. I would have liked `Button` to be a functional component in this case as well. 

Thanks for your consideration. There were many optimizations I wish I could have made (and tests!) but as I was already a bit over the 2 hour limit, this was what I finished with!
