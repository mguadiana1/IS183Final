import { Component, OnInit } from '@angular/core';
import { BeverageService } from './beverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  beverages: Array<Object> = [];

  constructor(private router: Router, private beverageService: BeverageService) {
  }

  async ngOnInit() {
    await this.getBeverages();
  }

  async getBeverages() {
    const resp = await this.beverageService.getBeverages();
    this.beverages = resp;
  }

  goToCreate() {
    this.router.navigate(['beverage-create']);
  }

  async updateBeverage(beverage: any) {
    const beverageID = beverage.id;
    const resp = await this.beverageService.updateBeverage(beverageID, beverage);
    if (resp) {
      this.router.navigate(['beverages']);
    }
  }

  async deleteBeverage(id: string) {
    const resp = await this.beverageService.deleteBeverage(id);
    if (resp) {
      this.beverages = this.beverages.filter((beverage) => {
        return beverage['id'] !== id;
      });
    }
  }
}
