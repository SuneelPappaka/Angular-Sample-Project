import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './Servies/loader.service.ts';
import { Loader } from './components/loader/loader.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HostelManagement');
  constructor(public loaderService: LoaderService) {}  
}
