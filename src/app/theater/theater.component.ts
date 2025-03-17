// theater.component.ts
import { Component } from '@angular/core';
import { TheaterModel } from '../../models/theater.model';
import { TheaterService } from '../../services/theater.service';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theater',
  standalone: true, // Dodao sam standalone: true što je neophodno za Angular 14+
  imports: [MatTableModule, NgIf, MatButtonModule],
  templateUrl: './theater.component.html',
  styleUrl: './theater.component.css'
})
export class TheaterComponent {
  displayedColumns: string[] = ['id', 'name', 'location', 'website', 'actions'];
  dataSource: TheaterModel[] = TheaterService.getTheaters();
}
