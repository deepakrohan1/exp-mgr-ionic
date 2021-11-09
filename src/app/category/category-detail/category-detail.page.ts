import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
 category: Category;
  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('categoryId')) {
        // add return logic
        return;
      }
      const categoryId = paramMap.get('categoryId');
      console.log(categoryId);
      this.category = this.categoryService.getCategoryById(parseInt(categoryId, 10));
    });
  }

  onDeleteCategory() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this category?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.categoryService.deleteCategory(this.category.id);
            this.router.navigate(['/categories']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
