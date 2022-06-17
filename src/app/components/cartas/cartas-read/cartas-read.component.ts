import { PageEvent } from '@angular/material/paginator';
import { CartaService } from './../carta.service';
import { Component, OnInit } from '@angular/core';
import { Carta } from '../carta.model';

@Component({
  selector: 'app-cartas-read',
  templateUrl: './cartas-read.component.html',
  styleUrls: ['./cartas-read.component.css']
})
export class CartasReadComponent implements OnInit{

  cartas!: Carta[]

  constructor(private cartaService: CartaService) { }
  

   // MatPaginator Inputs
   length: number;
   pageSize = 40;
   pageSizeOptions: number[] = [40, 80, 160];
 
   // MatPaginator Output
   pageEvent: PageEvent;

   mudarPagina(){
    this.cartaService.read2(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize).subscribe(cartas => {
      this.cartas = cartas.body
    })
    window.scrollTo(0, 0);
   }

   setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit(): void {
    this.cartaService.read2(1, this.pageSize).subscribe(cartas => {
      this.cartas = cartas.body
      this.length = cartas.headers.get('X-Total-Count')
    })
  }

  /*
  ngOnInit(): void {
    this.cartaService.read().subscribe(cartas => { 
      this.cartas = cartas
    })
  */

}
