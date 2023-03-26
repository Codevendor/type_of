"use strict";

// Imports
import {
    parseName,
    TYPES 
} from "./helpers.ts";

/**
 * Parses the functions type.
 * @param {*} src - The source to parse the function from.
 * @return {string} - The parsed name of the type.
 */
export function parseFunction(src: unknown, srcType: string): string {

  // Parse the function name
  const fname = parseName(src);

  // Switch the function name
  switch (fname) {
    // Anonymous Type
    case "function":
    case "":
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
}
