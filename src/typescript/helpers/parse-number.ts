"use strict";

// Imports
import { TYPES } from "./helpers.ts";

/**
 * Parses a number type.
 * @param {*} src - The source to parse the number from.
 * @return {string} - The parsed name of the type.
 */
export function parseNumber(src: unknown, srcType: string): string {

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
}
