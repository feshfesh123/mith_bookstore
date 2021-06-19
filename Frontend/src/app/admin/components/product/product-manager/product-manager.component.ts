import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public service: ProductService,
    private progressBarService : ProgressBarService) { }

  ngOnInit(): void {
    this.service.getItems();
  }

  onCreate(){
    this.service.initializeForm();
    this.dialog.open(ProductEditComponent, {height:'auto', width:'auto'});
  }

  onEdit(id: number){
    this.service.initializeEditForm(id);
    this.dialog.open(ProductEditComponent, {height:'auto', width:'auto'});
  }
  
  onDelete(id: number){
    this.progressBarService.startLoading();
    this.service.deleteItem(id).subscribe(
      () => {
        this.progressBarService.completeSuccessLoading("Xóa thành công");
        this.service.getItems();
      },
      (err) => {
        this.progressBarService.completeErrorLoading("Hệ thống lỗi, vui lòng thử lại sau");
      }
    );
  }

}
