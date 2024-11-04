import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-die',
  template: '<div class="die">{{ valor }}</div>',
  styleUrls: ['./die.component.css']
})
export class DieComponent {
  @Input() valor: number = 1;
}
