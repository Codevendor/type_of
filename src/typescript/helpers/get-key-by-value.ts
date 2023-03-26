"use strict";

// Specify object type
type objs = {
  [key: string]: string;
};

/**
 * Gets a key by value.
 * @param {object} src - The source object to look for value in.
 * @param {string} value - The value to look for.
 * @returns {string} - The key as a string.
 */
export function getKeyByValue(src: objs, value: string): undefined | string {
  return Object.keys(src).find((key) => src[key] === value);
}
