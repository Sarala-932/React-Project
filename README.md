# macOS Desktop Portfolio 🖥️

A modern, interactive portfolio website with a macOS-inspired desktop interface. Built with React, this project showcases a developer's work, skills, and contact information through draggable windows and smooth animations.

## ✨ Features

- **macOS-Style Interface**: Authentic desktop experience with draggable, resizable windows
- **Interactive Dock**: Smooth hover animations with scale and parallax effects
- **Multiple Portals**:
  - 📁 **GitHub Projects**: Browse portfolio projects with detailed descriptions
  - 📝 **Notes**: Display markdown-based notes and documentation
  - 🎵 **Spotify**: Embedded Spotify playlist integration
  - 📄 **Resume**: Professional resume viewer
  - 💻 **CLI**: Interactive command-line interface emulator
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GPU-accelerated transitions and hover effects
- **Draggable Windows**: Move and arrange windows freely using react-rnd

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool & dev server
- **SCSS** - Styling with variables and mixins
- **react-rnd** 10.5.2 - Draggable, resizable windows
- **react-markdown** 10.1.0 - Markdown rendering
- **react-syntax-highlighter** 16.1.1 - Code syntax highlighting
- **react-console-emulator** 5.0.2 - Terminal emulator

## 📁 Project Structure

```
src/
├── components/
│   ├── Dock.jsx              # Main dock component with icon buttons
│   ├── dock.scss             # Dock styling with animations
│   ├── MacWindow.jsx         # Reusable window component
│   ├── window.scss           # Window styling
│   ├── Nav.jsx               # Navigation component
│   └── windows/
│       ├── Github.jsx        # GitHub projects display
│       ├── Notes.jsx         # Notes viewer
│       ├── Resume.jsx        # Resume display
│       ├── Spotify.jsx       # Spotify embed
│       ├── Cli.jsx           # CLI emulator
│       └── *.scss            # Component-specific styling
├── assets/
│   └── github.json           # Portfolio projects data
├── App.jsx                   # Main application component
├── app.scss                  # Global styling
└── main.jsx                  # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Project-MacOS
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Adding New Projects

Edit `src/assets/github.json` to add or modify portfolio projects:

```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "image": "/path/to/image.jpg",
  "tags": ["React", "Node.js"],
  "repoLink": "https://github.com/...",
  "demoLink": "https://demo.com"
}
```

### Dock Icons

Modify `src/components/Dock.jsx` to add or remove dock icons. Update the corresponding SVG/PNG images in the `public/doc-icons/` folder.

### Window Content

Each window component extends `MacWindow.jsx`. Customize content in:

- `src/components/windows/Github.jsx` - Portfolio projects
- `src/components/windows/Notes.jsx` - Notes and documentation
- `src/components/windows/Resume.jsx` - Resume display
- `src/components/windows/Spotify.jsx` - Music playlist
- `src/components/windows/Cli.jsx` - Terminal emulator

### Styling

Global styles use SCSS. Customize in:

- `src/app.scss` - Global styles
- `src/components/dock.scss` - Dock animations and responsiveness

## 📱 Responsive Breakpoints

- **1024px and below**: Tablet view
- **768px and below**: Mobile view
- **480px and below**: Small mobile view

## 🎯 Key Features Breakdown

### Draggable Windows

Windows use `react-rnd` library for drag and drop functionality with smooth animations and automatic positioning.

### Dock Animation

The dock features a macOS-like hover effect where:

- Hovered icon scales up (1.4x on desktop)
- Neighboring icons scale proportionally
- Y-axis translation creates lifting effect
- GPU acceleration ensures smooth 60fps performance

### Window Management

State management handles opening/closing windows via the dock buttons:

```jsx
onClick={() => setWindowsState((state) => ({...state, github: true}))}
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 👨‍💻 Author

**Sarala Ratna**

- GitHub: [github.com/saralaratna](https://github.com/saralaratna)
- LinkedIn: [linkedin.com/in/saralaratna](https://linkedin.com/in/saralaratna)

---

**Happy coding!** 🚀
# React-Project
