'use strict';

// The regex for parsing the object string
const REG_PARSE_OBJECT_STRING = /\[{0,1}([^\s\]]+)\s{0,}([^\s\]]+)\]{0,1}/;

// The types to look for.
const TYPES = {
    UNDEFINED: 'undefined',
    STRING: 'string',
    NUMBER: 'number',
    BIGINT: 'bigint',
    SYMBOL: 'symbol',
    FUNCTION: 'function',
    OBJECT: 'object',
    NULL: 'null',
    STRING_OBJECT: 'stringobject',
    ARGUMENTS: 'arguments',
    ARRAY: 'array',
    ERROR: 'error',
    WINDOW: 'window',
    NAN: 'nan',
    INFINITY: 'infinity'
};

/**
 * The type_of() method can determine a correct type and return it as a string.
 * @param {unknown} src - The source to test for type.
 * @param {boolean} [extended=false] - Extends the return type string to extended types. i.e 'array'. Defaults to false.
 * @returns {string} - A string representing the correct type of the src.
 */
export function type_of(src, extended = false) {

    // Get the source type from operator
    const srcType = typeof src;

    switch (srcType) {

        // Undefined type
        case TYPES.UNDEFINED: return TYPES.UNDEFINED;

        // String Type
        case TYPES.STRING: return TYPES.STRING;

        // Number Type
        case TYPES.NUMBER:

            // Check for extended
            if (!extended) return TYPES.NUMBER;

            // Check is nan
            if (isNaN(src)) return TYPES.NAN;

            // Check if infinity
            if (src === Infinity) return TYPES.INFINITY;
            
            // Return type number
            return TYPES.NUMBER;

        // Bigint Type
        case TYPES.BIGINT: return TYPES.BIGINT;

        // Symbol Type
        case TYPES.SYMBOL: return TYPES.SYMBOL;

        // Function Type
        case TYPES.FUNCTION:

            // Check for extended
            if (!extended) return TYPES.FUNCTION;

            // Return the name of the function
            if (src.name) return src.name;

            // Return type function
            return TYPES.FUNCTION;

        // Object Type
        case TYPES.OBJECT:

            // Check if null
            if (src == null) return TYPES.NULL;
            
            // Check if extended
            if (!extended) return TYPES.OBJECT;

            // Parse object to type
            const [, type, subType] = ({}).toString.call(src).match(REG_PARSE_OBJECT_STRING) || [];

            // Check if undefined match
            if (!type || !subType) return TYPES.OBJECT;

            // Check type
            switch (type) {

                // String Type
                case 'string': return TYPES.STRING_OBJECT;

                // Object type
                case 'object':

                    // Check lowercase subType
                    switch (subType.toLowerCase()) {

                        // Arguments Type
                        case TYPES.ARGUMENTS: return TYPES.ARGUMENTS;

                        // Array Type
                        case TYPES.ARRAY: return TYPES.ARRAY;

                        // Error Type
                        case TYPES.ERROR: return (src.constructor && src.constructor.name) ? src.constructor.name : TYPES.ERROR;

                        // Keep processing
                        default:

                            // Check if named object or class
                            if (src.constructor && src.constructor.name) {

                                // Check if object no nme
                                if (src.constructor.name.toLowerCase() === TYPES.OBJECT) return TYPES.OBJECT;
                                
                                // Return object name
                                return src.constructor.name;
                            }

                            // Return object
                            return TYPES.OBJECT;
                    }

                // Default return object
                default: return TYPES.OBJECT;
            }

        // Return other type
        default:

            // Check if window
            if (typeof window !== TYPES.UNDEFINED && src === window) return TYPES.WINDOW;
            
            // Return og type
            return srcType;
    }

};