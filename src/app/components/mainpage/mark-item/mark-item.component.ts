import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-item',
  templateUrl: './mark-item.component.html',
  styleUrls: ['./mark-item.component.scss']
})
export class MarkItemComponent  {
  @Input() title: string | null = null;
  @Input() text: string | null = null;
  @Input() image: string | null = null;

}
