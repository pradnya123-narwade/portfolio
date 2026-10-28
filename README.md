# Pradnya Narwade — AI & Data Science Portfolio (React)

A modern, high-performance portfolio website built with **React** recreated with 100% pixel-perfect fidelity from the original HTML/CSS design.

---

## 🚀 Features

- **Pixel-Perfect Recreation**: Identical colors, typography, glassmorphism, animations, borders, and shadows.
- **Dynamic Typing Effect**: Built-in reactive typewriter effect cycling through professional titles in the Hero section.
- **Interactive Orbiting Profile Card**: Smooth CSS rotation animations with dual-gradient glow borders.
- **Dark / Light Theme Toggle**: Seamless mode switching with instant state updates and persistent CSS custom properties.
- **Responsive Mobile Navigation**: Custom hamburger navigation with smooth scrolling and active section tracking.
- **Animated Skill Bars**: Gradient progress bars with smooth fill animation upon scroll.
- **Project Cards with Radial Glow**: Interactive hover states with localized blur highlights and tech stack tags.
- **Education & Beyond Code Timelines**: Structured academic milestone track and extracurricular activity cards.
- **Modular Architecture**: Clean React functional components, hooks (`useState`, `useEffect`), and structured arrays for repeated data.

---

## 📁 Folder Structure

```
portfolio/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── avatar.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

## 🛠️ Installation & Setup

### 1. Navigate to the project directory
```bash
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 4. Build for production
```bash
npm run build
```
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

## 🎨 Design System

| Token | Dark Mode (Default) | Light Mode |
| :--- | :--- | :--- |
| `--bg` | `#08080d` | `#f7f7fb` |
| `--bg-secondary` | `#101018` | `#ffffff` |
| `--card` | `rgba(255, 255, 255, 0.055)` | `rgba(0, 0, 0, 0.045)` |
| `--primary` | `#9b6cff` | `#7651d6` |
| `--secondary` | `#5ee7df` | `#129c95` |
| `--text` | `#f5f5f7` | `#17171c` |
| `--muted` | `#a5a5b5` | `#626273` |

---

## 📄 License
This project is open-source and free to use.
