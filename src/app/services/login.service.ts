import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

const { apiUsers, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //dependency injection
  constructor(private readonly http: HttpClient) { }

  //Modules, HttpClient, observables, and RxJS operators
  public login(username: string): Observable<User> {
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined) => {
         if (user === undefined) { //user doesnt exist
          return this.createUser(username);
         }
         return of(user);
      })
    )
  }

  //login

  //check if user exists
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
     .pipe(
      //Rxjs operators
      map((response: User[]) => response.pop())
     )
  }

  //if user doesnt exist - create user
  private createUser(username: string): Observable<User> {
    // user
    const user = {
      username,
      favourites: []
    };
    
    //headers -> API key
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiUsers, user, {
      headers
    })

    //POST - create items on the server
  }
  
  //if user exists or is created - store user
}
