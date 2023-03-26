'use strict';

// The regex for parsing the object string.
export const REG_PARSE_OBJECT_STRING = /\[{0,1}([^\s\]]+)\s{0,}([^\s\]]+)\]{0,1}/ims;

// The regex for parsing on function starting parenthesis or starting class bracket. 
export const REG_PARSE_FUNCTION_CHAR = /[\(\{]/ims;

// For splitting on space characters
export const REG_SPLIT_ON_SPACE = /\s/ims;