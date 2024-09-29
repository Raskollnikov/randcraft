[NPM](https://www.npmjs.com/package/randcraft)

# Randcraft<br>

A utility library for generating random numbers, strings, and validating phone numbers.<br>
Randcraft provides developers with essential functions to handle randomness and phone number validation<br> making it easier to integrate these features into applications.

## Features<br>

- **Generate Random Numbers**: Easily create random integers and floating-point numbers within specified ranges.<br>
- **Generate Random Strings**: Create random strings with customizable lengths and character sets.<br>
- **Phone Number Validation**: Validate phone numbers based on various international formats, ensuring they conform to the correct structure for different countries.<br>

## Phone Number Validation<br>

The phone number validation function allows you to verify if a given phone number is valid according <br>
to specific country formats. Supported countries include:<br>

- **United States**: Formats like (123) 456-7890 or 123-456-7890<br>
- **United Kingdom**: Formats like +447123456789 or 07123 456789<br>
- **Georgia**: Formats like +995 5XX XXX XXX or +9955XX-XXX-XXX<br>
- **And more**: The library supports validation for multiple popular countries.<br>

### Usage

To use the library, first install it via npm:<br>

```bash
npm install randcraft
```

Importing Functions<br>

Using CommonJS (Node.js)
const { generateRandomNumber, generateRandomString, validatePhoneNumber } = require('randcraft');<br>

Using ES6 Modules<br>
If you're using a module bundler or an environment that supports ES6 modules, you can import the library as follows:<br>
import { generateRandomNumber, generateRandomString, validatePhoneNumber } from 'randcraft';<br>

<br>

Public Methods<br>
<br>
validatePhoneNumber(phoneNumber, country = 'GE')<br>
Validates a phone number based on common patterns for different countries. The country parameter can be <br>specified to validate against a specific country's format (default is Georgia).<br>
The function also allows validation without the country code.<br>

Parameters:<br>

phoneNumber (string): The phone number to validate.<br>
country (string, optional): The country code (default is 'GE' for Georgia).<br>
Returns: true if the phone number is valid; otherwise, false.<br>
<br>
console.log(validatePhoneNumber("+995 599 123 456")); // true (valid Georgian number)<br>
console.log(validatePhoneNumber("599 123 456")); // true (valid Georgian number without country code)<br>
console.log(validatePhoneNumber("+1 123 456 7890", 'US')); // true (valid US number)<br>

<br>
<br>
generateRandomNumber(min, max)<br>
Generates a random integer between the given min and max (inclusive).<br>

Parameters:<br>

min (number): The minimum value (inclusive).<br>
max (number): The maximum value (inclusive).<br>
Returns: A random integer between min and max.

Example:<br>
const randomNumber = generateRandomNumber(1, 100);<br>
console.log(randomNumber); // Example output: 42<br>

<br>
<br>

generateRandomString(length)<br>
Generates a random string of the specified length using alphanumeric characters.<br>

Parameters:<br>

length (number): The length of the generated string.<br>
Returns: A random alphanumeric string.<br>

Example:<br>
const randomString = generateRandomString(10);<br>
console.log(randomString); // Example output: 'a1b2c3d4e5'<br>
<br>
<br>
License<br>
This project is licensed under the MIT License.<br>
<br>
Author<br>
Arsen Akhalaia<br>
