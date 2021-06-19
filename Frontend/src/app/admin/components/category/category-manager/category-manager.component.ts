import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/models/productType';
import { MatDialog  } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public service: CategoryService,
    private progressBarService : ProgressBarService) { }

  ngOnInit(): void {
    this.service.getCategories();
  }

  onCreate(){
    this.service.initializeForm();
    this.dialog.open(CategoryEditComponent, {height:'auto', width:'auto'});
  }

  onEdit(id: number){
    this.service.initializeEditForm(id);
    this.dialog.open(CategoryEditComponent, {height:'auto', width:'auto'});
  }
  
  onDelete(id: number){
    this.progressBarService.startLoading();
    this.service.deleteCategory(id).subscribe(
      () => {
        this.progressBarService.completeSuccessLoading("Xóa thành công");
        this.service.getCategories();
      },
      (err) => {
        this.progressBarService.completeErrorLoading("Hệ thống lỗi, vui lòng thử lại sau");
      }
    );
  }
}
