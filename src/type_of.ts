'use strict';

/**
 * The type_of() method can determine a correct type and name and return it as string.
 * @param {unknown} src - The source to test for type.
 * @param {boolean} [extended=false] - Extends the return type string to include name. i.e 'function foo'. Defaults to false.
 * @returns {string} - A string representing the correct type of the src.
 */
export function type_of(src: unknown, extended: boolean = false): string {

    switch (src) {

        /** Type undefined */
        case undefined: return 'undefined';

        /** Type null */
        case null: return 'null';

        /** Type window */
        case window: return 'window';

        default:

            const match_string: string = ({}).toString.call(src);
            const matches: RegExpMatchArray | null = match_string.match(/\s([a-z|A-Z]+)/);

            /** Type not found */
            if (matches === null || matches.length != 2) {

                return 'unknown';

            }

            // Set type
            let ctype = matches[1].toLowerCase();

            // Jump out of switch
            if (!extended) return ctype;

            switch(ctype) {

                case 'string' :

                    if(src instanceof String) return 'string Object';
                    return 'string';

                case 'number' : 
        
                    /** Parse number type */
                    if(Number.isSafeInteger(src)) return 'number integer';

                    /** Parse float */
                    if(!!(src as number % 1)) return 'number float';

                    /** Check nan */
                    if(isNaN(src as number)) { return 'number nan'; } 
                    else if (src === Infinity){ return 'number infinity'; }
                    
                    return ctype;

                case 'bigint' : 

                    return 'number bigint';

                case 'function': 

                    return ((<Function>src).name! === '') ? 'function anonymous' : 'function ' + (<Function>src).name;

                case 'error':
                case 'object':

                    return ctype + ' ' + (<object>src).constructor!.name!;

                default : 
                
                    return ctype;

            }         

    }

};