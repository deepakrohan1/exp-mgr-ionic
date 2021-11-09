import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      id: 1,
      category: 'Health',
      categoryDesc: 'Amount spent on Health',
      amount: 100,
      expenses: ['Tab', 'Hospital']
    },
    {
      id: 2,
      category: 'Food',
      categoryDesc: 'Amount spent on Food',
      amount: 200,
      expenses: ['Grocery', 'Eggs']
    },
    {
      id: 3,
      category: 'Travel',
      categoryDesc: 'Amount spent on Travel',
      amount: 300,
      expenses: ['NYC', 'Chicago']
    },
    {
      id: 4,
      category: 'Shopping',
      categoryDesc: 'Amount spent on Shopping',
      amount: 400,
      expenses: ['Walmart', 'Dress']
    },
    {
      id: 5,
      category: 'Entertainment',
      categoryDesc: 'Amount spent on Entertainment',
      amount: 500,
      expenses: ['Movies', 'Cinemas']
    },
    {
      id: 6,
      category: 'Others',
      categoryDesc: 'Amount spent on Others',
      amount: 600,
      expenses: ['Rent', 'Gym']
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return [...this.categories];
  }

  getCategoryById(id: number): Category {
    return this.categories.find(category => category.id === id);
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}
