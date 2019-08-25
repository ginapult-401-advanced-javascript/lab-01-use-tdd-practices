# LAB - 01 - Node Ecosystem

## Test Driven Development (TDD) & Continous Integration (CI)

### Author: Gina Pultorak

### Links and Resources
* [submission PR](https://github.com/ginapult-401-advanced-javascript/deployment-workshop/pulls)
* [travis](https://travis-ci.com/ginapult-401-advanced-javascript/deployment-workshop)


#### Documentation
* n/a

### Modules
#### `validator.js`

##### Exported Values and Methods
###### `isValid(input, rules) -> boolean`
Returns true/false to indicate if valid input.
###### `isString(input) -> boolean`
Returns true/false to indicate if input is string.
###### `isNumber(input) -> boolean`
Returns true/false to indicate if input is a number.
###### `isThisAnArray(input) -> boolean`
Returns true/false to indicate if input is an array.
###### `isObject(input) -> boolean`
Returns true/false to indicate if input is an object.
###### `isBoolean(input) -> boolean`
Returns true/false to indicate if input is a boolean.
###### `isFunction(input) -> boolean`
Returns true/false to indicate if input is a function.
###### `hasRequiredProperty(input) -> boolean`
Returns true/false to indicate if input is a number.


### Setup
#### `.env` requirements
* `PORT` - 3000

 
#### Tests
* Unit Tests: 'npm test'
* Lint Tests: 'npm lint'
