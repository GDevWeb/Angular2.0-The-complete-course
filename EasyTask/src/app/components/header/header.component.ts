import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() subtitle: string = 'Manage your tasks effortlessly';
  @Input() bgColor: string = '#6200ea';
  title: string = 'EasyTask';
}
