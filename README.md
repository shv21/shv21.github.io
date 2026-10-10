# Shivraj Jadhav — Portfolio

A responsive, dark portfolio inspired by the screenshots you shared. Built with Vite, React, Tailwind CSS, and Lucide icons. The visual styling is intentionally custom CSS layered with Tailwind utilities.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
cd shivraj-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production-ready files are generated in `dist/`.

## Personalize it before publishing

1. Open `src/data.js`.
2. Replace `profile.github`, `profile.linkedin`, and `profile.email` with your public links.
3. Replace empty `github` and `demo` fields on each project with the real URLs. Empty URLs are shown as disabled links rather than fake links.
4. Verify the project descriptions and experience entries. Remove or edit anything that does not accurately represent your work.
5. Add your actual resume PDF at `public/resume.pdf`. The Resume section currently shows a designed summary preview, not a formal CV.
6. Edit the title and description in `index.html` if needed.

## Deploy
You can import the project into Vercel, or push it to your own GitHub repository and import that repository into Vercel. The default Vite build command is `npm run build`; output directory is `dist`.

## Notes
- The Blog section intentionally has an empty state; no articles have been invented.
- The site uses Google Fonts via CSS import. Remove the import at the top of `src/index.css` if you prefer no external font request.
- No theme switcher is included because this version is dark-mode only, as requested.
