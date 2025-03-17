// theater.service.ts (u src/services/ direktorijumu)
import { TheaterModel } from "../models/theater.model";

export class TheaterService {
    static getTheaters(): TheaterModel[] {
        return [
            {
                id: 1,
                name: 'Cineplexx',
                location: 'Serbia',
                website: 'https://www.cineplexx.rs/'
            },
            {
                id: 2,
                name: 'Film Casino',
                location: 'Austria',
                website: 'https://www.filmcasino.at/'
            },
            {
                id: 3,
                name: 'Fox Theatre',
                location: 'USA',
                website: 'https://www.foxtheatre.ca/'
            },
            {
                id: 4,
                name: 'Village Cinemas',
                location: 'Greece',
                website: 'https://www.villagecinemas.gr/en/'
            }
        ]
    }

    static getTheaterById(id: number) {
        return this.getTheaters().find(theater => theater.id === id)
    }
}
