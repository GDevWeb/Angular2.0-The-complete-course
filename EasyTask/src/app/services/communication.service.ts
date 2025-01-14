import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private linkSource = new BehaviorSubject<string>('');
  currentLink = this.linkSource.asObservable();

  changeLink(link: string) {
    this.linkSource.next(link);
  }
  constructor(private communicationService: CommunicationService) {}
  ngOnInit() {
    this.communicationService.currentLink.subscribe((link) => {
      console.log('Received Link:', link);
    });
  }
}
