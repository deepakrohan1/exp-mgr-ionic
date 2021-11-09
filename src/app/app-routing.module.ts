import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  /**
   * Load Categories and Category Details on passing the request id
   */
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: ':categoryId',
        loadChildren: () => import('./category/category-detail/category-detail.module').then( m => m.CategoryDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
