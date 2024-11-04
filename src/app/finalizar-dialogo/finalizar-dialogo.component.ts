import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-finalizar-dialogo',
  templateUrl: './finalizar-dialogo.component.html',
})
export class FinalizarDialogoComponent {
  constructor(
    public dialogRef: MatDialogRef<FinalizarDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { puntaje: number }
  ) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}
