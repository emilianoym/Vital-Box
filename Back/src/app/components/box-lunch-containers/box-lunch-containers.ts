import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Package {
    image: string;
    title: string;
    description?: string;
    link: string;
    details?: string[]; // Array of menu items
    expanded?: boolean; // State for dropdown
}

@Component({
    selector: 'app-box-lunch-containers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './box-lunch-containers.html',
    styleUrl: './box-lunch-containers.scss'
})
export class BoxLunchContainers {
    packages: Package[] = [
        {
            image: '/assets/clasico.png',
            title: 'Clásico',
            link: '#',
            details: ['Sándwich de jamón de pavo o pierna queso manchego, lechuga, cebolla, jitomate, chile jalapeño y aderezo ligero.', 'Pasta fría.', 'Ensalada fría tipo italiana.', 'Bebida a elegir: Refresco de lata, jugo de lata o agua de sabor de medio litro.', 'Snacks (elegir uno): Galletas, pastelitos Marinela, Bubulubu, Sabritas minis, chocolate o mazapán. ']
        },
        {
            image: '/assets/tradicional.png',
            title: 'Tradicional',
            link: '#',
            details: ['Baguette con jamón de pavo ó pierna (a elegir), queso manchego, lechuga, jitomate, cebolla, chile jalapeño y aderezo ligero.', 'Bebida a elegir: Refresco de lata, jugo de lata o agua de sabor de medio litro.', 'Fruta de mano (de temporada)']
        },

        {
            image: '/assets/gourmet.png',
            title: 'Gourmet',
            link: '#',
            details: ['Chapata de jamón ahumado con queso manchego, Cebolla, lechuga, jitomate, aguacate y aderezo ligero.', 'Pasta mediterránea.', 'Bebida a elegir: Refresco de lata, jugo de lata o agua de sabor de medio litro.', 'Snacks (elegir uno): Galleta de avena o chispas de chocolate, pastelitos Marinela, Bubulubu, Sabritas minis, chocolate o mazapán. ']
        },

        {
            image: '/assets/energetico.png',
            title: 'Energético',
            link: '#',
            details: ['Baguette con pechuga de pollo a la plancha, queso manchego, Cebolla morada, lechuga, jitomate y aderezo ligero.', 'Bebida a elegir: Refresco de lata, jugo de lata o agua de sabor de medio litro.', 'Snacks (elegir uno): Galletas, pastelitos Marinela, Bubulubu, Sabritas minis, chocolate o mazapán.']
        },

        {
            image: '/assets/pollo.png',
            title: 'Pollo',
            link: '#',
            details: ['Sándwich de pechuga de pollo a la plancha, queso, lechuga, cebolla, jitomate y aderezo ligero.', 'Pasta fría cremosa.', 'Bebida a elegir: Refresco de lata, jugo de lata o agua de sabor de medio litro.', 'Snacks (elegir uno): Galleta de avena, pastelitos Marinela, Bubulubu, Sabritas minis, chocolate o mazapán. ']
        },

        {
            image: '/assets/empanadas.png',
            title: 'Empanadas',
            link: '#',
            details: ['2 empanadas saladas.', 'Pasta fría cremosa.', 'Bebida a elegir: Refresco de lata, jugo de lata o agua de sabor de medio litro.', 'Snacks (elegir uno): Galleta de avena, pastelitos Marinela, Bubulubu, Sabritas minis, chocolate o mazapán. ']
        }
    ];

    openInfo(pkg: Package) {
        pkg.expanded = !pkg.expanded;
    }
}
