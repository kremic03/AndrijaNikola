import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { MovieModel } from '../../models/movie.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule, LoadingComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public movies: MovieModel[] = [];
  public error: string | null = null;

  constructor(public utils: UtilsService) {}

  ngOnInit(): void {
    try {
      // Koristi mock podatke umesto API poziva
      this.movies = MockMovieService.getSampleMovies();
    } catch (error) {
      this.error = "Failed to load movies data";
      console.error(error);
    }
  }
}
