import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(public service: ProductService,
    public dialogRef: MatDialogRef<ProductEditComponent>,
    private progressBar: ProgressBarService,
    public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories();
  }

  onSubmit(){
    if (this.service.form.valid){
      this.progressBar.startLoading();
      this.service.createOrUpdateItem().subscribe(
        () => {
          this.progressBar.completeSuccessLoading("Áp dụng danh mục thành công");
          this.service.getItems();
        },
        (err) => {
          console.log(err);
          this.progressBar.completeErrorLoading(err.error.errors[0]);
        }
      );
      this.onClose();
    }
  }

  onClose(){
    console.log(this.service.form.value);
    this.service.form.reset();
    this.dialogRef.close();
  }

}
