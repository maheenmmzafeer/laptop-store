# Tech Luxe Laptop Store

A highly immersive, premium single-page e-commerce experience designed for the modern "Tech Luxe" laptop. Inspired by high-end cinematic product reveals, this project merges complex scroll-driven 3D sequences with butter-smooth native CSS snapping.

## 🌟 Key Features

- **Immersive 3D Frame Sequence**: A 37-frame 3D laptop render mapped directly to user scroll velocity using GSAP's `ScrollTrigger`.
- **Magnetic Scroll Snapping**: As the user scrolls through the 500vh Hero section, the timeline magnetically snaps to precise text transition frames ("UNLEASHED", "Silicone forged in fire.", "A new era begins.") creating an incredibly satisfying narrative flow.
- **True CSS Section Snapping**: The entire application is wrapped in `scroll-snap-type: y mandatory`, ensuring the browser mechanically locks each section (Hero, Editorial, Specs, Gallery, Pre-order) perfectly to the top of the viewport.
- **Native Horizontal Scroll Gallery**: The gallery utilizes native CSS `flex` and `overflow-x-auto` with `snap-x` mechanics for intuitive left/right swiping, completely bypassing clunky scroll-jacking.
- **Premium Dark Aesthetic**: Built on a highly curated "silver-dark" color palette using pure Tailwind CSS utility classes and `mix-blend-difference` typography to maintain contrast against moving visuals.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with custom `@theme` variables)
- **Animation**: GSAP (`@gsap/react`, `ScrollTrigger`)
- **Icons**: `lucide-react`
- **Utility**: `clsx`, `tailwind-merge`

## 📁 Project Structure

- `/app`: Next.js App Router structure.
  - `/page.tsx`: The primary snapping single-page structure.
  - `/products/page.tsx`: Secondary product catalog page.
  - `/globals.css`: Global styling, CSS snapping logic, and Tailwind v4 theme definitions.
- `/components/hero/FrameSequenceHero.tsx`: The complex 500vh GSAP scrolling canvas element.
- `/components/sections`: The modular, full-viewport snapping panels (`SpecsSection`, `EditorialFeature`, `GallerySection`, `PreOrderSection`).
- `/components/layout/Navbar.tsx`: The responsive, glassmorphism sticky navigation.
- `/public/Laptop_frames`: Source for the high-res 3D laptop sequence.

## 🚀 Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Run the Development Server**
```bash
npm run dev
```

3. **Experience the Site**
Open [http://localhost:3000](http://localhost:3000) with your browser. Scroll down to trigger the GSAP sequence and feel the magnetic snapping!

## 📸 Imagery Note
While the 3D Hero Sequence uses custom rendered `.png` frames stored locally, all other lifestyle and detail photography is seamlessly hotlinked from premium royalty-free sources like Unsplash and Pexels to keep the repository lightweight.
