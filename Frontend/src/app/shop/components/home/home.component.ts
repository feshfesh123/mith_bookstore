import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() name: string;
  check: boolean;
  listname: string[] = [
  ]

  testName: string;

  constructor(private service: TestService) { }

  ngOnInit(): void {
    this.testName = this.service.get();
  }
  


}
