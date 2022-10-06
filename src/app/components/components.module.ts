import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCardComponent } from './products-card/products-card.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ProductsCardComponent, InputComponent, ButtonComponent],
  exports: [ProductsCardComponent, InputComponent, ButtonComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
