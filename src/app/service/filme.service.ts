import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interface/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFilme(nomefilme:string): Observable<Movie>{
    return this.http.get<Movie>(`${this.apiUrl}&t=${nomefilme}`);
  }
}