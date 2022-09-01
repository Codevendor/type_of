# type_of
> A global method written in typescript to fix the javascript typeof operator. This code is written as a module for the deno runtime.
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
While programming many years with JavaScript, I've ran into many bugs using the typeof operator to check data types. 
The bugs have carried over to using TypeScript as well. I decided to research all the bugs and build an alternative typeof as a global method named type_of(). This module is created to work on the deno runtime.

This also now carrys over into 
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- **Deno** - version 1.25.0
- **TypeScript** - version 4.7.4
- **V8** - version 10.4.132.20


## Features
List the ready features here:
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



## Screenshots
![Visual Studio Code](./assets/visual-studio.jpg)

## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


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


Example Javascript Primitive Types:
- undefined
- null
- number
- string
- boolean

`type_of( undefined ) === "undefined"`


## Project Status
Project is: _in progress_ 


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
- This project was based on [this tutorial](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/).
- Thanks to [Angus croll](https://github.com/angus-c)

## Contact
Created by [@Codevendor](https://codevendor.com/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
