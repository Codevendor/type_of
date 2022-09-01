'use strict';

import { type_of_value } from './type_of_value.ts';

declare global {
    const type_of: any;
    interface Window {
        type_of: any;
    }
}

/**
 * A global method written in typescript to fix the javascript typeof operator.
 * @param {unknown} src - The unknown src to check type of.
 * @param {boolean} extended - Returns type_of_value object with extra information like name.
 * @returns {string|type_of_value} - A lower case string of the primitive javascript type or a type_of_value object.
 */
window.type_of = ((global) => {

    return ((src: unknown, extended: false): string | type_of_value => {

        let ret: type_of_value = { "name": "", "type": ""};

        switch (src) {

            /** Type undefined */
            case undefined: ret.type = 'undefined'; break;

            /** Type null */
            case null: ret.type = 'null'; break;

            /** Type global */
            case global: ret.type = 'global'; break; 

            /** Type window */
            case window: ret.type = 'window'; break; 

            default:

                const match_string: string = ({}).toString.call(src);
                const matches: RegExpMatchArray | null = match_string.match(/\s([a-z|A-Z]+)/);

                /** Type not found */
                if (matches === null || matches.length != 2) {

                    ret.type = 'unspecified'; break; 

                }

                // Set type
                ret.type = matches[1].toLowerCase();

                // Jump out of switch
                if(!extended) break; 

                // Check if function
                if(ret.type === 'function') {

                    ret.name = ((<Function>src).name! === '') ? 'anonymous' : (<Function>src).name;
                    break;
                }

                // Check for object or error
                if(ret.type === 'object' || ret.type === 'error') {

                    ret.name = (<object>src).constructor!.name!;
                    break;
                }

                break;
        }

        return (extended)? ret : ret.type;

    });

})(this);