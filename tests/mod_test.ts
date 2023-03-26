/** The type_of module tests. */
import { assertEquals } from "./test_deps.ts";
import { type_of as etype_of } from "../mod.ts";

/** Set some terminal color. */
const BG_BLUE = "\x1b[44m";
const FG_WHITE = "\x1b[37m";
const TITLE = BG_BLUE + FG_WHITE;
const RESET = "\x1b[0m";

// The type_of method imported
function type_of(src: unknown): string {
  return etype_of(src);
}

// The test method
function test(id: number, cmd: string, expect: string) {

  Deno.test(`\n${TITLE} Test${id} ${RESET}`, () => {
    
    console.log('Command: ' + cmd);
    console.log('Return: ' + eval(cmd));
  
    assertEquals(eval(cmd).toString(), expect);
  
  });

}

/** Start the tests ----------------------------------------------------------- */
type_of('test');
// test(1, `type_of( null )`, `null`);
// test(2, `type_of( undefined )`, `undefined`);
// test(3, `var x; type_of( x )`, `undefined`);
// test(4, `type_of( void 0 )`, `undefined`);
// test(5, `type_of( true )`, `boolean`);
// test(6, `type_of( 12345 )`, `number`);
// test(7, `type_of( BigInt('9007199254740995') )`, `bigint`);
// test(8, `type_of( 'test' )`, `string`);
// test(9, `type_of( Symbol() )`, `symbol`);
// test(10, `var a = function(){}; type_of(a);`, `function`);
// test(11, `type_of( {} )`, `object`);

// test(12, `type_of( NaN )`, `NaN`);
// test(13, `type_of( -Infinity )`, `-Infinity`);
// test(14, `type_of( +Infinity )`, `Infinity`);
// test(15, `type_of( Infinity )`, `Infinity`);
// test(16, `var a = function(){}; type_of(a)`, `AnonymousFunction`);
// test(17, `var b = null; var a = function(id){ b = arguments; }; a(1); type_of(b)`, `Arguments`);
// test(18, `type_of(globalThis)`, `globalThis`);
// test(19, `type_of(window)`, `globalThis`);
// test(19, `type_of(new String())`, `String`);
//test(20, `type_of(/\s/)`, `RegExp`);
//test(21, `type_of(Math)`, `Math`);
//test(22, `type_of(Date)`, `Date`);
// test(23, `type_of(Map)`, `Map`);

// Functions
//test(24, `type_of(eval)`, `eval`);
//test(25, `type_of(isFinite)`, `isFinite`);
//test(26, `type_of(isNaN)`, `isNaN`);
//test(27, `type_of(parseFloat)`, `parseFloat`);
//test(28, `type_of(parseInt)`, `parseInt`);
//test(29, `type_of(decodeURI)`, `decodeURI`);
//test(30, `type_of(decodeURIComponent)`, `decodeURIComponent`);
//test(31, `type_of(encodeURI)`, `encodeURI`);
//test(32, `type_of(encodeURIComponent)`, `encodeURIComponent`);
//test(33, `type_of(escape)`, `escape`);
//test(34, `type_of(unescape)`, `unescape`);

// Errors
//test(35, `type_of(Error)`, `Error`);
//test(36, `type_of(new Error())`, `Error`);
//test(37, `type_of(AggregateError)`, `AggregateError`);
test(38, `type_of(EvalError)`, `EvalError`);
test(39, `type_of(new EvalError())`, `EvalError`);


// Objects
//test(22, `type_of(new Date())`, `Date`);


//test(13, `type_of( [], true )`, `Array`);



// test(11, ``, ``);
// test(12, ``, ``);
// test(13, ``, ``);
// test(14, ``, ``);
// test(15, ``, ``);
// test(16, ``, ``);
// test(17, ``, ``);
// test(18, ``, ``);
// test(19, ``, ``);
// test(20, ``, ``);
// test(21, ``, ``);
// test(22, ``, ``);
// test(23, ``, ``);
// test(24, ``, ``);
// test(25, ``, ``);










