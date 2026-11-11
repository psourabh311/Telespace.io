# telespace.io — YOUR ICT PARTNER
Production-ready multi-file project

## Structure
```
telespace-io/
├── index.html          # Entry HTML (no-build version works directly)
├── css/
│   ├── variables.css   # Colors, tokens
│   ├── global.css      # Base, starfield, ambient, reveal
│   └── components.css  # HUD, buttons, badges
├── js/
│   ├── data.js         # All 5 domains, whyUs, approach — edit content here
│   ├── canvas.js       # 3-layer starfield with parallax (Interstellar style)
│   └── app.jsx         # Full React App — modular, no single file
├── src/                # Vite React production entry (optional)
│   ├── main.jsx
│   ├── App.jsx
│   └── styles/index.css
├── package.json
├── vite.config.js
└── README.md
```

## Run
- Zero build: just open `index.html` in browser (uses CDN React + Babel)
- Vite build: `npm install && npm run dev` → http://localhost:3000
- Build: `npm run build` → `dist/`

## Edit Points
- Content: `js/data.js` → change domains/services/taglines
- Contact: `js/app.jsx` → search `contact@telespace.in` / `9250002645`
- Theme: `css/variables.css` → cyan/violet/bg
- Canvas: `js/canvas.js` → star counts, speeds

## Features Fixed from V1
- Cards no longer disappear (stable state + overflow hidden removed)
- Dedicated pages: overlay + anchor #page-{id}
- Tec in telecom moved to footer badge
- Contact from photos injected
- TCO chart removed, ownership text kept

Same output as single-file, but now maintainable.