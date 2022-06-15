import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fotos: any[] = [
    {
      name:'caneca',
      img: 'assets/caneca.jpg',
      desc: 'Caneca de Yugioh irada'
    },
    {
      name:'anime',
      img: 'assets/anime.png',
      desc: 'Anime de yugioh recente'
    },
    {
      name:'duellinks',
      img: 'assets/duellinks.jpg',
      desc:'jogo online de yugioh'
    }
  ]

  constructor(private _config: NgbCarouselConfig) { }

  ngOnInit(): void {
  }


}
