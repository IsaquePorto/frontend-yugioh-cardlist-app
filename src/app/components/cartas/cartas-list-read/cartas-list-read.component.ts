import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { CartaService } from '../carta.service';
import { Carta } from '../carta.model';
import { PageEvent } from '@angular/material/paginator';


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

   // MatPaginator Inputs
   length: number;
   pageSize = 20;
   pageSizeOptions: number[] = [20, 40, 80, 160];
 
   // MatPaginator Output
   pageEvent: PageEvent;

   mudarPagina(){
    this.cartasService.read2(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize).subscribe(cartas => {
      this.cartasLista = cartas.body
    })
    window.scrollTo(0, 0);
   }
 
   setPageSizeOptions(setPageSizeOptionsInput: string) {
     if (setPageSizeOptionsInput) {
       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
     }
   }

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  ngOnInit(): void {
    this.cartasService.read2(1, this.pageSize).subscribe(cartas => {
      this.cartasLista = cartas.body
      this.length = cartas.headers.get('X-Total-Count')
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