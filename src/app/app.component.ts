import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarteaucitronService } from "./service/tarteaucitron.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-tarteaucitron';

  constructor(
    private tarteaucitronService: TarteaucitronService
  ) {}

  ngOnInit(): void {
    this.tarteaucitronService.initTarteaucitron()
  }

  @HostListener('window:tac.root_available', ['$event'])
  handleKeyDown(event: Event) {
    this.tarteaucitronService.showPanel()
  }

  openTarte(): void {
    this.tarteaucitronService.showPanel()
  }
}
