import { Injectable, Service, signal } from '@angular/core';

 export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
}
@Injectable({   
providedIn: 'root'
})
export class NotificationsServices {
toast = signal<Toast | null>(null);


  show(message: string, type: 'success' | 'error' | 'info' = 'success') {

    this.toast.set({
      message,
      type
    });


    setTimeout(() => {
      this.toast.set(null);
    }, 3000);

  }
}
