'use strict';

// Imports
import { 
    REG_PARSE_FUNCTION_CHAR, 
    REG_SPLIT_ON_SPACE 
} from "./regex.ts";

/**
 * Parses the name of the type.
 * @param {*} src - The source to parse the type name from.
 * @return {string} - The parsed name of the type. 
 */
export function parseName(src: unknown): string {

    // The method name.
    let name = '';

    // Get the method declaration
    const methodDeclaration = src?.toString();

    // Check for undefined
    if(!methodDeclaration) return '';

    // Split the method declaration into two parts from ( or {
    const methodParts = methodDeclaration.split(REG_PARSE_FUNCTION_CHAR, 2);

    // Get the first part and trim it.
    const firstPart = methodParts[0].trim();

    // Split the firstPart on space for getting name
    const arr = firstPart.split(REG_SPLIT_ON_SPACE);

    // Check if array length has name
    if(arr.length > 0) {

        // Get the last item of array and trim it.
        name = arr[arr.length - 1].trim();
    }

    // Return the name.
    return name;

}