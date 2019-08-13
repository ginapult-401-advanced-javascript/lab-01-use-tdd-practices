'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /

// if you need to setup more complex rules, remember that rules can be an object too

validator.isValid = (input, rules) => {
  // return true;
  if(rules === 'object') {
    // Vinicio - how do I check if the type of the input is an object

  }

  if(rules === 'object') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return input < 0;
  }

  if(rules === 'one') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return input === 1;
  }

};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNumber = (input) => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
validator.isThisAnArray = (input) => {
  return Array.isArray(input) === true;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  if (Array.isArray(input) === false) {
    return typeof input === 'object';
  }
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * Is a required object property present at any level?
 * @param input
 * @returns {boolean}
 */
validator.hasRequiredProperty = (input) => {
  return input.hasOwnProperty('color');
};



