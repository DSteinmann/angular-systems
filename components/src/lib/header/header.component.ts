import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'as-header',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
}
