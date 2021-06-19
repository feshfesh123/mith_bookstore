import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Poster } from 'src/app/models/poster';
import { PosterService } from 'src/app/shared/services/poster.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { PosterEditComponent } from '../poster-edit/poster-edit.component';

@Component({
  selector: 'app-poster-manager',
  templateUrl: './poster-manager.component.html',
  styleUrls: ['./poster-manager.component.css']
})
export class PosterManagerComponent implements OnInit {
  
  constructor(private dialog: MatDialog,
    public service: PosterService,
    private progressBarService: ProgressBarService) { 
  }

  ngOnInit(): void {
    this.service.getPosters();
  }

  onCreate(){
    this.service.initializeForm();
    this.dialog.open(PosterEditComponent, {height:'auto', width:'auto'});
  }

  onEdit(id: number){
    this.service.initializeEditForm(id);
    this.dialog.open(PosterEditComponent, {height:'auto', width:'auto'});
  }

  onDelete(id: number){
    this.progressBarService.startLoading();
    this.service.deletePoster(id).subscribe(
      () => {
        this.progressBarService.completeSuccessLoading("Xóa thành công");
        this.service.getPosters();
      },
      (err) => {
        this.progressBarService.completeErrorLoading("Hệ thống lỗi, vui lòng thử lại sau");
      }
    );
  }

}
