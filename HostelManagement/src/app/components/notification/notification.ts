import { Component } from '@angular/core';
import { NotificationsServices } from '../../Servies/notifications-services';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  standalone: true
})
export class Notification {
  /**
   *
   */
  constructor(private notificationsService: NotificationsServices) {
    
  }
}
