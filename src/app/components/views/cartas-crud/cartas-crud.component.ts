
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cartas-crud',
  templateUrl: './cartas-crud.component.html',
  styleUrls: ['./cartas-crud.component.css']
})
export class CartasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCartasCreate(){
    this.router.navigate(["/cartas/create"])
  }

}
