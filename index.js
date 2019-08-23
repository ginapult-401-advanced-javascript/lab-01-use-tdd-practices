'use strict';

const validator = require('./lib/validator');


// Vinicio - add some code here to be able to use the module using console.log



console.log('I am going to test if a value is one');
console.log(validator.isValid(123123, 'one'));

console.log(validator.isValid('I am a negative value: -1', 'negative'));


console.log('I am going to test if a value is a number');
console.log(validator.isNumber(2, 'number'));

console.log('I am going to test if a values is an array');
console.log(validator.isThisAnArray(['a'], true));

console.log('I am going to test to see if a required property is present');
console.log(validator.hasRequiredProperty({color: 'purple'}, 'color'));
