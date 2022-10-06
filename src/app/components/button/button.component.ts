import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() size: 'small' | 'medium' | 'big';
  @Input() text: string;
  @Input() fulWidth: boolean;

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  public click() {
    this.onClick.emit();
  }

  constructor() {
    this.size = 'big';
    this.text = '';
    this.fulWidth = false;
    this.type = 'button';
  }

  ngOnInit(): void {}
}
