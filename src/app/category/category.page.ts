import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, OnDestroy {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
    private router: Router) { }

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

  updateCategory(categoryId: string, slidingCat: IonItemSliding) {
    slidingCat.close();
    console.log('update category: ' + categoryId);
    this.router.navigate(['/', 'categories', categoryId]);
  }

  ngOnDestroy() {
    // this.categories = [];
  };

}
