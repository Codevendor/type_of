/** The type_of module tests. */
import { assertEquals } from "./test_deps.ts";
import {} from "../mod.ts";

/** Set some terminal color. */
const BG_BLUE = "\x1b[44m";
const FG_WHITE = "\x1b[37m";
const TITLE = BG_BLUE + FG_WHITE;
const RESET = "\x1b[0m";

/** Start the tests ----------------------------------------------------------- */

Deno.test(`\n${TITLE} JavaScript Type: undefined ${RESET}`, () => {

  var x;
  console.log(`type_of( undefined ) === "${type_of(undefined)}"`);
  assertEquals(type_of(undefined), "undefined");

});

Deno.test(`\n${TITLE} JavaScript Type: undefined variable ${RESET}`, () => {

  var x;
  console.log(`var x;\ntype_of( x ) === "${type_of(x)}"`);
  assertEquals(type_of(x), "undefined");

});

Deno.test(`\n${TITLE} JavaScript Type: void 0 ${RESET}`, () => {

  console.log(`type_of( void 0 ) === "${type_of(void 0)}"`);
  assertEquals(type_of(void 0), "undefined");

});

Deno.test(`\n${TITLE} JavaScript Type: null ${RESET}`, () => {

  console.log(`type_of( null ) === "${type_of(null)}"`);
  assertEquals(type_of(null), "null");

});

