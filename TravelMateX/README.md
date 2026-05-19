# TravelMateX ✈️🌍

![TravelMateX](https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

**TravelMateX** is a premium, smart travel planning platform built with modern UI/UX design. It serves as a comprehensive tool to help users discover destinations, plan their budgets, check real-time weather, and save their favorite locations. 

This project was built using **Vanilla HTML, CSS, and JavaScript**, making it lightning-fast with zero dependencies or complex build steps.

## ✨ Features

- **Modern Glassmorphism UI**: High-end visual aesthetics with smooth gradients and semi-transparent elements.
- **Fully Responsive**: Flawless experience on mobile, tablet, and desktop screens.
- **Dark/Light Mode**: User preference saved locally via `localStorage`.
- **Destination Explorer**: Filter destinations based on tags (luxury, adventure, honeymoon, low budget).
- **Interactive Map Module**: Global travel spots powered by Leaflet.js.
- **Smart Budget Planner**: Real-time estimations for hotel, transport, and food costs based on travel type and duration.
- **Live Weather**: Check current weather conditions for any city (Mock-data fallback included for portfolio demonstration).
- **Wishlist System**: Save and remove favorite destinations persistently using `localStorage`.
- **Smooth Animations**: Typewriter effects, scrolling reveals, and counter animations.

## 📁 Project Structure

```
travelmatex/
│
├── index.html          # Home & Dashboard
├── explore.html        # Interactive Leaflet Map
├── weather.html        # Live Weather Module
├── planner.html        # Budget Planner Calculator
├── wishlist.html       # Saved Destinations
├── about.html          # About Page
├── contact.html        # Contact Form & Google Map
│
├── css/
│   ├── style.css       # Core styles, variables, typography
│   ├── responsive.css  # Media queries
│   ├── weather.css     # Weather page specific styles
│   └── planner.css     # Planner page specific styles
│
├── js/
│   ├── app.js             # Core UI logic (Theme, Navbar, Animations)
│   ├── recommendation.js  # Smart destination filtering
│   ├── wishlist.js        # LocalStorage wishlist handling
│   ├── weather.js         # API Fetch / Mock Data logic
│   └── planner.js         # Budget calculator algorithms
│
└── assets/
    ├── images/
    └── videos/
```

## 🛠️ Technologies Used

- **HTML5**: Semantic and clean structure.
- **CSS3**: Flexbox, Grid, CSS Variables, and Glassmorphism effects.
- **JavaScript (ES6+)**: Core logic, DOM manipulation, LocalStorage, and async Fetch API.
- **Leaflet.js**: For interactive map rendering.
- **OpenWeather API**: For real-time meteorological data.
- **FontAwesome**: Scalable vector icons.
- **Google Fonts**: Custom typography (Poppins & Montserrat).

## 🚀 How to Run Locally

Since this is a Vanilla JS application, you don't need NodeJS or a local server to run it.

1. **Clone the repository**
   ```bash
   git clone https://github.com/shaheen8543/TravelMateX.git
   ```

2. **Open the project**
   Simply double-click the `index.html` file to open it in your default web browser, or use VS Code's **Live Server** extension for a better development experience.

## 🔑 Note on API Keys

The live weather module uses the OpenWeather API. By default, the code includes a mock-data fallback so the UI will function perfectly out-of-the-box. If you wish to use real data:

1. Obtain a free API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Open `js/weather.js`.
3. Replace the placeholder string in `const API_KEY = 'YOUR_OPENWEATHER_API_KEY';` with your actual key.

## 🎓 Academic Project

This project was developed as a Major College Project, demonstrating proficiency in Frontend Web Development without the reliance on heavyweight frameworks like React or Angular.
