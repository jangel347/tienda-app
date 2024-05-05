import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  URL = 'http://localhost:3901/api/';

  constructor(private http: HttpClient) { }

  createUser(user: User): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>(this.URL + '/register', user, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(`Código de error: ${error.status}, ` + `Mensaje: ${error.error}`);
    }
    // Retornar un observable con un mensaje de error
    return throwError(() => 'Ocurrió un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.');
  }

  login(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.URL + '/auth', user, httpOptions);
  }
}
