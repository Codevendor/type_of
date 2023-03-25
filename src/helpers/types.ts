'use strict';

/** The const types definition. */
export const TYPES = {

    // Primitive Standard Types
    NULL: 'null',
    UNDEFINED: 'undefined',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    BIGINT: 'bigint',
    STRING: 'string',
    SYMBOL: 'symbol',
    FUNCTION: 'function',
    OBJECT: 'object',

    // Number Types
    NAN: 'NaN',
    NEGATIVE_INFINITY: '-Infinity',
    INFINITY: 'Infinity',

    // Method types
    ANONYMOUS: 'AnonymousFunction',
    ARGUMENTS: 'Arguments',

    // Window objects
    GLOBAL_THIS: 'globalThis',
    WINDOW: 'Window',
    
    // Text Processing
    STRING_OBJECT: 'String',
    REGEXP: 'RegExp',

    // Numbers, math and dates
    MATH: 'Math',
    DATE: 'Date',
    
    // Keyed Collections
    MAP: 'Map',
    SET: 'Set',
    WEAKMAP: 'WeakMap',
    WEAKSET: 'WeakSet',

    // Global methods
    EVAL: 'eval',
    IS_FINITE: 'isFinite',
    IS_NAN: 'isNaN',
    PARSE_FLOAT: 'parseFloat',
    PARSE_INT: 'parseInt',
    DECODE_URI: 'decodeURI',
    DECODE_URI_COMPONENT: 'decodeURIComponent',
    ESCAPE: 'escape',
    UNESCAPE: 'unescape',

    // Error Objects
    ERROR: 'Error',
    AGGREGATE_ERROR: 'AggregateError',
    EVAL_ERROR: 'EvalError',
    RANGE_ERROR: 'RangeError',
    REFERENCE_ERROR: 'ReferenceError',
    SYNTAX_ERROR: 'SyntaxError',
    TYPE_ERROR: 'TypeError',
    URI_ERROR: 'URIError',
    INTERAL_ERROR: 'InternalError',

    // Indexed Collections
    ARRAY: 'Array',
    INT8ARRAY: 'Int8Array',
    UINT8ARRAY: 'Uint8Array',
    INT16ARRAY: 'Int16Array',
    UINT16ARRAY: 'Uint16Array',
    INT32ARRAY: 'Int32Array',
    UINT32ARRAY: 'Uint32Array',
    BIGINT64ARRAY: 'BigInt64Array',
    BIGUINT64ARRAY: 'BigUint64Array',
    FLOAT32ARRAY: 'Float32Array',
    FLOAT64ARRAY: 'Float64Array',

    // Structured Data
    ARRAY_BUFFER: 'ArrayBuffer',
    SHARED_ARRAY_BUFFER: 'SharedArrayBuffer',
    DATA_VIEW: 'DataView',
    ATOMICS: 'Atomics',
    JSON: 'JSON',

    // Memory Management
    WEAK_REF: 'WeakRef',
    FINALIZATION_REGISTRY: 'FinalizationRegistry',

    // Control Abstraction Objects
    PROMISE: 'Promise',
    GENERATOR_FUNCTION: 'GeneratorFunction',
    ASYNC_GENERATOR_FUNCTION: 'AsyncGeneratorFunction',
    GENERATOR: 'Generator',
    ASYNC_GENERATOR: 'AsyncGenerator',
    ASYNC_FUNCTION: 'AsyncFunction',

    // Reflection
    REFLECT: 'Reflect',
    PROXY: 'Proxy',

    // Internationalization
    INTL: 'Intl',
    INTL_COLLATOR: 'Intl.Collator',
    INTL_DATE_TIME_FORMAT: 'Intl.DateTimeFormat',
    INTL_DISPLAY_NAMES: 'Intl.DisplayNames',
    INTL_LIST_FORMAT: 'Intl.ListFormat',
    INTL_LOCALE: 'Intl.Locale',
    INTL_NUMBER_FORMAT: 'Intl.NumberFormat',
    INTL_PLURAL_RULES: 'Intl.PluralRules',
    INTL_RELATIVE_TIME_FORMAT: 'Intl.RelativeTimeFormat',
    INTL_SEGMENTER: 'Intl.Segmenter'

};