/** The type_of module tests. */
import { assertEquals } from "./test_deps.ts";
import { type_of as etype_of } from "../mod.ts";

/** Set some terminal color. */
const BG_BLUE = "\x1b[44m";
const FG_WHITE = "\x1b[37m";
const TITLE = BG_BLUE + FG_WHITE;
const RESET = "\x1b[0m";

// The type_of method imported
function type_of(src: unknown, extended: boolean = false): string {
  return etype_of(src, extended);
}

// The test method
function test(id: number, cmd: string, expect: string) {

  Deno.test(`\n${TITLE} Test${id} ${RESET}`, () => {
    
    console.log('Command: ' + cmd);
    console.log('Return: ' + eval(cmd));
  
    assertEquals(eval(cmd), expect);
  
  });

}

/** Start the tests ----------------------------------------------------------- */

test(1, `type_of( null )`, `null`);
test(2, `type_of( undefined )`, `undefined`);
// await test(3, `var x; type_of( x )`, `undefined`);
// await test(4, `type_of( void 0 )`, `undefined`);
// await test(5, `type_of( true )`, `boolean`);
// await test(6, `type_of( 12345 )`, `number`);
// await test(7, `type_of( BigInt('9007199254740995') )`, `bigint`);
// await test(8, `type_of( 'test' )`, `string`);
// await test(9, `type_of( Symbol() )`, `symbol`);
// await test(10, `var a = function(){}; type_of(a);`, `function`);
// await test(11, `type_of( {} )`, `object`);

// await test(12, `type_of( NaN, true )`, `NaN`);
// await test(13, `type_of( -Infinity, true )`, `-Infinity`);
// await test(14, `type_of( +Infinity, true )`, `Infinity`);
// await test(15, `type_of( Infinity, true )`, `Infinity`);
// await test(16, `var a = function(){}; type_of(a, true )`, `AnonymousFunction`);
// await test(17, `var b = null; var a = function(id){ b = arguments; }; a(1); type_of(b, true)`, `Arguments`);
// await test(18, `type_of(globalThis, true)`, `globalThis`);
// await test(19, `type_of(window, true)`, `globalThis`);
// await test(19, `type_of(new String(), true)`, `String`);
// await test(20, `type_of(/\s/, true)`, `RegExp`);
// await test(21, `type_of(Math, true)`, `Math`);
// await test(22, `type_of(new Date(), true)`, `Date`);
// await test(23, `type_of(Map, true)`, `Map`);



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