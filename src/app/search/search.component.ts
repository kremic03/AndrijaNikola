// src/app/search/search.component.ts
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MockMovieService } from '../../services/mock-movie.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatTableModule,
    NgIf,
    NgFor,
    MatButtonModule,
    LoadingComponent,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'genre', 'scheduledAt', 'actions'];
  allData: MovieModel[] | null = null;
  theaterList: string[] = [];
  selectedTheater: string | null = null;
  dataSource: MovieModel[] | null = null;
  movieList: string[] = [];
  selectedMovie: string | null = null;
  userInput: string = '';
  dateOptions: string[] = [];
  selectedDate: string | null = null;

  public constructor(public utils: UtilsService) {}

  ngOnInit() {
    // Koristimo MockMovieService umesto API poziva
    this.allData = MockMovieService.getSampleMovies();
    this.dataSource = this.allData;
    this.generateSearchCriteria(this.allData);
  }

  public generateSearchCriteria(source: MovieModel[]) {
    this.theaterList = source.map(obj => obj.title)
      .filter((theater: string, i: number, ar: any[]) => ar.indexOf(theater) === i);
    this.movieList = source.map(obj => obj.movieNumber)
      .filter((num: string, i: number, ar: any[]) => ar.indexOf(num) === i);
    this.dateOptions = source.map(obj => obj.scheduledAt)
      .map((obj: string) => obj.split('T')[0])
      .filter((date: string, i: number, ar: any[]) => ar.indexOf(date) === i);
  }

  public doReset() {
    this.userInput = '';
    this.selectedTheater = null;
    this.selectedMovie = null;
    this.selectedDate = null;
    this.dataSource = this.allData;
    if (this.allData) {
      this.generateSearchCriteria(this.allData);
    }
  }

  public doFilterChain() {
    if (this.allData == null) return;

    this.dataSource = this.allData
      .filter(obj => {
        // Input Field Search
        if (this.userInput == '') return true;
        return obj.title.toLowerCase().includes(this.userInput.toLowerCase()) ||
          obj.id.toString().includes(this.userInput) ||
          obj.movieNumber.toLowerCase().includes(this.userInput.toLowerCase()) ||
          obj.genre.toLowerCase().includes(this.userInput.toLowerCase());
      })
      .filter(obj => {
        // Theater Search
        if (this.selectedTheater == null) return true;
        return obj.title === this.selectedTheater;
      })
      .filter(obj => {
        // Movie Number Search
        if (this.selectedMovie == null) return true;
        return obj.movieNumber === this.selectedMovie;
      })
      .filter(obj => {
        // Date Search
        if (this.selectedDate == null) return true;
        const start = new Date(`${this.selectedDate}T00:00:01`);
        const end = new Date(`${this.selectedDate}T23:59:59`);
        const scheduled = new Date(obj.scheduledAt);

        return (start <= scheduled) && (scheduled <= end);
      });

    this.generateSearchCriteria(this.dataSource);
  }
}
