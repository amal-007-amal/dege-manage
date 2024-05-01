import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-layout',
  templateUrl: './a-layout.component.html',
  styleUrl: './a-layout.component.scss'
})
export class ALayoutComponent implements OnInit {

  constructor(
    private router:Router
  ){}

  ngOnInit(): void {
  }

}
