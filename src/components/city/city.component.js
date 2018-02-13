import {Component} from "./../component.component";
import {default as template} from "./city.component.html";

/**
 * @type {City}
 */
export class City extends Component {

    /**
     * @constructor
     * @param {Model} model
     * @param {ApiToken} api
     */
    constructor (model, api) {
        super();

        /**
         * @type {String}
         */
        this.selector = "city";

        /**
         * @type {String}
         */
        this.template = template;

        /**
         * @returns {Model}
         */
        this.getModel = () => {
            return model;
        }

        /**
         * @returns {ApiToken}
         */
        this.getApi = () => {
            return api;
        }

        this.geolocation();
    }

    geolocation() {
        navigator.geolocation.getCurrentPosition(
            (e) => {
                this.geolocationSuccess(e.coords.latitude, e.coords.longitude);
            },
            (e) => {
                this.exception("Geolocation", "Can't determine your position");
            },
          );
    }

    geolocationSuccess(lat, lng) {
        let xhr = new XMLHttpRequest;
        xhr.open("GET", this.getApi().getEndPoint(lat, lng));
        xhr.onload = () => {
            if (200 == xhr.status) {

                let response = window.JSON.parse(xhr.response);
                this.getModel().set("name", response.name);
                this.getModel().set("sunset", response.sys.sunset);
                this.getModel().set("sunrise", response.sys.sunrise);
                this.getModel().get("climat").set("humidity", response.main.humidity)
                this.getModel().get("climat").set("wind", response.wind.speed);
                this.getModel().get("climat").set("pression", response.main.pressure);
                this.getModel().get("climat").set("description", response.weather[0].main);
                this.getModel().get("climat").get("temperature").set("min", response.main.temp_min);
                this.getModel().get("climat").get("temperature").set("max", response.main.temp_max);
                this.getModel().get("climat").get("temperature").set("temperature", response.main.temp);
                    this.render();
                return;
            }
            xhr.onerror();
        };
        xhr.onerror = () => {
            this.exception(
                "Informations",
                "Can't read information",
                "Retry",
                () => { this.geolocationSuccess(lat, lng); }
            );
        };
        xhr.send();
    }

    exception(title, message, btnText, confirm) {
        this.getModel().set("name", "-");
        this.render();

        window.ui.dialog.alert(title, message).onconfirm(btnText, confirm);
    }


    /**
     * @returns {HTMLElement}
     */
    render () {
        let elements = super.render([this.getModel()]);
        for(let i =  0 , l = elements.length; i < l; i++) {
            window.componentHandler.downgradeElements(elements[i]);
            window.componentHandler.upgradeDom();
        }
    }

    

}