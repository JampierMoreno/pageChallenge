// --- Dependencies ---
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// --- Pages ---
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'compras',
    component: ShoppingPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
