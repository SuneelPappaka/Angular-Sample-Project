import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Notification } from '../notification/notification';
import { NotificationsServices } from '../../Servies/notifications-services';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,Notification],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true
})
export class Layout {
  greeting: string = '';
 /**
  *
  */
 constructor(private router: Router,private notificationservice: NotificationsServices) {
  
   this.setGreeting();
 }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); 
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateToStudents() {
     this.notificationservice.show(
        'Student saved successfully!',
        'success'
      );

    this.router.navigate(['/students']);
  }
  navigateToRooms() {
    this.router.navigate(['/rooms']);
  }
  navigateToAllocation() {
    this.router.navigate(['/allocation']);
  }
  navigateToFees() {
    this.router.navigate(['/fees']);
  }
  navigateToAttendance() {
    this.router.navigate(['/attendance']);
  }
  navigateToComplaints() {
    this.router.navigate(['/complaints']);
  }
  navigateToReports() {
    this.router.navigate(['/reports']);
  }

  setGreeting() {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good Morning';
    } 
    else if (hour >= 12 && hour < 17) {
      this.greeting = 'Good Afternoon';
    } 
    else if (hour >= 17 && hour < 21) {
      this.greeting = 'Good Evening';
    } 
    else {
      this.greeting = 'Good Night';
    }

  }
}