/*



Deno.test(`\n${TITLE} Test14 ${RESET}`, () => {

  console.log(`type_of( JSON, true ) === "${type_of(JSON, true)}"`);
  assertEquals(type_of(JSON, true), "json");

});

Deno.test(`\n${TITLE} Test15 ${RESET}`, () => {

  console.log(`type_of( Math, true ) === "${type_of(Math, true)}"`);
  assertEquals(type_of(Math, true), "math");

});

Deno.test(`\n${TITLE} Test16 ${RESET}`, () => {

  console.log(`type_of( /a-z/, true ) === "${type_of(/a-z/, true)}"`);
  assertEquals(type_of(/a-z/, true), "regexp");

});

Deno.test(`\n${TITLE} Test17 ${RESET}`, () => {

  console.log(`type_of( function foo(){}, true ) === "${type_of(function foo() { }, true)}"`);
  assertEquals(type_of(function foo() { }, true), "foo");

});

Deno.test(`\n${TITLE} Test18 ${RESET}`, () => {

  console.log(`type_of( ()=>{}, true ) === "${type_of(() => { }, true)}"`);
  assertEquals(type_of(() => { }, true), "anonymous");

});

Deno.test(`\n${TITLE} Test19 ${RESET}`, () => {

  console.log(`type_of( class foo {}, true ) === "${type_of(class foo { }, true)}"`);
  assertEquals(type_of(class foo { }, true), "foo");

});

Deno.test(`\n${TITLE} Test20 ${RESET}`, () => {

  console.log(`type_of( NaN, true ) === "${type_of(NaN, true)}"`);
  assertEquals(type_of(NaN), "number");

});

Deno.test(`\n${TITLE} Test21 ${RESET}`, () => {

  console.log(`type_of( Infinity, true ) === "${type_of(Infinity, true)}"`);
  assertEquals(type_of(Infinity, true), "infinity");

});

Deno.test(`\n${TITLE} Test22 ${RESET}`, () => {

  console.log(`type_of( window, true ) === "${type_of(window, true)}"`);
  assertEquals(type_of(window, true), "window");

});

Deno.test(`\n${TITLE} Test23 ${RESET}`, () => {

  console.log(`type_of( globalThis, true ) === "${type_of(globalThis, true)}"`);
  assertEquals(type_of(globalThis, true), "window");

});

Deno.test(`\n${TITLE} Test24 ${RESET}`, () => {

  console.log(`type_of( eval, true ) === "${type_of(eval, true)}"`);
  assertEquals(type_of(eval, true), "eval");

});

Deno.test(`\n${TITLE} Test25 ${RESET}`, () => {

  console.log(`type_of( Date, true ) === "${type_of(Date, true)}"`);
  assertEquals(type_of(Date, true), "date");

});

Deno.test(`\n${TITLE} Test26 ${RESET}`, () => {

  console.log(`type_of( Error, true ) === "${type_of(Error, true)}"`);
  assertEquals(type_of(Error, true), "error");

});

Deno.test(`\n${TITLE} Test27 ${RESET}`, () => {

  console.log(`type_of(new Error(), true ) === "${type_of(new Error(), true)}"`);
  assertEquals(type_of(new Error(), true), "Error");

});

Deno.test(`\n${TITLE} Test28 ${RESET}`, () => {

  console.log(`type_of( new RangeError(), true ) === "${type_of(new RangeError(), true)}"`);
  assertEquals(type_of(new RangeError(), true), "RangeError");

});


/** Extended Tests --------------------------------------------------------------------------------- */

