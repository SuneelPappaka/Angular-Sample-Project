// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {

//   const router = inject(Router);

//   const token = localStorage.getItem('token');

//   if (token) {
//     return true;
//   }

//   return router.createUrlTree(['/login']);
// };


// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const istokenIn = localStorage.getItem('token') === 'true';

  if (istokenIn) {
    return true;
  }

  return router.createUrlTree(['/login']);
};