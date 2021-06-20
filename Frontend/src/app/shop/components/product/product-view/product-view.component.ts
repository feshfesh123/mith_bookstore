import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() imageUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
