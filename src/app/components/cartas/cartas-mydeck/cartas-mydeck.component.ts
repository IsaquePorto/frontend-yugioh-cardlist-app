import { CartaDialogComponent } from './../../template/carta-dialog/carta-dialog.component';
import { Carta } from './../carta.model';
import { CartaService } from './../carta.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cartas-mydeck',
  templateUrl: './cartas-mydeck.component.html',
  styleUrls: ['./cartas-mydeck.component.css']
})
export class CartasMydeckComponent implements OnInit {

  constructor(private cartaService:CartaService, private dialog: MatDialog) { }

  cartasDeck: Carta[] = []

  displayedColumns: string[] = ['name','attribute', 'actions'];

  ngOnInit(): void {
    this.cartaService.readDeck().subscribe(cartas => {
      this.cartasDeck = cartas
    })
  }

  deleteDeck(id: number){
    this.cartaService.deleteDeck(id).subscribe(carta => {
      this.cartaService.showMessage("Carta excluida com sucesso!")
      this.ngOnInit()
    })
  }

  openDialog(carta: Carta): void {

    const dialogRef = this.dialog.open(CartaDialogComponent, {
      minWidth: '400px',
      data: { cardName: carta.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteDeck(carta.id)
      }
    });
  }

}
