import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  standalone: false,
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {
  public value?: string;
  public value1: string = '1';
}
