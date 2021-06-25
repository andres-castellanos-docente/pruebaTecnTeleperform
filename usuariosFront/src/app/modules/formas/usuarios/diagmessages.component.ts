import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-diagmessages-component',
  templateUrl: 'diagmessages.html'
})
export class DialogMessagesComponent  {
  message: string;
  constructor(
    public dialogRef: MatDialogRef<DialogMessagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
  }

  public Close(): void {
    this.dialogRef.close();
  }



}

