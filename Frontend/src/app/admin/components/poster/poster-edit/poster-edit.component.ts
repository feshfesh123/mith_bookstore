import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PosterService } from 'src/app/shared/services/poster.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-poster-edit',
  templateUrl: './poster-edit.component.html',
  styleUrls: ['./poster-edit.component.css']
})
export class PosterEditComponent implements OnInit {

  constructor(public service: PosterService,
    public dialogRef: MatDialogRef<PosterEditComponent>,
    private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
  }

  onSubmit(){
    //goi api
    if (this.service.form.valid){
      this.progressBarService.startLoading();
      this.service.createOrUpdatePoster().subscribe(
        (response) => {
          // xu ly khi kq OK
          this.progressBarService.completeSuccessLoading("Áp dụng ảnh bìa thành công");
          this.service.getPosters();
        },
        (err) => {
          // xu ly khi kq loi
          this.progressBarService.completeErrorLoading("Hệ thống lỗi, vui lòng thử lại sau");
        }
      )
    }
    this.onClose();
  }

}
