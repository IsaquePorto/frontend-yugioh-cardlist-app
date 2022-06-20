import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Carta } from './carta.model';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:3001/cards"

  baseUrlDeck = "http://localhost:3001/mydeck"

  editionName: string = "" //Usado apenas para o componente cartas-read-edition

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(carta: Carta): Observable<Carta> {
    return this.http.post<Carta>(this.baseUrl, carta)
  }

  postDeck(carta: Carta): Observable<Carta> {
    return this.http.post<Carta>(this.baseUrlDeck, carta)
  }

  read(pag: number, limit: number): Observable<any> {
    const url = `${this.baseUrl}?_page=${pag}&_limit=${limit}`
    return this.http.get<any>(url, { observe: 'response' })
  }

  readDeck() {
    return this.http.get<Carta[]>(this.baseUrlDeck)
  }

  readEdition(edition: string) {
    return this.http.get<Carta[]>(this.baseUrl + "?edition=" + edition)
  }

  delete(id: number){
    return this.http.delete(this.baseUrl+"/"+id)
  }

  deleteDeck(id: number) {
    const url = `${this.baseUrlDeck}/${id}`
    return this.http.delete(url)
  }

}
