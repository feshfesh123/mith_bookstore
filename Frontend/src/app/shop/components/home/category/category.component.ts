import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { PosterService } from 'src/app/shared/services/poster.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public service: CategoryService) { }

  async ngOnInit(): Promise<void> {
    this.service.getCategories();
  }

}
