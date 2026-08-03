import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Students } from './components/students/students';
import { Rooms } from './components/rooms/rooms';
import { Fees } from './components/fees/fees';
import { Complaints } from './components/complaints/complaints';
import { Users } from './components/users/users';
import { Layout } from './components/layout/layout';
import { Attendance } from './components/attendance/attendance';
import { Reports } from './components/reports/reports';
export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'students', component: Students },
      { path: 'rooms', component: Rooms },
      { path: 'fees', component: Fees },
      { path: 'attendance', component: Attendance },
      { path: 'complaints', component: Complaints },
      { path: 'reports', component: Reports },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }

];