/**
 * @type {Model}
 */
export class Model {

    /**
     * @constructor
     * @param {Object} obj
     */
    constructor(obj) {

        /**
         * @param {String} name
         * @param {String} defaultValue
         * @returns {*}
         */
        this.get = (name, defaultValue) => {
            return obj[name] || defaultValue;
        }

        /**
         * @param {String} name
         * @param {*} value
         */
        this.set = (name, value) => {
            obj[name] = value;
        }

    }

}