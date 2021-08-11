import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api';
  }

  getAll(page = 1): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/character?page=${page}`).toPromise();
  }

}