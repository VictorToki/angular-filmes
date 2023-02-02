import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { 

  }

  // getFilmes(): Observable<Filme[]>{
  //   return this.http.get<Filme[]>(`http://www.omdbapi.com/?i=tt3896198&apikey=d727cf7b₢`);
  // }

  // getFilme(): Observable<Filme>{
  //   return this.http.get<Filme>(`http://www.omdbapi.com/?i=tt3896198&apikey=d727cf7b₢/1`);
  // }
}


// http://www.omdbapi.com/?i=tt3896198&apikey=d727cf7b₢