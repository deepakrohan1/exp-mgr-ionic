import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories: Category[] = [
    {
      id: 1,
      category: 'Health',
      categoryDesc: 'Amount spent on Health',
      amount: 100
    },
    {
      id: 2,
      category: 'Food',
      categoryDesc: 'Amount spent on Food',
      amount: 200
    },
    {
      id: 3,
      category: 'Travel',
      categoryDesc: 'Amount spent on Travel',
      amount: 300
    },
    {
      id: 4,
      category: 'Shopping',
      categoryDesc: 'Amount spent on Shopping',
      amount: 400
    },
    {
      id: 5,
      category: 'Entertainment',
      categoryDesc: 'Amount spent on Entertainment',
      amount: 500
    },
    {
      id: 6,
      category: 'Others',
      categoryDesc: 'Amount spent on Others',
      amount: 600
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectCategory(category: Category) {
    console.log(category);
    // this.categries.push(category);
  }

}
