'use strict';

// Imports
import { 
    parseFunction,
    parseNumber,
    parseObject,
    parseOther,
    TYPES } from "../helpers/helpers.ts";

/**
 * The type_of() method can determine a correct type and return it as a string.
 * @param {*} src - The source to test for type.
 * @returns {string} - A string representing the correct type of the src.
 */
export function type_of(src: unknown): string {

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
            return parseNumber(src, srcType);

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
            return parseFunction(src, srcType);

        // Object Type
        case TYPES.OBJECT:
            return parseObject(src, srcType);

        // Return other types not defined
        default:
            return parseOther(src, srcType);
    }

};