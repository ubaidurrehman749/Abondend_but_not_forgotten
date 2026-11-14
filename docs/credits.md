# Asset Credits & Technical Acknowledgments

**Project:** Abandoned but Not Forgotten (NASA Space Apps Challenge 2026)
**Team:** UA VEYLORA
**Document Owner:** Zarnish Fatima (Content / Resource Lead)
**Document Version:** 3.0

---

## 1. 3D Models

Two of the six 3D models are official NASA assets. The other four were modeled by the team because NASA publishes no models for them.

| Asset Name | Origin | Source | License |
| :--- | :--- | :--- | :--- |
| **Opportunity Rover** | Official NASA model | NASA 3D Resources | Public Domain |
| **InSight Lander** | Official NASA model | NASA 3D Resources | Public Domain |
| **Lunar Roving Vehicle (LRV)** | Original work | Team UA VEYLORA | Original work |
| **Retroreflector** | Original work | Team UA VEYLORA | Original work |
| **Surveyor 3** | Original work | Team UA VEYLORA | Original work |
| **Sojourner** | Original work | Team UA VEYLORA | Original work |

**Model processing:** The NASA models (Opportunity and InSight) were compressed with glTF-Transform using `--compress meshopt --texture-compress false`.

---

## 2. 3D Libraries

| Package Name | Version | License | Official Portal |
| :--- | :--- | :--- | :--- |
| **Three.js** | r169 (0.169.0) | MIT License | [threejs.org](https://threejs.org) |
| **@react-three/fiber** | 8.17.10 | MIT License | [github.com/pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) |
| **@react-three/drei** | — | MIT License | [github.com/pmndrs/drei](https://github.com/pmndrs/drei) |
| **@react-three/postprocessing** | — | MIT License | [github.com/pmndrs/react-postprocessing](https://github.com/pmndrs/react-postprocessing) |

The 3D layer is lazy-loaded after first paint.

---

## 3. Textures

- **Globe textures (Moon and Mars):** NASA imagery, stored in `public/textures/`.

---

## 4. NASA Sources & Mission Data

Mission facts, evidence labels, and legacy statements in the app are checked against the NASA pages below. Each record in `missions.json` carries its sources and a `checkedOn` date.

| Mission | Source | Publisher | Link |
| :--- | :--- | :--- | :--- |
| Opportunity | Mars Exploration Rovers: Spirit and Opportunity | NASA Science | [science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/) |
| Opportunity | Mars Exploration Rovers Science Highlights | NASA Science Planetary Division | [science.nasa.gov/.../science-highlights/](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-highlights/) |
| Apollo LRV | The Apollo Lunar Roving Vehicle | NASA National Space Science Data Center (NSSDC) | [nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html](https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html) |
| Apollo LRV | A Brief History of the Lunar Roving Vehicle | NASA Marshall Space Flight Center | [MSFC-LRV.pdf](https://www.nasa.gov/wp-content/uploads/static/history/alsj/MSFC-LRV.pdf) |

**Evidence classification:** Every claim in the app carries one of three labels: *confirmed* (stated by a NASA source), *interpretation* (scientific reasoning built on confirmed facts), or *unknown* (an open question NASA has not answered).

**Mission image credits**

| Asset | Credit | License |
| :--- | :--- | :--- |
| Pancam self-portrait and panorama images (Opportunity) | NASA/JPL-Caltech/Cornell/Arizona State University | NASA Public Domain |
| Apollo 15 & 17 lunar surface photography | NASA History Program Office | NASA Public Domain |

---

## 5. Typography & Iconography

Zero external icon packs or third-party image sprites were used in the UI.

| Resource Name | Type | License | Official Portal |
| :--- | :--- | :--- | :--- |
| **Newsreader** | Google Font (Serif) | SIL Open Font License 1.1 | [fonts.google.com/specimen/Newsreader](https://fonts.google.com/specimen/Newsreader) |
| **IBM Plex Sans** | Google Font (Sans-Serif) | SIL Open Font License 1.1 | [fonts.google.com/specimen/IBM+Plex+Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) |
| **IBM Plex Mono** | Google Font (Monospace) | SIL Open Font License 1.1 | [fonts.google.com/specimen/IBM+Plex+Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| **Unicode Interface Symbols** | Plain Text Glyphs (✓ ◆ ? ■ ◌ ● ☾ ♂) | Open Unicode Standard | Native Plain Text Glyphs |

---

## 6. Frontend Libraries & Open-Source Software

| Package Name | Version | License | Official Portal |
| :--- | :--- | :--- | :--- |
| **React** & **React-DOM** | 18.3.1 | MIT License | [react.dev](https://react.dev) |
| **GSAP (GreenSock)** | 3.12.5 | GSAP Standard License (Free Non-Commercial) | [gsap.com/standard-license](https://gsap.com/standard-license) |
| **@types/three** (dev dependency) | 0.169.0 | MIT License | [npmjs.com/package/@types/three](https://www.npmjs.com/package/@types/three) |

---

## 7. Visuals, Shaders & Canvas FX

- **EchoSky & Constellation Wall (`QuestionEcho.tsx`)**: 100% procedural code execution using Three.js spheres (Stars) and Three.js point clouds (Space Dust). No images, textures, or downloaded files are used.
- **Animations**: Pure GSAP timeline orchestration.
- **Backgrounds**: 100% CSS color gradients and web design styling. Zero stock photography.
- **Textures**: The only external textures are the NASA globe textures listed in Section 3.

---

## 8. Team UA VEYLORA Roles & Acknowledgments

- **Ubaid ur Rehman**: Team Owner / System Integrator
- **Sunaila Ilyas**: 3D Developer (Three.js / React Three Fiber scene management & model loading)
- **Umar Kashif**: UI / Interaction Developer (GSAP scroll orchestration, UI components & constellation engine)
- **Zarnish Fatima**: Content / Resource Lead (Data Integrity Audit, 3-Tier Evidence Classification, NASA Sourcing & Documentation)
- **Ali Hassan**: Fact Checker / QA / Design (UI/UX Review & Color Palette Accessibility)

---

*Verified and Published by Zarnish Fatima (Content & Resource Lead) - November 15, 2026*
