import { Component, OnInit } from '@angular/core';
import { PosterService } from 'src/app/shared/services/poster.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  constructor(public service: PosterService) { }

  ngOnInit(): void {
    this.service.getPosters();
  }

}
