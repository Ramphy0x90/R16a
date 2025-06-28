import { Component, HostListener, Input } from '@angular/core';
import { NAV_BAR_ROUTES } from '../../app.routes';
import { NavBar } from '../../types/nav-bar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    readonly navBarRoutes: readonly NavBar[] = NAV_BAR_ROUTES;
    activeSection: string = this.navBarRoutes[0].route;

    @Input() appName?: string;

    @HostListener('window:scroll', [])
    onScroll(): void {
        for (const id of this.navBarRoutes.map(nbR => nbR.route)) {
            const el = document.getElementById(id);

            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom > 80) {
                    this.activeSection = id;
                    break;
                }
            }
        }
    }
}
