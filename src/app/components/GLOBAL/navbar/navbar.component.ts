// Dependencias
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  // Colapsar
  public isCollapsed: Boolean = true;
  /*
   * Ocultar barra de navegación
   */
  collapseNavbar(): void {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }

  /*
   * Hacer scroll a elemento
   */
  scrollTo(id): boolean {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
    return false;
  }
}