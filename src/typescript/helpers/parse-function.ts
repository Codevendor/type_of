"use strict";

// Imports
import {
    getKeyByValue,
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

  // Get the key by value if exists
  const key: string | undefined = getKeyByValue(TYPES, fname);

  // Return types key
  if(key && TYPES.hasOwnProperty(key)) {
    return TYPES[key as keyof typeof TYPES];
  } 

  // Check for anon functions
  if(["function", ""].includes(fname)) {
    return TYPES.ANONYMOUS;
  }

  // Return plain function
  return TYPES.FUNCTION;

}
