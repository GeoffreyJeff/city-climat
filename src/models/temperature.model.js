import { Model } from "./model.model";

/**
 * @type {Temperature}
 */
export class Temperature extends Model {

    /**
     * @constructor
     */
    constructor() {
        super({
            min: 0,
            max: 0,
            temperature: 0
        });

    }

}