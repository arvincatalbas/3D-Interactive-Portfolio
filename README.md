# 3D Interactive Portfolio 🚀

An immersive, premium 3D developer portfolio website built using React, Three.js, and React Three Fiber (R3F). The portfolio places the visitor inside an interactive 3D developer room/workspace where they can interact with physical objects to explore projects, credentials, resume, skills, and real-time GitHub activity.

---

## 🎨 Design & Theme

- **Aesthetic**: Premium dark-mode workspace using soft lighting, neon accent glows, and responsive glassmorphism overlays.
- **Dynamic Theme Switcher**: 5 gorgeous pre-configured theme presets that instantly adjust the 3D scene's colors, ambient lighting, spotlight accents, fog, and HTML UI overlays:
  - **Cyber Emerald** (`cyberpunk`): High-tech neon teal and magenta.
  - **Neon Sunset** (`sunset`): Warm purple, pink, and orange gradient highlights.
  - **Deep Ocean** (`ocean`): Cool, deep marine blues and purples.
  - **Vibrant Amber** (`amber`): Golden, retro warm amber tones.
  - **Tokyo Night** (`tokyo`): High-tech neon purple and cyan.
- **Interactivity**: Clicking on 3D objects in the room seamlessly zooms the camera to focus on them while fading in rich 2D UI panels.
- **Micro-animations**: Smooth hover transitions, floating 3D elements, pulsing notifications, and Framer Motion transitions.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **3D Library**: Three.js
- **React 3D Renderer**: React Three Fiber (R3F)
- **3D Helpers**: `@react-three/drei`
- **Animations**: `framer-motion` (2D overlays) and Three.js Lerp (3D Camera navigation)
- **Icons**: `lucide-react`
- **Styling**: Vanilla CSS (Custom properties, theme variables, and modern flex/grid layouts)

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
│   │   │   ├── Room.jsx      # Core Room wrapper (holds desk, walls, flooring, rug)
│   │   │   ├── Desk.jsx      # Desk unit + workstation setups (keyboard, mouse, mug, plant)
│   │   │   ├── Laptop.jsx    # Virtual computer screen using Drei <Html> (Project explorer)
│   │   │   ├── Bookshelf.jsx # Interactive shelf holding credentials/hobbies
│   │   │   ├── WallFrames.jsx# Frames on the wall displaying certificates
│   │   │   ├── Clipboard.jsx # Clipboard for Resume reading
│   │   │   ├── Terminal.jsx  # Interactive CRT terminal for GitHub activity
│   │   │   ├── ContactObject.jsx # Interactive 3D smartphone for messaging
│   │   │   ├── CameraMover.jsx # Interpolates camera position, lookAt target, and FOV based on routing
│   │   │   └── Lights.jsx    # Shadow-mapped studio lighting config
│   │   └── ui/               # Reusable 2D UI Components
│   │       ├── Navigation.jsx# Glassmorphism overlay menu
│   │       ├── Loader.jsx    # Preloader overlay with progress feedback
│   │       ├── Settings.jsx  # Configuration dropdown for themes
│   │       ├── Icons.jsx     # Reusable custom SVG icons
│   │       └── ScrambleText.jsx# Digital scramble/decrypt text animation component
│   ├── pages/                # Route components (2D HTML overlays)
│   │   ├── Home.jsx          # Intro overlay (Overall room view)
│   │   ├── Projects.jsx      # Project list & details modal
│   │   ├── Certificates.jsx  # Certificate viewer gallery
│   │   ├── Resume.jsx        # Online resume viewer & PDF download
│   │   ├── Github.jsx        # Retro terminal shell querying GitHub API
│   │   ├── Skills.jsx        # Skills visualization dashboard
│   │   └── Contact.jsx       # Contact form with validation and social links
│   ├── routes/
│   │   └── index.jsx         # React Router v7 routing configuration
│   ├── config/
│   │   └── themes.js         # Theme preset configs (colors, custom light values)
│   ├── App.css               # Base styles
│   ├── App.jsx               # R3F Canvas + 2D Overlay Layout & Theme State
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
- `react-router-dom` (v7): Manages URL routing linked to camera look-at nodes.
- `framer-motion`: Smooth spring animations for 2D overlays and modals.
- `lucide-react`: Modern SVG vector icons.
- `canvas-confetti`: Triggered during certificate unlocks/resume viewing.

### Development Dependencies (`devDependencies`):
- `vite`: Fast build tool and development server.
- `@types/three`: Type definitions for Three.js.
- `@types/canvas-confetti`: Type definitions for Confetti.
- `eslint`: Code linting tool.

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd 3d-portfolio
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory (or copy `.env.example`) and add your Web3Forms access key for the contact form to function:
```bash
# Rename the example file
cp .env.example .env
```
Then, edit the `.env` file and replace `your_access_key_here` with your actual Web3Forms access key:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Production Build
```bash
npm run build
```

---

## 📸 Core Features Implementation

1. **3D Room Scene**: Created using custom geometries (desk, laptop, monitors, bookshelf, plants) stylized with metallic, matte, and emission shaders.
2. **Interactive Laptop Screen**: Utilizes `@react-three/drei`'s `<Html transform>` component to render a scrollable, responsive HTML projects list directly onto the laptop monitor mesh.
3. **Wall Certificate Gallery**: Picture frames mapped with certificate textures that expand to full screen using Framer Motion when clicked.
4. **Interactive GitHub CRT Terminal**: A bulky retro computer monitor styled like a terminal screen that executes actual API requests and displays user profiles, repository counts, and latest projects using the GitHub REST API.
5. **Interactive Smartphone**: A custom phone model displaying chat messages that prompts user interaction and links to the contact section.
6. **Functional Contact Form**: Connected to the Web3Forms API with automatic validation, error handling, support for simulated demo fallback, and responsive UI feedback.
7. **Skills Dashboard**: Visualizes technical capabilities in programming, frameworks, and infrastructure with custom-colored progress indicators.
8. **Decryption Text Scramble**: Custom `<ScrambleText>` component that applies a digital scramble/decrypt animation to text on load and hover (used for the developer name on the home page).
9. **Route-Based Camera Transitions**: The declarative `CameraMover` component listens to the active route from `react-router-dom` and triggers a smooth lerp to slide and rotate the camera towards target physical objects in the room.


# 3D Interactive Portfolio 🚀
#### Link: https://3-d-interactive-portfolio-zeta.vercel.app/
