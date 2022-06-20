import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-dialog',
  templateUrl: './carta-dialog.component.html',
  styleUrls: ['./carta-dialog.component.css']
})
export class CartaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CartaDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { cardName: string }) { }

  nomeCarta: string;

  ngOnInit(): void {
    this.nomeCarta = this.data.cardName
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
