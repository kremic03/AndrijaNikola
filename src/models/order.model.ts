import { TheaterModel } from "./theater.model"

export interface OrderModel {
    id: number
    movieId: number
    movieNumber: string
    theater: TheaterModel
    title: string       // Movie title (renamed from destination)
    count: number       // Number of tickets
    pricePerItem: number
    status: 'reserved' | 'paid' | 'canceled', // Updated status names
    rating: null | boolean
}

