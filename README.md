# English 107 Portfolio

A learning portfolio for an English 107 course, presented as a single-page website. It is course work: the site collects five PDF artifacts from the semester (a literacy narrative draft and final, an infographic draft and final, and a unit reflection), each with a written reflection and the course goals it addresses, framed by an introduction and a conclusion. The site uses a mountain-climb metaphor throughout, with each artifact described as a stage of the climb.

## Requirements

A web browser that can display PDFs inline (Chrome, Edge, Firefox and Safari all do). No build tools are needed for the HTML version.

## Setup

No installation. Clone or download the repository. The two large PDFs (`artifact2.pdf`, about 15 MB, and `artifact3.pdf`, about 31 MB) are included in the repository.

## Usage

Open `index.html` in a browser, or serve the folder with a static server (for example `python3 -m http.server` and visit `http://localhost:8000`).

The left sidebar has buttons for Home, Introduction, Artifact 1 through 5 and Conclusion. Clicking one swaps the visible section without reloading the page. Each artifact section shows its title, the personal or course goals it maps to, the PDF embedded in an iframe, a download link to the same PDF, and reflection paragraphs with a closing quote. On narrow screens the sidebar hides behind a menu button.

## How it works

`index.html` is self-contained: all styling is in a `<style>` block and the behaviour is a short inline script. Every section has the class `page`; `showSection(id)` adds `active` to the chosen section and its nav button, removes it from the rest, scrolls to the top and closes the mobile sidebar. The PDFs are loaded with `<iframe src="artifactN.pdf">`.

`App.jsx` and `Portfolio.css` are a React version of the same portfolio. `App.jsx` holds the artifact data (titles, goals, file paths, reflections, quotes) in an `ARTIFACTS` array and renders the same sidebar-and-sections layout with a `useState` hook for the current page. There is no `package.json`, bundler config or `index.js` entry point in the repository, so the React version is source only; to run it you would need to create a React project (for example with Vite), copy in `App.jsx`, `Portfolio.css` and the PDFs (it expects them at the site root, `/artifact1.pdf` and so on), and render `App`.

## Project layout

```
index.html       the complete static portfolio (HTML, CSS and JS in one file)
App.jsx          React component version of the same content
Portfolio.css    styles for the React version
artifact1.pdf    Project 1, final literacy narrative
artifact2.pdf    Project 2, draft infographic (about 15 MB)
artifact3.pdf    Project 2, final infographic (about 31 MB)
artifact4.pdf    Project 1 draft (index.html) / Unit 2 reflection (App.jsx)
artifact5.pdf    Unit 2 reflection (index.html) / Project 1 draft (App.jsx)
.DS_Store        macOS folder metadata, accidentally committed
```

Note that `index.html` and `App.jsx` label artifacts 4 and 5 the other way round from each other.
