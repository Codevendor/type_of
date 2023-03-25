'use strict';

// Imports
import { TYPES } from "../helpers/types.ts";
import { parseName } from "../helpers/parse-name.ts";
import { REG_PARSE_OBJECT_STRING } from "../helpers/regex.ts";

/**
 * The type_of() method can determine a correct type and return it as a string.
 * @param {unknown} src - The source to test for type.
 * @param {boolean} [extended=false] - Extends the return type string to extended types. i.e 'array'. Defaults to false.
 * @returns {string} - A string representing the correct type of the src.
 */
export function type_of(src: unknown, extended: boolean = false): string {

    // Get the source type from operator
    const srcType = typeof src;

    // Switch by typeof
    switch (srcType) {

        // Undefined type
        case TYPES.UNDEFINED:
            return TYPES.UNDEFINED;

        // Boolean type
        case TYPES.BOOLEAN:
            return TYPES.BOOLEAN;

        // Number Type
        case TYPES.NUMBER:

            // Check for extended
            if (!extended) {
                return TYPES.NUMBER;
            }

            // Check is nan
            if (isNaN(src as number)) {
                return TYPES.NAN;
            }

            // Check if number is negative infinity
            if (src === -Infinity) {
                return TYPES.NEGATIVE_INFINITY;
            }

            // Check if number is positive infinity
            if (src === +Infinity) {
                return TYPES.INFINITY;
            }

            // Return type number
            return TYPES.NUMBER;

        // Bigint Type
        case TYPES.BIGINT:
            return TYPES.BIGINT;

        // String Type
        case TYPES.STRING:
            return TYPES.STRING;

        // Symbol Type
        case TYPES.SYMBOL:
            return TYPES.SYMBOL;

        // Function Type
        case TYPES.FUNCTION:

            // Check for extended
            if (!extended) {
                return TYPES.FUNCTION;
            }

            // Parse the function name
            const fname = parseName(src);

            // Switch the function name
            switch (fname) {

                // Anonymous Type
                case 'function':
                case '':
                    return TYPES.ANONYMOUS;

                // Eval Type
                case TYPES.EVAL:
                    return TYPES.EVAL;

                // Date Type
                case TYPES.DATE:
                    return TYPES.DATE;

                // Error Type
                case TYPES.ERROR:
                    return TYPES.ERROR;

                // Name Type
                default:
                    return fname;

            }

        // Object Type
        case TYPES.OBJECT:

            // Check if null
            if (src == null) {
                return TYPES.NULL;
            }

            // Check if extended
            if (!extended) {
                return TYPES.OBJECT;
            }

            // Parse object to type
            const [, type, subType] = ({}).toString.call(src).match(REG_PARSE_OBJECT_STRING) || [];

            // Check if undefined match
            if (!type || !subType) {
                return TYPES.OBJECT;
            }

            // Switch sub type
            switch (subType) {

                // Arguments Type
                case TYPES.ARGUMENTS:
                    return TYPES.ARGUMENTS;

                // Array Type
                case TYPES.ARRAY:
                    return TYPES.ARRAY;

                // globalThis Window Type
                case TYPES.WINDOW:
                    return TYPES.GLOBAL_THIS;

                // StringObject
                case TYPES.STRING_OBJECT:
                    return TYPES.STRING_OBJECT;

                // RegExp
                case TYPES.REGEXP:
                    return TYPES.REGEXP;

                // Math
                case TYPES.MATH:
                    return TYPES.MATH;

                // Date
                case TYPES.DATE:
                    return TYPES.DATE;

                // Map
                case TYPES.MAP:
                    return TYPES.MAP;

                // Keep Processing
                default:

                    // Check if named object or class
                    if (src.constructor && src.constructor.name) {

                        // Check if object no nme
                        if (src.constructor.name.toLowerCase() === TYPES.OBJECT) {
                            return TYPES.OBJECT;
                        }

                        // Return object name
                        return src.constructor.name;
                    }

                    // Return object
                    return TYPES.OBJECT;

            }

        // Return other types not defined
        default:

            // Check if window
            if (typeof window !== TYPES.UNDEFINED && src === window) {
                return TYPES.WINDOW;
            }

            // Return og type
            return srcType;
    }

};