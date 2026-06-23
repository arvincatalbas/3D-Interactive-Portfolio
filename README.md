# 3D Interactive Portfolio 🚀

An immersive, premium 3D developer portfolio website built using React, Three.js, and React Three Fiber (R3F). The portfolio places the visitor inside an interactive 3D developer room/workspace where they can interact with physical objects to explore projects, credentials, resume, and real-time GitHub activity.

---

## 🎨 Design & Theme

- **Aesthetic**: Premium dark-mode workspace using soft lighting, neon accent glows, and responsive glassmorphism overlays.
- **Interactivity**: Clicking on 3D objects in the room seamlessly zooms the camera to focus on them while fading in rich 2D UI panels.
- **Micro-animations**: Smooth hover transitions, floating 3D elements, and physics-based particle effects.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **3D Library**: Three.js
- **React 3D Renderer**: React Three Fiber (R3F)
- **3D Helpers**: `@react-three/drei`
- **Animations**: `framer-motion` (2D overlays) and `maath` / GSAP (3D Camera Lerp)
- **Icons**: `lucide-react`
- **Styling**: Vanilla CSS (Custom properties & modern flex/grid layouts)

---

## 📂 Project Folder Structure

This project follows a component-driven routing architecture where each route dynamically changes the 3D canvas viewport and mounts a dedicated 2D overlay component:

```text
3d-portfolio/
├── public/
│   ├── models/               # 3D .gltf / .glb asset models
│   ├── textures/             # Image textures for custom meshes
│   ├── icons.svg             # SVG sprite sheets
│   └── resume.pdf            # Downloadable resume document
├── src/
│   ├── assets/               # Local images, project screenshots, certificates
│   ├── components/
│   │   ├── canvas/           # React Three Fiber (R3F) 3D Components
│   │   │   ├── Room.jsx      # Core Room wrapper (holds desk, walls, flooring)
│   │   │   ├── Desk.jsx      # Desk unit + workstation setups
│   │   │   ├── Laptop.jsx    # Virtual computer screen using Drei <Html>
│   │   │   ├── Bookshelf.jsx # Interactive shelf holding credentials/hobbies
│   │   │   ├── WallFrames.jsx# Frames on the wall displaying certificates
│   │   │   ├── Clipboard.jsx # Clipboard for Resume reading
│   │   │   └── Lights.jsx    # Shadow-mapped studio lighting config
│   │   └── ui/               # Reusable 2D UI Components
│   │       ├── Navigation.jsx# Glassmorphism overlay menu
│   │       ├── Card.jsx      # Elegant glass UI card
│   │       └── Loader.jsx    # Preloader overlay with progress feedback
│   ├── pages/                # Route components (File-Based pages)
│   │   ├── Home.jsx          # Intro overlay (Overall room view)
│   │   ├── Projects.jsx      # Project lists & details modal
│   │   ├── Certificates.jsx  # Certificate viewer gallery
│   │   ├── Resume.jsx        # Online resume viewer & PDF download
│   │   └── Github.jsx        # Retro terminal shell querying GitHub API
│   ├── routes/
│   │   └── index.jsx         # React Router v6 route configuration
│   ├── hooks/
│   │   └── useCameraMover.jsx# Interpolates camera targets based on route
│   ├── App.jsx               # R3F Canvas + 2D Overlay Layout
│   ├── index.css             # Unified CSS design system & custom properties
│   └── main.jsx              # Application entrypoint
```

---

## 📦 Dependencies

Here are the key packages required for the project:

### Production Dependencies (`dependencies`):
- `three`: Core 3D engine library.
- `@react-three/fiber`: React wrapper for Three.js.
- `@react-three/drei`: Useful helpers, controls, and components (e.g. `<Html>`, `<PerspectiveCamera>`).
- `@react-three/postprocessing`: Advanced post-processing effects (glows, ambient occlusion).
- `react-router-dom`: Manages URL routing linked to camera look-at nodes.
- `framer-motion`: Smooth spring animations for 2D overlays and modals.
- `lucide-react`: Modern SVG vector icons.
- `canvas-confetti`: Triggered during certificate unlocks/resume viewing.

### Development Dependencies (`devDependencies`):
- `vite`: Build tool and dev server.
- `@types/three`: Type definitions for Three.js.
- `@types/canvas-confetti`: Type definitions for Confetti.

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd 3d-portfolio
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 📸 Core Features Implementation Plan

1. **3D Room Scene**: Created using custom geometries (desk, laptop, monitors, bookshelf, plants) stylized with metallic, matte, and emission shaders.
2. **Interactive Laptop Screen**: Utilizes `@react-three/drei`'s `<Html transform>` component to render a scrollable, responsive HTML projects list directly onto the laptop monitor mesh.
3. **Wall Certificate Gallery**: Picture frames mapped with certificate textures that expand to full screen using Framer Motion when clicked.
4. **Holographic Github Terminal**: A glowing console terminal styled like CRT monitors that executes mock queries and displays GitHub repositories and contribution counts using Fetch API.
5. **Route-Based Camera Transitions**: The `useCameraMover` hook reads the active location from `react-router-dom` and triggers a smooth linear interpolation (Lerp) to slide and rotate the camera towards the targeted interactive objects.


## 🎨 The 3D Interactive Portfolio Output
<img width="1920" height="1080" alt="Screenshot (1202)" src="https://github.com/user-attachments/assets/c4964d41-b9e3-4141-bbe1-10967a4d2594" />
