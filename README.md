# 🎓 Student Attendance Viewer

A premium, glassmorphism-styled React application for teachers to dynamically track student attendance, quickly identify low-performing students, and take immediate action.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **API Integration**: Fetches real user profiles and intelligently simulates dynamic attendance data.
- **Advanced State Management**: Complete local setup handling loading states, API errors, empty states, and deeply synchronized conditional filters.
- **Smart Filtering & Sorting**:
  - Filter students instantly by *Present* or *Absent* status.
  - One-click toggle switch to isolate students with **<75% attendance**.
  - One-click toggle to flexibly **sort by Attendance %**.
- **Modern UI / UX**:
  - Completely custom *Glassmorphism* layered styling.
  - Clean Vanilla CSS with smooth hover animations and entrance transitions.
  - Live SVG Circular Progress charts for immediate visual feedback.
  - Interactive row highlighting mapping to isolated state tracking.
- **Clean Component Architecture**: A robust decoupled structural layout extracting APIs, logic chunks, and UI pieces.

## 🚀 Getting Started

To run this application locally, ensure you have Node.js and NPM installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/suryawanshiheramb11/Project-1-React.git
   cd "Project 1 react"
   ```

2. **Install local dependencies:**
   ```bash
   npm install
   ```

3. **Spin up the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) or your outputted Vite port in your browser.

## 📁 Project Structure

```text
src/
├── api/
│   └── studentApi.js       # Data fetching, transformation, and randomization logic
├── components/
│   ├── DashboardHeader.jsx # Premium hero title layout
│   ├── FilterControls.jsx  # All UI toggles and filter chips
│   ├── StudentCard.jsx     # Individual row element with dynamic SVG data arcs
│   └── StudentList.jsx     # Parent grid handler with loading and empty state fallback
├── App.jsx                 # Stateful orchestrator component
├── index.css               # The styling backbone enabling our beautiful dynamic interface
└── main.jsx                # Application entry point
```

## 🛠 Tech Stack
- **Structure**: React 18
- **Build Tool**: Vite
- **Styling**: Contextual Vanilla CSS
- **Data Source**: JSONPlaceholder (with localized randomization scripts)
