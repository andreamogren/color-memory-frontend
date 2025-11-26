# Color Memory Game - Frontend

A React-based memory game where a player matches pairs of cards with matching emojis. Built with Vite, TypeScript, and pure CSS.

## Overview

This is the frontend application for the Color Memory game. Players flip cards to find matching pairs, earning points for correct matches and losing points for incorrect attempts. The application communicates with a Spring Boot backend API to manage game state.

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Pure CSS** - Styling (no CSS frameworks)
- **PNPM** - Fast, disk space efficient package manager

## Prerequisites

- **Node.js** 16 or higher
- **PNPM** (install with `npm install -g pnpm`)

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Running the Application

**Development mode:**
```bash
pnpm dev
```

The application will start on `http://localhost:5173`

**Production build:**
```bash
pnpm build
```

**Preview production build:**
```bash
pnpm preview
```

## Backend Connection

This frontend application requires the Color Memory backend to be running. Make sure the backend is running on `http://localhost:8080` before starting the frontend.

See the backend README for instructions on running the backend application.

## Game Rules

- Click on cards to flip them over and reveal the emoji
- Try to find matching pairs of emojis
- Correct matches earn you 1 point
- Incorrect matches lose you 1 point (minimum 0 points)
- The game ends when all pairs are matched
- Click "Restart Game" to play again

## License

This project is currently unlicensed.