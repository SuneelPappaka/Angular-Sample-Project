import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard {
/**
 *
 */
constructor(private router: Router) {
  
}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