/*
Deno.test(`\n${TITLE} JavaScript Type: string with extended ${RESET}`, () => {

  console.log(`type_of( 'foo', true ) === "${type_of('foo', true)}"`);
  assertEquals(type_of('foo', true), "string");

});


Deno.test(`\n${TITLE} JavaScript Type: object with extended ${RESET}`, () => {

  console.log(`type_of( {}, true ) === "${type_of({}, true)}"`);
  assertEquals(type_of({}, true), "object Object");

});

Deno.test(`\n${TITLE} JavaScript Type: Date with extended ${RESET}`, () => {

  console.log(`type_of( Date, true ) === "${type_of(Date, true)}"`);
  assertEquals(type_of(Date, true), "function Date");

});

Deno.test(`\n${TITLE} JavaScript Type: eval with extened ${RESET}`, () => {

  console.log(`type_of( eval, true ) === "${type_of(eval, true)}"`);
  assertEquals(type_of(eval, true), "function eval");

});

Deno.test(`\n${TITLE} JavaScript Type: function with extended ${RESET}`, () => {

  console.log(`type_of( function foo(){}, true ) === "${type_of(function foo() { }, true)}"`);
  assertEquals(type_of(function foo() { }, true), "function foo");

});

Deno.test(`\n${TITLE} JavaScript Type: anonymous function with extended ${RESET}`, () => {

  console.log(`type_of( ()=>{}, true ) === "${type_of(() => { }, true)}"`);
  assertEquals(type_of(() => { }, true), "function anonymous");

});

Deno.test(`\n${TITLE} JavaScript Type: class with extended ${RESET}`, () => {

  console.log(`type_of( class foo {}, true ) === "${type_of(class foo { }, true)}"`);
  assertEquals(type_of(class foo { }, true), "function foo");

});

Deno.test(`\n${TITLE} JavaScript Type: new class with extended ${RESET}`, () => {

  console.log(`type_of( new class foo {}, true ) === "${type_of(new class foo { }, true)}"`);
  assertEquals(type_of(new class foo { }, true), "object foo");

});

Deno.test(`\n${TITLE} JavaScript Type: Error with extended ${RESET}`, () => {

  console.log(`type_of( Error, true ) === "${type_of(Error, true)}"`);
  assertEquals(type_of(Error, true), "function Error");

});

Deno.test(`\n${TITLE} JavaScript Type: new Error() with extended ${RESET}`, () => {

  console.log(`type_of( new Error(), true ) === "${type_of(new Error(), true)}"`);
  assertEquals(type_of(new Error(), true), "error Error");

});

Deno.test(`\n${TITLE} JavaScript Type: RangeError with extended ${RESET}`, () => {

  console.log(`type_of( RangeError, true ) === "${type_of(RangeError, true)}"`);
  assertEquals(type_of(RangeError, true), "function RangeError");

});

Deno.test(`\n${TITLE} JavaScript Type: new RangeError() with extended ${RESET}`, () => {

  console.log(`type_of( new RangeError(), true ) === "${type_of(new RangeError(), true)}"`);
  assertEquals(type_of(new RangeError(), true), "error RangeError");

});
*/
/** Check extended with number. -------------------------------------------------------------- */
/*
Deno.test(`\n${TITLE} JavaScript Type: 0 number number with extended ${RESET}`, () => {

  console.log(`type_of( 0, true ) === "${type_of(0, true)}"`);
  assertEquals(type_of(0, true), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: number with extended ${RESET}`, () => {

  console.log(`type_of( 12345, true ) === "${type_of(12345, true)}"`);
  assertEquals(type_of(12345, true), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: negative number with extended ${RESET}`, () => {

  console.log(`type_of( -12345, true ) === "${type_of(-12345, true)}"`);
  assertEquals(type_of(-12345, true), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: float number with extended ${RESET}`, () => {

  console.log(`type_of( 12345.67, true ) === "${type_of(12345.67, true)}"`);
  assertEquals(type_of(12345.67, true), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: negative float number with extended ${RESET}`, () => {

  console.log(`type_of( -12345.67, true ) === "${type_of(-12345.67, true)}"`);
  assertEquals(type_of(-12345.67, true), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: NaN number with extended ${RESET}`, () => {

  console.log(`type_of( NaN, true ) === "${type_of(NaN, true)}"`);
  assertEquals(type_of(NaN, true), "nan");

});

Deno.test(`\n${TITLE} JavaScript Type: Infinity number with extended ${RESET}`, () => {

  console.log(`type_of( Infinity, true ) === "${type_of(Infinity, true)}"`);
  assertEquals(type_of(Infinity, true), "infinity");

});

Deno.test(`\n${TITLE} JavaScript Type: BigInt with extended ${RESET}`, () => {

  console.log(`type_of( BigInt('9007199254740995'), true ) === "${type_of(BigInt('9007199254740995'), true)}"`);
  assertEquals(type_of(BigInt('9007199254740995'), true), "bigint");

});

Deno.test(`\n${TITLE} JavaScript Type: 1.0 with extended ${RESET}`, () => {

  console.log(`type_of( 1.0, true ) === "${type_of(1.0, true)}"`);
  assertEquals(type_of(1.0, true), "number");

});
*/
/** check for string object ----------------------------------------------- */
/*
Deno.test(`\n${TITLE} JavaScript Type: string object with extended ${RESET}`, () => {

  console.log(`type_of( new String("foo"), true ) === "${type_of( new String("foo"), true)}"`);
  assertEquals(type_of( new String("foo"), true), "String");

});
*/