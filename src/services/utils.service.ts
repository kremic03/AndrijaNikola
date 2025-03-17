// src/services/utils.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS')
  }

  public generateMoviePoster(title: string): string {
    // Definisanje mapiranja naslova filmova na URL-ove postera
    const movieImages: Record<string, string> = {
      'Gladiator II': 'https://m.media-amazon.com/images/M/MV5BZjYxNWUyOWQtY2M0ZS00ZjM0LWEwMjQtZDU3YmY0NmZkZGI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      'Brutalista': 'https://m.media-amazon.com/images/M/MV5BMzZjMzdiOWUtNDI0Yi00YTRhLTgzMzMtMDYwMDgzNGNlODY3XkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg',
      'Dogmen': 'https://m.media-amazon.com/images/M/MV5BMjA2ZTIyYmYtZGQ5MC00NDUyLTk3MzItMzQyNTQyMmMzZWU2XkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg',
      'Bridget Jones': 'https://m.media-amazon.com/images/M/MV5BNzYwODU1MDItZDA3MC00ZGI2LWFmY2QtNDVjZDFiYTc4NmNkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      'Den of Thieves': 'https://m.media-amazon.com/images/M/MV5BMzYyODcwMDAyM15BMl5BanBnXkFtZTgwOTA4MDQ5NDM@._V1_.jpg',
      'Wonka': 'https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg',
      'Dune': 'https://m.media-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtYTViNGJiZGFjMjI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      'Inside Out': 'https://m.media-amazon.com/images/M/MV5BOTc3NmM3ZmMtNzJiMC00MzBjLWJjZmMtNzIwZjVlNTUzYTQ0XkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_.jpg',
      'Fallout': 'https://m.media-amazon.com/images/M/MV5BMDY0MjI4NTQtZDcxYS00ZjUxLTkwOGItMWI3NGJiZjlhZDUxXkEyXkFqcGdeQXVyNjczMzgwMDg@._V1_.jpg',
      'Beetlejuice': 'https://m.media-amazon.com/images/M/MV5BYzUxMjk0NDUtMGMwMC00YTNmLWJhMzQtN2MwMDRmOTFmZWI1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'
    };
    
    // Pretraživanje naslova filma
    const keys = Object.keys(movieImages);
    for (const key of keys) {
      if (title.includes(key) || key.includes(title)) {
        return movieImages[key];
      }
    }
    
    // Ako nije pronađen odgovarajući poster, vraćamo placeholder sliku
    return 'https://via.placeholder.com/300x450?text=Movie+Poster';
  }
  
  public formatRuntime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  }
  
  public getAgeRatingClass(rating: string): string {
    switch(rating) {
      case 'G': return 'rating-g';
      case 'PG': return 'rating-pg';
      case 'PG-13': return 'rating-pg13';
      case 'R': return 'rating-r';
      case 'NC-17': return 'rating-nc17';
      default: return 'rating-na';
    }
  }
}
