import { Component, Input, OnInit } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { ProgressBarService } from '../../services/progress-bar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input()
  isHidden: boolean = false;

  constructor( 
    private progress: NgProgress,
    public progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }
}
