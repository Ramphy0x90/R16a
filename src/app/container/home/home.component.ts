import { Component } from '@angular/core';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";
import { Service } from '../../types/service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ServiceCardComponent, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    readonly services: Service[] = [
        {
            icon: "bi-layout-text-window-reverse",
            title: "Web Development",
            description: "Building responsive, high-performance websites tailored to your brand and audience."
        },
        {
            icon: "bi-layout-wtf",
            title: "Web App Development",
            description: "Developing custom, scalable web applications to streamline your operations and engage users."
        },
        {
            icon: "bi-menu-button-wide-fill",
            title: "Software Development",
            description: "Creating robust and reliable software solutions to meet your unique business challenges."
        }
    ]
}