Deno.test(`\n${TITLE} JavaScript Type: number ${RESET}`, () => {

  console.log(`type_of( 12345 ) === "${type_of(12345)}"`);
  assertEquals(type_of(12345), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: bigint ${RESET}`, () => {

  console.log(`type_of( BigInt('9007199254740995') ) === "${type_of(BigInt('9007199254740995'))}"`);
  assertEquals(type_of(BigInt('9007199254740995')), "bigint");

});

Deno.test(`\n${TITLE} JavaScript Type: boolean ${RESET}`, () => {

  console.log(`type_of( true ) === "${type_of(true)}"`);
  assertEquals(type_of(true), "boolean");

});

Deno.test(`\n${TITLE} JavaScript Type: string ${RESET}`, () => {

  console.log(`type_of( 'test' ) === "${type_of('test')}"`);
  assertEquals(type_of('test'), "string");

});

Deno.test(`\n${TITLE} JavaScript Type: array ${RESET}`, () => {

  console.log(`type_of( [] ) === "${type_of([])}"`);
  assertEquals(type_of([]), "array");

});

Deno.test(`\n${TITLE} JavaScript Type: object ${RESET}`, () => {

  console.log(`type_of( {} ) === "${type_of({})}"`);
  assertEquals(type_of({}), "object");

});

Deno.test(`\n${TITLE} JavaScript Type: symbol ${RESET}`, () => {

  console.log(`type_of( Symbol ) === "${type_of(Symbol)}"`);
  assertEquals(type_of(Symbol), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: symbol() ${RESET}`, () => {

  console.log(`type_of( Symbol() ) === "${type_of(Symbol())}"`);
  assertEquals(type_of(Symbol()), "symbol");

});

Deno.test(`\n${TITLE} JavaScript Type: symbol('key') ${RESET}`, () => {

  console.log(`type_of( Symbol('key') ) === "${type_of(Symbol('key'))}"`);
  assertEquals(type_of(Symbol('key')), "symbol");

});

Deno.test(`\n${TITLE} JavaScript Type: JSON ${RESET}`, () => {

  console.log(`type_of( JSON ) === "${type_of(JSON)}"`);
  assertEquals(type_of(JSON), "json");

});

Deno.test(`\n${TITLE} JavaScript Type: Math ${RESET}`, () => {

  console.log(`type_of( Math ) === "${type_of(Math)}"`);
  assertEquals(type_of(Math), "math");

});

Deno.test(`\n${TITLE} JavaScript Type: regexp ${RESET}`, () => {

  console.log(`type_of( /a-z/ ) === "${type_of(/a-z/)}"`);
  assertEquals(type_of(/a-z/), "regexp");

});

Deno.test(`\n${TITLE} JavaScript Type: function ${RESET}`, () => {

  console.log(`type_of( function foo(){} ) === "${type_of(function foo() { })}"`);
  assertEquals(type_of(function foo() { }), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: anonymous function ${RESET}`, () => {

  console.log(`type_of( ()=>{} ) === "${type_of(() => { })}"`);
  assertEquals(type_of(() => { }), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: class ${RESET}`, () => {

  console.log(`type_of( class foo {} ) === "${type_of(class foo { })}"`);
  assertEquals(type_of(class foo { }), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: NaN ${RESET}`, () => {

  console.log(`type_of( NaN ) === "${type_of(NaN)}"`);
  assertEquals(type_of(NaN), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: Infinity ${RESET}`, () => {

  console.log(`type_of( Infinity ) === "${type_of(Infinity)}"`);
  assertEquals(type_of(Infinity), "number");

});

Deno.test(`\n${TITLE} JavaScript Type: window ${RESET}`, () => {

  console.log(`type_of( window ) === "${type_of(window)}"`);
  assertEquals(type_of(window), "window");

});

Deno.test(`\n${TITLE} JavaScript Type: globalThis ${RESET}`, () => {

  console.log(`type_of( globalThis ) === "${type_of(globalThis)}"`);
  assertEquals(type_of(globalThis), "window");

});

Deno.test(`\n${TITLE} JavaScript Type: eval ${RESET}`, () => {

  console.log(`type_of( eval ) === "${type_of(eval)}"`);
  assertEquals(type_of(eval), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: Date ${RESET}`, () => {

  console.log(`type_of( Date ) === "${type_of(Date)}"`);
  assertEquals(type_of(Date), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: Error ${RESET}`, () => {

  console.log(`type_of( Error ) === "${type_of(Error)}"`);
  assertEquals(type_of(Error), "function");

});

Deno.test(`\n${TITLE} JavaScript Type: Error ${RESET}`, () => {

  console.log(`type_of(new Error() ) === "${type_of(new Error())}"`);
  assertEquals(type_of(new Error()), "error");

});

Deno.test(`\n${TITLE} JavaScript Type: new RangeError() ${RESET}`, () => {

  console.log(`type_of( new RangeError() ) === "${type_of(new RangeError())}"`);
  assertEquals(type_of(new RangeError()), "error");

});



/** Extended Tests --------------------------------------------------------------------------------- */

Deno.test(`\n${TITLE} JavaScript Type: string with extended ${RESET}`, () => {

  console.log(`type_of( 'test', true ).name === "${type_of('test', true).name}"`);
  console.log(`type_of( 'test', true ).type === "${type_of('test', true).type}"`);
  assertEquals(type_of('test', true).name, "");
  assertEquals(type_of('test', true).type, "string");

});

Deno.test(`\n${TITLE} JavaScript Type: Date with extended ${RESET}`, () => {

  console.log(`type_of( Date, true ).name === "${type_of(Date, true).name}"`);
  console.log(`type_of( Date, true ).type === "${type_of(Date, true).type}"`);
  assertEquals(type_of(Date, true).name, "Date");
  assertEquals(type_of(Date, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: eval with extened ${RESET}`, () => {

  console.log(`type_of( eval, true ).name === "${type_of(eval, true).name}"`);
  console.log(`type_of( eval, true ).type === "${type_of(eval, true).type}"`);
  assertEquals(type_of(eval, true).name, "eval");
  assertEquals(type_of(eval, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: function with extended ${RESET}`, () => {

  console.log(`type_of( function foo(){}, true ).name === "${type_of(function foo() { }, true).name}"`);
  console.log(`type_of( function foo(){}, true ).type === "${type_of(function foo() { }, true).type}"`);
  assertEquals(type_of(function foo() { }, true).name, "foo");
  assertEquals(type_of(function foo() { }, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: anonymous function with extended ${RESET}`, () => {

  console.log(`type_of( ()=>{}, true ).name === "${type_of(() => { }, true).name}"`);
  console.log(`type_of( ()=>{}, true ).type === "${type_of(() => { }, true).type}"`);
  assertEquals(type_of(() => { }, true).name, "anonymous");
  assertEquals(type_of(() => { }, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: class with extended ${RESET}`, () => {

  console.log(`type_of( class foo {}, true ).name === "${type_of(class foo { }, true).name}"`);
  console.log(`type_of( class foo {}, true ).type === "${type_of(class foo { }, true).type}"`);
  assertEquals(type_of(class foo { }, true).name, "foo");
  assertEquals(type_of(class foo { }, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: new class with extended ${RESET}`, () => {

  console.log(`type_of( new class foo {}, true ).name === "${type_of(new class foo { }, true).name}"`);
  console.log(`type_of( new class foo {}, true ).type === "${type_of(new class foo { }, true).type}"`);
  assertEquals(type_of(new class foo { }, true).name, "foo");
  assertEquals(type_of(new class foo { }, true).type, "object");

});

Deno.test(`\n${TITLE} JavaScript Type: Error with extended ${RESET}`, () => {

  console.log(`type_of( Error, true ).name === "${type_of(Error, true).name}"`);
  console.log(`type_of( Error, true ).type === "${type_of(Error, true).type}"`);
  assertEquals(type_of(Error, true).name, "Error");
  assertEquals(type_of(Error, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: new Error() with extended ${RESET}`, () => {

  console.log(`type_of( new Error(), true ).name === "${type_of(new Error(), true).name}"`);
  console.log(`type_of( new Error(), true ).type === "${type_of(new Error(), true).type}"`);
  assertEquals(type_of(new Error(), true).name, "Error");
  assertEquals(type_of(new Error(), true).type, "error");

});

Deno.test(`\n${TITLE} JavaScript Type: RangeError with extended ${RESET}`, () => {

  console.log(`type_of( RangeError, true ).name === "${type_of(RangeError, true).name}"`);
  console.log(`type_of( RangeError, true ).type === "${type_of(RangeError, true).type}"`);
  assertEquals(type_of(RangeError, true).name, "RangeError");
  assertEquals(type_of(RangeError, true).type, "function");

});

Deno.test(`\n${TITLE} JavaScript Type: new RangeError() with extended ${RESET}`, () => {

  console.log(`type_of( new RangeError(), true ).name === "${type_of(new RangeError(), true).name}"`);
  console.log(`type_of( new RangeError(), true ).type === "${type_of(new RangeError(), true).type}"`);
  assertEquals(type_of(new RangeError(), true).name, "RangeError");
  assertEquals(type_of(new RangeError(), true).type, "error");

});

