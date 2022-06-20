import { CartaDialogComponent } from './../../template/carta-dialog/carta-dialog.component';
import { Router } from '@angular/router';
import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { CartaService } from '../carta.service';
import { Carta } from '../carta.model';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cartas-list-read',
  templateUrl: './cartas-list-read.component.html',
  styleUrls: ['./cartas-list-read.component.css']
})
export class CartasListReadComponent implements OnInit, AfterViewChecked {
  
  cartasLista: Carta[] = []

  displayedColumns: string[] = ['image', 'name', 'cardType', 'type', 'attribute','edition', 'action'];

  dataSource = new MatTableDataSource()

  constructor(private cartasService: CartaService, private _liveAnnouncer: LiveAnnouncer, 
    private router: Router,
    private dialog: MatDialog
    ) {}

   // MatPaginator Inputs
   length: number;
   pageSize = 20;
   pageSizeOptions: number[] = [20, 40, 80];
 
   // MatPaginator Output
   pageEvent: PageEvent;

   mudarPagina(){
    this.cartasService.read(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize).subscribe(cartas => {
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
    this.cartasService.read(1, this.pageSize).subscribe(cartas => {
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

  clickEdition(edition:string){
    this.cartasService.editionName = edition
    this.router.navigate(['/cartas/edition-read'])
  }

  postDeck(carta: Carta){
    this.cartasService.postDeck(carta).subscribe(result => {
      this.cartasService.showMessage("Carta adicionada ao deck")
    });
  }

  delete(idCard: number){
    this.cartasService.delete(idCard).subscribe(result => {
      this.cartasService.showMessage("Carta deletada com sucesso")
      this.ngOnInit()
    })
  }

  openDialog(carta: Carta){
    const dialogRef = this.dialog.open(CartaDialogComponent, {
      minWidth: '400px',
      data: {cardName: carta.name}
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(carta.id)
      }
    });
  }

}