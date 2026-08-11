# FoodieWeb — Modern DABA Restaurant 🍽️

**Live Demo:** [https://foodieweb-self.vercel.app/](https://foodieweb-self.vercel.app/)

A modern, responsive restaurant website built with React. FoodieWeb showcases **Modern DABA** — a culinary brand with menu browsing, table booking, blog articles, and delivery partner integrations.

## ✨ Features

- **Home Page**: Hero section, menu categories, events, delivery partners, and customer testimonials
- **Menu Page**: Browse dishes by category — Breakfast, Main Dishes, Drinks, and Desserts
- **Book a Table**: Reservation form for dining at the restaurant
- **About Page**: Restaurant story and brand information
- **Blog**: Articles and food-related content
- **Contact Page**: Get in touch with location, hours, and contact details
- **Responsive Design**: Optimized layout for desktop, tablet, and mobile
- **Smooth Navigation**: React Router with scroll-to-top on route change
- **Vercel Ready**: SPA routing configured via `vercel.json`

## 🛠️ Tech Stack

- **React** 19.2 — UI library
- **Vite** 8 — Build tool and dev server
- **React Router DOM** 7 — Client-side routing
- **Material UI Icons** — Icon set for menu categories and UI elements
- **CSS Modules** — Scoped, component-level styling

## 📁 Project Structure

```
src/
├── components/
│   ├── button/          # Reusable button component
│   ├── footer/          # Site footer
│   ├── menu/            # Menu card component
│   ├── navbar/          # Navigation and contact bar
│   └── orderApps/       # Delivery partner logos
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── Menu.jsx         # Full menu listing
│   ├── BookTable.jsx    # Table reservation
│   ├── About.jsx        # About the restaurant
│   ├── Blog.jsx         # Blog listing
│   ├── Blog2.jsx        # Blog article detail
│   └── Contact.jsx      # Contact information
├── data/
│   └── menuData.js      # Menu items data
├── assets/              # Images and SVG logos
├── App.jsx              # Route definitions
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Navigate to the project folder:

   ```bash
   cd Foodieweb
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at:

   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with hot reload     |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## 🗺️ Routes

| Path              | Page        |
| ----------------- | ----------- |
| `/`               | Home        |
| `/menu`           | Menu        |
| `/book-table`     | Book a Table|
| `/about`          | About       |
| `/blogs`          | Blog        |
| `/blogs/article`  | Blog Article|
| `/contact`        | Contact     |

## 🎨 Customization

### Menu Items

Edit `src/data/menuData.js` to add or update dishes:

```js
{
  id: 1,
  title: "Fried Eggs",
  price: "$9.99",
  category: "Breakfast",
  img: image1,
  description: "Made with eggs, lettuce, salt, oil and other ingredients.",
}
```

### Styling

Each page and component uses CSS Modules (e.g. `Home.module.css`, `Menu.module.css`). Update the corresponding `.module.css` file to change styles.

## 🌐 Deployment

The project includes a `vercel.json` for SPA routing on Vercel. Deploy by connecting the repository to [Vercel](https://vercel.com) or run:

```bash
npm run build
```

## 👨‍💻 Author

**Sarala Ratna**

- GitHub: [github.com/Sarala-932](https://github.com/Sarala-932)

---

**Bon appétit!** 🍴
