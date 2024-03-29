# Till Counter

A basic React app that lets you count money!

**Link to project:** https://morgandival.github.io/till-counter/

## How It's Made:

**Tech used:** React, TypeScript

Calculators are nice, but what happens if you make a mistake? You have to start all over again!

So I built this app to help me count up all of my dollarydoos!

React states keep track of the values entered, display a count of each denomination, and maintain a running total at the bottom.

Each currency option dynamically generates the relevant denominations and displays the symbols of that currency.

## Upgrades:

- [x] Denomination counts based on amounts entered!
- [x] Separation of denomination fields into their own child components!
- [x] Better handling and display of invalid values!
- [x] Alternative currencies!!! (AUD, EUR, JPY, NZD, USD)
- [x] Alternative currencies 2.0: change the symbol for currencies that don't use dollars!
- [x] Reset button: click to reset to 0.00 so you can start again without refreshing!
- [x] Reset on currency change!
- [x] Ability to toggle sorting of currency order!
- [x] Pull types out into own type definition file!

## Known Issues:

- Currently none, but if one is found, please let me know.

## Resolved Issues:

- Some values don't display their counts correctly: resolved by adding rounding when checking for modulus before displaying.
- Changing currencies carried existing values over to new currency: resolved by adding the same logic from the reset button to the currency selector onChange event.

## Lessons Learned:

- React states are tricky, but it is good to keep in mind that changing the state doesn't immediately force a re-render of the components.
- Also, passing props between parent and child components is not as difficult as it looks, so long as the types match up.
- Lifting states up is also a fairly straight forward process, again keeping in mind the types.
- Allowing for alternative currency symbols required reworking the denominations array into a currency object with the symbol as a string property and the denominations array as another property.
- It is a good idea to keep in mind when dealing with currency to work with integers and divide when necessary. Also, rounding is important when working with JS numbers and modulus.
- Resetting on currency change required duplication of the reset button logic, and I should work on learning how to pass functions to child components.
- Refactoring arrow functions was a fun exercise that made me think about writing more efficient but still legible code. (Implicit returns and ternary if statements)
- After doing some research, I've come to the realisation that the total does not need to be stored in a useState variable since I'm calling a function to add the fields together anyway. So I removed it.
- Discovered object literals as an alternative to switch statements. Much neater to implement, especially with big long lists like the different denominations.
- I've begun looking into writing unit tests for my React components. So far so good.
- Distillation of types from the components into their own file is something I've always wanted to learn, and now I have. There are a couple of types used in this project that were duplicated in a few places. That has been rectified by pullint them out in to their own types definition file.
