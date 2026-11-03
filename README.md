# telespace.io — FIXED FOR KIRO GO LIVE

## WHY PREVIOUS FAILED?
- Used `text/babel` + CDN React -> Vite/Kiro ignores it, only canvas rendered
- Now 100% Vite ESM, no CDN, works on Go Live

## Run in Kiro
1. Extract zip
2. `npm install` (first time)
3. `npm run dev` -> http://localhost:5173
4. For Go Live: Build first `npm run build` then Go Live on `dist/` OR just use `npm run dev` - that's the proper way

## Structure (Kiro style)
src/
  main.jsx        -> entry
  App.jsx         -> full app (header, hero, why, domains, approach, contact, footer)
  data.js         -> edit content here
  index.css       -> all styles (variables, hud, animations)
  components/
    Starfield.jsx -> 3-layer parallax canvas (Interstellar level)

## Features
- Content always visible (no Babel dependency)
- 5 child domains with dedicated overlay pages
- Starfield with mouse + scroll parallax
- Contact: contact@telespace.in / 9250002645
- Tec in telecom in footer