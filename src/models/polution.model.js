import { Model } from "./model.model";

/**
 * @type {Polution}
 */
export class Polution extends Model {

    /**
     * @constructor
     */
    constructor() {
        super({
            aqi: 0,
            pm25: 0,
            ozone: 0
        });

    }

}