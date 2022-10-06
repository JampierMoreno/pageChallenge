// --- Dependecies ---
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// --- Interfaces ---
import { Form } from '../interface';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.scss'],
})
export class ShoppingPageComponent implements OnInit {
  public fields: Form;

  public saveValueField(
    value: string,
    name:
      | 'address'
      | 'city'
      | 'fullName'
      | 'postalCode'
      | 'email'
      | 'phone'
      | 'country'
  ) {
    this.fields[name] = value;
  }

  public handleCheck(event: any) {
    this.fields.saveInfo = event.target.checked;
  }

  public sendData() {
    console.log(this.fields);
    this.router.navigateByUrl('');
  }

  constructor(private router: Router) {
    this.fields = {
      address: '',
      city: '',
      email: '',
      fullName: '',
      phone: '',
      postalCode: '',
      country: '',
      saveInfo: false,
    };
  }

  ngOnInit(): void {}
}
