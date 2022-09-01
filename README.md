# type_of
> A global method written in typescript to fix the javascript typeof operator. This code is written as a module for the deno runtime.
> Live demo [_here_](https://codevendor.com). 

## Table of Contents
* [General Info](#general-info)
* [Features](#features)
* [Tech](#tech)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Examples](#examples)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
* [License](#license)


## General Info
While programming many years with JavaScript, I've ran into many bugs using the typeof operator to check data types. 
The bugs have carried over to using TypeScript as well. I decided to research all the bugs and build an alternative typeof as a global method named type_of(). This module is created to work on the deno runtime.


## Features
Below are the current features of the type_of module.
- Proper undefined check
- Proper null check
- Can type check all common JavaScript primitive types.
- Can type check all methods including anonymous arrow functions.
- Can type check objects
- Can type check arrays
- Using extended option can return class names.
- Can type check new JavaScript types like bigint and symbol.
- Can type check internal JavaScript functions like eval, JSON, NaN, etc.
- Has special boolean called extended for returning an object from typeof with name and type.
- JavaScript Errors can return proper type and name.

## Tech
- **Deno** - version 1.25.0
- **TypeScript** - version 4.7.4
- **V8** - version 10.4.132.20
- **Visual Studio Code** - 1.70+


## Screenshots
![Visual Studio Code](./assets/visual-studio.jpg)


## Setup
Things you will need to get this module running. You will need to install Deno runtime for Javascript / TypeScript.

- [Deno Installation](https://deno.land/manual@v1.25.0/getting_started/installation)
- [Visual Studio Code Installation](https://code.visualstudio.com/Docs/setup/setup-overview)
- [Deno Plugin Install for VSC](https://deno.land/manual@v1.25.0/vscode_deno)


### Installing code from github
```bash
    # git clone git@github.com:Codevendor/type_of.git
```


### Installing code from deno.land
```bash
    # Coming soon
```


## Usage
I will describe the general usage here. I built the code to use the common typeof operator practice, but fix the bugs while extending it with new features.

### Global Method: type_of

| Global Method Name                        |
| :---------------------------------------- |
| **type_of**( **src:** unknown )  |
| **type_of**( **src:** unknown, **extended:** boolean = false )  |

| Param Name        | Type          | Description                                                                        |
| :----------------- | :------------- | :---------------------------------------------------------------------------------- |
| **src**           | any           | The unknown **src** to check type of.                                                  |
| **extended**      | boolean       | Returns **type_of_value** object with extra information like name.                 |


| Return Type(s)       | Description                                                                                       |
| :----------------- | :------------------------------------------------------------------------------------------------- |
| **string**        | Returns a **string** from the type check of the **src**.                                |
| **type_of_value** | When param (**extended** = true), returns an **object** with properties **name** and **type**.  |


### Custom Type: type_of_value

| TypeScript Type | Type | Description |
| :--------------- | :--------- | :-------------------|
| **type_of_value** | object | A custom TypeScript type for holding an object's name and type. | 

| Property Name | Type | Description |
| :--------- | :----------- | :----------------------------------------------------------- |
| **name**   | string | The **constructor** name for the object or function.               |
| **type**   | string | The type of the JavaScript value.                             |


### Javascript Primitive Types:
- null
- undefined
- boolean
- number
- string
- symbol
- bigint

### Javascript Complex Type:
- object

### Extended types in type_of module
- array
- anonymous functions
- function names
- class names
- internal javascript function names
- error names

## Examples
Examples will be shown below, but can also be found as assertion tests in the [mod_test.ts](./tests/mod_test.ts) file.

#### Type: unknown
- While **type_of()** cant check for unknown types that spit out **ReferenceErrors**, you can always be safe by starting your check like so. 
```js
window.foo && type_of(foo);
```

#### Type Response List
- Below is response list for using the type_of() method as string response. 
| Example | Response |
| :------ | :------- |
| type_of( undefined ) | "undefined" |
| type_of( void 0 )    | "undefined" |
| type_of( null )      | "null"      |
| type_of( true )      | "boolean"   |
| type_of( 12345 )     | "number"    |
| type_of( "foo" )     | "string"    |
| type_of( Symbol() )      | "symbol"   |
| type_of( BigInt('9007199254740995') )      | "bigint"   |
| type_of( [] )      | "array"   |
| type_of( {} )      | "object"   |
| type_of( JSON )      | "json"   |
| type_of( Math )      | "math"   |
| type_of( /a-z/ )      | "regexp"   |
| type_of( function foo() { } )      | "function"   |
| type_of( () => { } )      | "function"   |
| type_of( class foo { } )      | "function"   |
| type_of( NaN )      | "number"   |
| type_of( Infinity )      | "number"   |
| type_of( window )      | "window"   |
| type_of( globalThis )      | "window"   |
| type_of( eval )      | "function"   |
| type_of( Date )      | "function"   |
| type_of( Error )      | "function"   |
| type_of( new Error() )      | "error"   |
| type_of( new RangeError() )      | "error"   |


-Below is an extended response list of type_of(src, true) method returning a type_of_value object.
| Example | Response |
| :------ | :------- |
| type_of( Date, true ).name | "Date" |
| type_of( Date, true ).type | "function" |
| type_of( eval, true ).name | "eval" |
| type_of( eval, true ).type | "function" |
| type_of( function foo(){}, true ).name | "foo" |
| type_of( function foo(){}, true ).type | "function" |
| type_of( () => {}, true ).name | "anonymous" |
| type_of( () => {}, true ).type | "function" |
| type_of( class foo {}, true ).name | "foo" |
| type_of( class foo {}, true ).type | "function" |
| type_of( Error, true ).name | "Error" |
| type_of( Error, true ).type | "function" |
| type_of( new Error(), true ).name | "Error" |
| type_of( new Error(), true ).type | "error" |
| type_of( RangeError, true ).name | "RangeError" |
| type_of( RangeError, true ).type | "function" |
| type_of( new RangeError(), true ).name | "RangeError" |
| type_of( new RangeError(), true ).type | "error" |
| type_of( new RangeError(), true ).name | "RangeError" |
| type_of( new RangeError(), true ).type | "error" |


## Project Status
Project is: _in progress_ 


## Room for Improvement
- More testing needs to be done.

To do:
- Create deno.land module.
- Update tutorial and code usage examples.


## Acknowledgements
- This project was based on [this tutorial](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/).
- Thanks to [Angus croll](https://github.com/angus-c)

## Contact
Created by [@Codevendor](https://codevendor.com/) - feel free to contact me!


## License
This project is open source and available under the [... MIT License](https://github.com/Codevendor/type_of/blob/main/LICENSE).
