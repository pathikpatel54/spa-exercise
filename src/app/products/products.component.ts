import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'SmartHome Hub',
      description: 'A centralized control system for your entire smart home.',
      price: 299.99
    },
    {
      name: 'EcoEnergy Thermostat',
      description: 'Learns your habits and optimizes your home\'s temperature to save energy.',
      price: 149.99
    },
    {
      name: 'SecureGuard Cam',
      description: 'Advanced AI-powered 4K security camera with real-time threat detection.',
      price: 199.99
    },
    {
      name: 'SmartLock Pro',
      description: 'Keyless entry system with fingerprint and smartphone unlock.',
      price: 129.99
    },
    {
      name: 'VoiceAssist Speaker',
      description: 'High-quality smart speaker with built-in voice assistant.',
      price: 89.99
    },
    {
      name: 'SmartLight Bulb Set',
      description: 'Pack of 4 RGB color-changing smart LED bulbs.',
      price: 59.99
    },
    {
      name: 'PowerSave Smart Plug',
      description: 'Wi-Fi enabled smart plug for energy monitoring and remote control.',
      price: 29.99
    },
    {
      name: 'AirPure Smart Purifier',
      description: 'IoT-connected air purifier with real-time air quality monitoring.',
      price: 179.99
    },
    {
      name: 'GardenGuard Sprinkler System',
      description: 'Smart sprinkler system with weather-based scheduling.',
      price: 159.99
    }
  ];
}