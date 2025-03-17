export interface MovieModel {
    id: number;
    type: {
        id: number;
        name: string;
    };
    movieKey: string;
    movieNumber: string;
    title: string;
    scheduledAt: string;
    estimatedAt: null | string;
    connectedType: string;
    connectedMovie: string;
    genre: string;
    theater: null | string;
    cinemaChain: string;
    rating: null | number;
    poster: string;
    
}
