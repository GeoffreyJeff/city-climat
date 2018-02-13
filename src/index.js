import {City} from "./components/city/city.component";
import {Temperature} from "./components/temperature/temperature.component";
import { MeteoPolution } from "./components/meteo-polution/meteo-polution.component";
import { ApiOpenWeather } from "./models/apis/api-open-weather.api.model";
import { Climat } from "./components/climat/climat.component";
import { Polution } from "./components/polution/polution.component";
import { Climat as ClimatModel} from "./models/climat.model";
import { Polution as PolutionModel} from "./models/polution.model";
import { Temperature as TemperatureModel} from "./models/temperature.model";
import { City as CityModel} from "./models/city.model";

// Apis
let apiOpenWeather = new ApiOpenWeather("40ef35710baae8ad63c4c76f77ae1b25");
// Models
let cityModel = new CityModel(
    new PolutionModel,
    new ClimatModel(
        new TemperatureModel
    )
);
// Components
let city = new City(cityModel, apiOpenWeather);
let meteoPolution = new MeteoPolution(
    new Temperature,
    new Climat,
    new Polution,
);
// Render
city.render();
meteoPolution.render();