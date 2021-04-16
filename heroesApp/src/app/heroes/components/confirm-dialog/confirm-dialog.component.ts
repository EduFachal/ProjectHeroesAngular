import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [
  ]
})
export class ConfirmDialogComponent implements OnInit {

  constructor( private dialogRef : MatDialogRef<ConfirmDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data : Hero ) { }

  ngOnInit(): void {
  }

  deleteMes(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close(false);
  }
}
