"use strict";

// Imports
import { TYPES } from "./helpers.ts";

/**
 * Parses the other type.
 * @param {*} src - The source to parse the other type from.
 * @return {string} - The parsed name of the type.
 */
export function parseOther(src: unknown, srcType: string, extended = false): string {
  // Check if window
  if (typeof window !== TYPES.UNDEFINED && src === window) {
    return TYPES.WINDOW;
  }

  // Return og type
  return srcType;
}
