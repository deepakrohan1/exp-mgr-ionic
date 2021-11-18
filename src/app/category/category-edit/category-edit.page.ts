import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

  categoryLoaded: Category;
  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.router.navigateByUrl('/categories');
        return;
      }
      const categoryId = paramMap.get('id');
      this.categoryLoaded = this.categoryService.getCategoryById(parseInt(categoryId, 10));
    });

  }


  updateCategory() {
    this.categoryService.updateCategory(this.categoryLoaded);
    this.router.navigateByUrl('/categories');
  }
}
