import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.scss'
})
export class Carrusel implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: '/assets/boxlunch.png',
      title: 'Box Lunch',
      description: 'La mejor opción para tus eventos corporativos y reuniones.'
    },
    {
      image: '/assets/kit_de_recuperacion.png',
      title: 'Snacks de Recuperación',
      description: 'Energía saludable para después del entrenamiento.'
    },
    {
      image: '/assets/coffee_break.png',
      title: 'Coffee Breaks',
      description: 'Momentos de pausa con sabor y calidad garantizada.'
    }
  ];

  currentIndex = 0;
  intervalId: any;
  autoPlayInterval = 5000;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    // Reset timer on manual interaction
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
