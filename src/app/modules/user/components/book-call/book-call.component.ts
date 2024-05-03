import { Component } from '@angular/core';

@Component({
  selector: 'app-book-call',
  templateUrl: './book-call.component.html',
  styleUrl: './book-call.component.scss'
})
export class BookCallComponent {

  selected!:Date|null

  getAvailability(event:any){
    console.log("event emit ",event)
  }
}
