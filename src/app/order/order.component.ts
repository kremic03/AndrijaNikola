import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { TheaterModel } from '../../models/theater.model';
import { TheaterService } from '../../services/theater.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  imports: [MatCardModule, NgIf, NgFor, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public movie: MovieModel | null = null
  public theaters: TheaterModel[] = TheaterService.getTheaters()
  public selectedTheater: number = this.theaters[0].id
  public selectedTicketCount: number = 1
  public selectedPrice: number = 8

  public constructor(private route: ActivatedRoute, public utils: UtilsService, private router: Router) {
    route.params.subscribe(params => {
      MovieService.getMovieById(params['id'])
        .then(rsp => {
          this.movie = rsp.data
        })
    })
  }

  public doOrder() {
    Swal.fire({
      title: `Book tickets for ${this.movie?.title}?`,
      text: "Reservations can be canceled any time from your user profile!",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: 'bg-dark'
      },
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, book now!"
    }).then((result) => {
      if (result.isConfirmed) {
        const result = UserService.createOrder({
          id: new Date().getTime(),
          movieId: this.movie!.id,
          movieNumber: this.movie!.movieNumber,
          title: this.movie!.title,
          theater: TheaterService.getTheaterById(this.selectedTheater)!,
          count: this.selectedTicketCount,
          pricePerItem: this.selectedPrice,
          status: 'reserved',
          rating: null
        })
        result ? this.router.navigate(['/user']) :
          Swal.fire({
            title: "Failed to create reservation",
            text: "Please check your booking details and try again!",
            icon: "error"
          });
      }
    })
  }
}
