import {Component, signal} from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly Menu = Menu;
  readonly X = X;

  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
