import { CartaService } from './../carta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carta } from '../carta.model';

@Component({
  selector: 'app-cartas-create',
  templateUrl: './cartas-create.component.html',
  styleUrls: ['./cartas-create.component.css']
})
export class CartasCreateComponent implements OnInit {

  carta: Carta = {
    name: '',
    cardType: '',
    type: '',
    attribute: '',
    edition: '',
    imageLink: ''

  }

  constructor(private cartaService: CartaService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.carta.imageLink = "assets/Cartas/"+this.carta.name+".png"

    this.cartaService.create(this.carta).subscribe(() => {
      this.cartaService.showMessage("Carta criada com sucesso!")
      this.router.navigate(['/cartas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cartas'])
  }

}
