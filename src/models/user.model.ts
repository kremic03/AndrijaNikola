import { OrderModel } from "./order.model"

export interface UserModel {
    email: string
    firstName: string
    lastName: string
    phone: string
    address: string
    favouriteGenre: string // Changed from favouriteDestination to favouriteGenre
    password: string
    orders: OrderModel[]
}

