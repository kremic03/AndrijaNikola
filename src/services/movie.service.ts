import axios from 'axios';

const client = axios.create({
    baseURL: 'https://movie.pequla.com/api/movie?director=&actor=&search=&genre=',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'CineMax/2025'
    },
    validateStatus: (status: number) => {
        return status === 200
       
    }
})

export class MovieService {
    static async getMovies(page: number = 0, size: number = 10) {
        return client.request({
            url: '/movie',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'startDate,asc'
            }
        })
    }

    static async getMovieList() {
        return client.request({
            url: '/movie/list',
            method: 'GET'
        })
    }

    static async getMovieById(id: number) {
        return client.get(`/movie/${id}`)
    }

    static async getTheaterLocations() {
        return client.get('/movie/theaters')
    }
    
    static async getGenres() {
        return client.get('/movie/genres')
    }
}

