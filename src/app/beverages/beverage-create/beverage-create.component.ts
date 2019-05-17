import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage-create.component.html',
  styleUrls: ['./beverage-create.component.css']
})

export class BeverageCreateComponent implements OnInit {

  beverage: Object = {};

  constructor(
    private beverageService: BeverageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.beverage = {};

  }
  async createBeverage(beverage: Object) {
    const resp = await this.beverageService.createBeverage(beverage);
    if (resp) {
      this.router.navigate(['/beverage']);
    }
  }

}
