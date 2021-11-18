import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.page.html',
  styleUrls: ['./category-add.page.scss'],
})
export class CategoryAddPage implements OnInit {

  category: string;
  categoryDesc: string;
  amount: number;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
  }

  addCategory() {
    const cat = new Category(this.category, this.categoryDesc, this.amount);
    this.categoryService.addCategory(cat);
    this.router.navigate(['/categories']);
  }

}
