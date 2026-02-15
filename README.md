# GitHub Users Directory

> A React Single Page Application that fetches and displays GitHub users from the official GitHub API. Built with Create React App, Axios, and Bootstrap.

[![React](https://img.shields.io/badge/React-16.14-61DAFB?logo=react)](https://reactjs.org/)
[![GitHub API](https://img.shields.io/badge/GitHub-API-181717?logo=github)](https://developer.github.com/v3/)

---

## 📋 Overview

GitHub Users Directory is a lightweight React application that connects to the [GitHub REST API](https://api.github.com/) to fetch and display a list of GitHub users. It showcases component-based architecture, async data fetching, loading states, and responsive UI design.

---

## ✨ Features

- **GitHub API Integration** – Fetches users from `https://api.github.com/users` using Axios
- **Responsive User Grid** – Displays users in a 3-column grid layout with avatars and usernames
- **Loading State** – Spinner component shown while data is being fetched
- **Component Architecture** – Modular structure with reusable components:
  - `Navbar` – Navigation bar with customizable title and icon
  - `Users` – Container for the user grid with loading logic
  - `UserItem` – Individual user card (avatar, login, link)
  - `Spinner` – Loading indicator
- **PropTypes** – Runtime type checking for component props
- **Class-based Components** – Uses `componentDidMount` for data fetching on mount

---

## 🛠 Technologies & Libraries

| Technology | Purpose |
|------------|---------|
| **React 16.14** | UI library, component rendering |
| **React DOM** | DOM rendering for web |
| **Axios** | HTTP client for GitHub API requests |
| **PropTypes** | Type checking for React component props |
| **Create React App** | Build tooling, dev server, scripts |
| **Bootstrap 5** | CSS framework (grid, cards, buttons, utilities) |
| **Font Awesome 5** | Icon library for UI icons |
| **Jest** | Testing framework |
| **React Testing Library** | Component testing utilities |
| **ESLint** | Code linting (react-app config) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/react-github-users-directory.git
cd react-github-users-directory

# Install dependencies
npm install

# Start development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates a production build in `build/` |
| `npm test` | Runs tests in watch mode |
| `npm run eject` | Ejects from Create React App (one-way) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Spinner.js
│   └── users/
│       ├── Users.js
│       └── UserItem.js
├── App.js
├── App.css
└── index.js
```

---

## 📜 License

MIT License – feel free to use this project for learning or as a starter template.

---

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a pull request.
