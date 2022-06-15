import { CartaService } from './../carta.service';
import { Component, OnInit } from '@angular/core';
import { Carta } from '../carta.model';

@Component({
  selector: 'app-cartas-read',
  templateUrl: './cartas-read.component.html',
  styleUrls: ['./cartas-read.component.css']
})
export class CartasReadComponent implements OnInit {

  cartas!: Carta[]

  constructor(private cartaService: CartaService) { }

  ngOnInit(): void {
    this.cartaService.read().subscribe(cartas => {
      this.cartas = cartas
    })
  }

}
