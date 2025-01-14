import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() links: string[] = [];
  @Output() linkSelected = new EventEmitter<string>();

  onLinkClick(link: string) {
    this.linkSelected.emit(link);
  }
}
