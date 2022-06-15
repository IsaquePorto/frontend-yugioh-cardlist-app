import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from  '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Carta } from './carta.model';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:3001/cards"

  editionName: string = ""

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000, 
      horizontalPosition: "right", 
      verticalPosition: "top"
    })
  }

  create(carta: Carta): Observable<Carta>{
    return this.http.post<Carta>(this.baseUrl, carta)
  }

  read(): Observable<Carta[]>{
    return this.http.get<Carta[]>(this.baseUrl)
  }

  readEdition(edition: string){
    return this.http.get<Carta[]>(this.baseUrl+"?edition="+edition)

  }
}
