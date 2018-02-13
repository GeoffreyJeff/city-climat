import { Model } from "./model.model";

/**
 * @type {City}
 */
export class City extends Model {

    /**
     * @constructor
     * @param {Polution} polution
     * @param {Climat} climat
     */
    constructor(polution, climat) {
        super({
            name: "",
            sunrise: 0,
            sunset: 0,
            polution: polution,
            climat: climat
        });

    }

}