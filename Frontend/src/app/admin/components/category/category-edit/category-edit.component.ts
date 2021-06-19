import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(public service: CategoryService,
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    private progressBar: ProgressBarService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.service.form.valid){
      this.progressBar.startLoading();
      this.service.createOrUpdateCategory().subscribe(
        () => {
          this.progressBar.completeSuccessLoading("Áp dụng danh mục thành công");
          this.service.getCategories();
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
    this.service.form.reset();
    this.dialogRef.close();
  }
}
