// --- Dependencies ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- Pages ---
import { MainPageComponent } from './main-page/main-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

// --- Components ---
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainPageComponent, ShoppingPageComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
