# Till Counter

A basic React app that lets you count money!

**Link to project:** https://morgandival.github.io/till-counter/

## How It's Made:

**Tech used:** React, TypeScript

Calculators are nice, but what happens if you make a mistake? You have to start all over again!

So I built this app to help me count up all of my dollarydoos!

It uses React states to keep track of the values entered, display a count of each denomination, and maintains a running total at the bottom.

## Upgrades:

- [x] Denomination counts based on amounts entered
- [x] Separation of denomination fields into their own child components
- [x] Better handling and display of invalid values
- [x] Alternative currencies!!! (AUD, NZD, USD)

## Lessons Learned:

React states are tricky, but it is good to keep in mind that changing the state doesn't immediately force a re-render of the components.

Also, passing props between parent and child components is not as difficult as it looks, so long as the types match up.

Lifting states up is also a fairly straight forward process, again keeping in mind the types.

It is a good idea to keep in mind when dealing with currency to work with integers and divide when necessary.
