import { CartaService } from './../carta.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


export interface Edition{
  name: string,
  initial: string,
  year: number
}

@Component({
  selector: 'app-cartas-edition',
  templateUrl: './cartas-edition.component.html',
  styleUrls: ['./cartas-edition.component.css']
})
export class CartasEditionComponent implements OnInit {

  editions: Edition[] = [
    {name: 'Legend of Blue Eyes', initial: 'LOB', year:2002},
    {name: 'Metal Raiders', initial: 'MRD', year:2002},
    {name: 'Magic Ruler', initial: 'MRL', year:2002},
    {name: 'Pharaoh Servant', initial: 'PSV', year:2002},
    {name: 'Labirinth of Nightmare', initial: 'LON', year:2003},
    {name: 'Legacy of Darkness', initial: 'LOD', year:2003}
  ]

  edition: string = '' 

  constructor(private cartaService: CartaService, private router:Router) { }

  ngOnInit(): void {
  }

  escolheuEdicao(edicao: string){
    this.cartaService.editionName = edicao.toLowerCase()
    this.router.navigate(['/cartas/edition-read'])
  }



}
