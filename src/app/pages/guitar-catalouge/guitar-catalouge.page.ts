import { Component, OnInit } from '@angular/core';
import { Guitar } from 'src/app/models/guitar.model';
import { GuitarCatalogueService } from './../../services/guitar-catalogue.service';

@Component({
  selector: 'app-guitar-catalouge',
  templateUrl: './guitar-catalouge.page.html',
  styleUrls: ['./guitar-catalouge.page.css']
})
export class GuitarCatalougePage implements OnInit {

  get guitars(): Guitar[] {
    return this.guitarCatalougeService.guitars;
  }

  get loading(): boolean {
    return this.guitarCatalougeService.loading;
  }

  get error(): string {
    return this.guitarCatalougeService.error;
  }

  constructor(
    private readonly guitarCatalougeService: GuitarCatalogueService
  ) { }

  ngOnInit(): void {
    this.guitarCatalougeService.findAllGuitars();
  }

}
