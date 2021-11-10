import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, OnDestroy {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onSelectCategory(category: Category) {
    console.log(category);
    // this.categries.push(category);
  }

  ionViewWillEnter() {
    this.categories = this.categoryService.getCategories();

    console.log('ionViewWillEnter CategoryPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CategoryPage');
  }

  ngOnDestroy() {
    // this.categories = [];
  };

}
