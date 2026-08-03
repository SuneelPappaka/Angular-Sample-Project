import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Students } from './components/students/students';
import { Rooms } from './components/rooms/rooms';
import { Fees } from './components/fees/fees';
import { Complaints } from './components/complaints/complaints';
import { Users } from './components/users/users';
export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: Login },
    {path: 'dashboard', component: Dashboard },
    {path: 'students', component: Students },
    {path: 'rooms', component: Rooms },
    {path: 'fees', component: Fees },
    {path: 'complaints', component: Complaints },
    {path: 'users', component: Users },
];
