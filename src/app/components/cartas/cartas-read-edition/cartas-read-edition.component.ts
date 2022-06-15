import { Component, OnInit } from '@angular/core';
import { Carta } from '../carta.model';
import { CartaService } from '../carta.service';


@Component({
  selector: 'app-cartas-read-edition',
  templateUrl: './cartas-read-edition.component.html',
  styleUrls: ['./cartas-read-edition.component.css']
})
export class CartasReadEditionComponent implements OnInit {

  cartas!: Carta[]
  editionName: string = ""

  constructor(private cartaService: CartaService) { }

  ngOnInit(): void {
    this.editionName = this.cartaService.editionName
    this.cartaService.readEdition(this.editionName).subscribe(cartas => {
      this.cartas = cartas
    })
  }

}
