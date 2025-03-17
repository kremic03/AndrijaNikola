import { AirlineModel } from "../models/airline.model";

export class AirlineService {
    static getAirlines(): AirlineModel[] {
        return [
            {
                id: 1,
                name: 'Cineplexx',
                countryOfOrigin: 'Serbia',
                website: 'https://www.cineplexx.rs/'
            },
            {
                id: 2,
                name: 'Film Casino',
                countryOfOrigin: 'Austria',
                website: 'https://www.filmcasino.at/'
            },
            {
                id: 3,
                name: 'Fox Theatre',
                countryOfOrigin: 'USA',
                website: 'https://www.foxtheatre.ca/'
            },
            {
                id: 4,
                name: 'Village Cinemas',
                countryOfOrigin: 'Greece',
                website: 'https://www.villagecinemas.gr/en/'
            }
        ]
    }

    static getAirlineById(id: number) {
        return this.getAirlines().find(airline=>airline.id === id)
    }
}