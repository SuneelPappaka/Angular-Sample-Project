import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Students } from './components/students/students';
import { Rooms } from './components/rooms/rooms';
import { Fees } from './components/fees/fees';
import { Complaints } from './components/complaints/complaints';
import { Reports } from './components/reports/reports';
import { Layout } from './components/layout/layout';
import { Attendance } from './components/attendance/attendance';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  // Default page
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login - accessible without authentication
  {
    path: 'login',
    component: Login
  },

  // Protected pages
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'students', component: Students },
      { path: 'rooms', component: Rooms },
      { path: 'fees', component: Fees },
      { path: 'attendance', component: Attendance },
      { path: 'complaints', component: Complaints },
      { path: 'reports', component: Reports },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

  // Invalid URL
  {
    path: '**',
    redirectTo: 'login'
  }
];