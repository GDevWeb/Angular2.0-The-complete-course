import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });
  onSelectUser() {}

  // *timer*
  currentTime: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    });
  }
}