import {MetaComponent} from "./../meta-component.component";

/**
 * @type {MeteoPolution}
 */
export class MeteoPolution extends MetaComponent {

    /**
     * @constructor
     * @param {Component} temperature
     * @param {Component} climat
     * @param {Component} polution
     */
    constructor (temperature, climat, polution) {
        super();
        this.component = [
            temperature,
            climat,
            polution
        ];
    }

}