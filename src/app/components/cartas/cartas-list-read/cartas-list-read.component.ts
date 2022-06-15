import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { CartaService } from '../carta.service';
import { Carta } from '../carta.model';

@Component({
  selector: 'app-cartas-list-read',
  templateUrl: './cartas-list-read.component.html',
  styleUrls: ['./cartas-list-read.component.css']
})
export class CartasListReadComponent implements OnInit, AfterViewChecked {
  
  cartasLista: Carta[] = []

  displayedColumns: string[] = ['image', 'name', 'cardType', 'type', 'attribute','edition'];

  dataSource = new MatTableDataSource()

  constructor(private cartasService: CartaService, private _liveAnnouncer: LiveAnnouncer) {
    
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.cartasService.read().subscribe(cartas => {
      this.cartasLista = cartas
    })
  }

  ngAfterViewChecked(): void {
    this.dataSource.data = this.cartasLista
    this.dataSource.sort = this.sort
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}