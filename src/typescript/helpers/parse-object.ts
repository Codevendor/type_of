"use strict";

// Imports
import { 
  getKeyByValue,
  parseName,
  REG_PARSE_OBJECT_STRING, 
  TYPES 
} from "./helpers.ts";

/**
 * Parses the object type.
 * @param {*} src - The source to parse the object from.
 * @return {string} - The parsed name of the type.
 */
export function parseObject(src: unknown, srcType: string): string {
  
  // Check if null
  if (src == null) {
    return TYPES.NULL;
  }

  // Parse object to type and subType
  const [, type, subType] = ({}).toString.call(src).match(REG_PARSE_OBJECT_STRING) || [];

  // Check if undefined match
  if (!type || !subType) {
    return TYPES.OBJECT;
  }

  // Get the key by value if exists
  const key: string|undefined = getKeyByValue(TYPES, subType);

  // Check key exists
  if(!key) {

    // Check if constructor name
    if (src.constructor && src.constructor.name) {
    
      // Check if object no name
      if (src.constructor.name.toLowerCase() === TYPES.OBJECT) {
        return TYPES.OBJECT;
      }

      // Return constructor name
      return src.constructor.name;
    }

    // Return plain object
    return TYPES.OBJECT;

  }

  // Return types key
  return TYPES[key as keyof typeof TYPES];
  
}
