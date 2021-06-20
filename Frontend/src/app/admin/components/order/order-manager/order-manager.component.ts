import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { OrderEditComponent } from '../order-edit/order-edit.component';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public service: OrderService,
    private progressBarService : ProgressBarService) { }

  ngOnInit(): void {
    this.service.getOrders();
  }

  onStatus(id: number){
    this.service.updateStatus(id);
  }

  onEdit(id: number){
    this.service.selectOrder(id);
    this.dialog.open(OrderEditComponent, {height:'auto', width:'auto'});
  }
}
