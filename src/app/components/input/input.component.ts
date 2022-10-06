import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() name: string;
  @Input() type: string;
  @Input() autocomplete: string;
  @Input() icon: string;

  @Output() onBlur: EventEmitter<string> = new EventEmitter();

  public inputValue: string;

  public saveValue() {
    this.onBlur.emit(this.inputValue);
  }

  constructor() {
    this.label = '';
    this.placeholder = '';
    this.id = '';
    this.name = '';
    this.type = '';
    this.autocomplete = 'off';
    this.icon = '';
    this.inputValue = '';
  }

  ngOnInit(): void {}
}
