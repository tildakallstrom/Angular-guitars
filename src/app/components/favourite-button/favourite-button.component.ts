import { Component, Input, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent implements OnInit {

  public loading: boolean = false;

  public isFavourite: boolean = false;

  @Input() guitarId: string = "";


  constructor(
    private userService: UserService,
    private readonly favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    //inputs are resolved
    this.isFavourite = this.userService.inFavourites(this.guitarId);
  }

  onFavouriteClick(): void {
    this.loading = true;
    //add guitar to the favourites
    this.favouriteService.addToFavourites(this.guitarId)
    .subscribe({
      next: (user: User) => {
        this.loading = false;
       this.isFavourite = this.userService.inFavourites(this.guitarId);
      },
      error: (error: HttpErrorResponse) => {
       console.log("Error", error.message);
      }
    })
  }

}
