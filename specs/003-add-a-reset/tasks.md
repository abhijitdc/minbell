# Tasks: Timer Reset Option

**Input**: Design documents from `/specs/003-add-a-reset/`
**Prerequisites**: plan.md (required), research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create the project structure in the root directory as defined in `plan.md`. This includes `src/js/main.js`, `src/css/style.css`, `index.html`, and `tests/unit/`.
- [ ] T002 Initialize a new Vite project and install dependencies (`vite`, `vitest`).
- [ ] T003 [P] Configure `vite.config.js` for the project.
- [ ] T004 [P] Add Material Design font (Roboto) to `index.html`.

## Phase 3.2: Core Implementation
- [ ] T005 Implement the basic HTML structure in `index.html`.
- [ ] T006 Implement the timer logic in `src/js/timer.js`.
- [ ] T007 Connect the UI to the timer logic in `src/js/main.js`. This includes dynamically populating the interval options based on the duration.
- [ ] T008 Implement the visual progress indicator for the current interval using JavaScript (Canvas or SVG).
- [ ] T009 Implement the visual progress indicator for the entire duration using JavaScript (Canvas or SVG).
- [ ] T010 Update the visual indicators in real-time as the timer progresses.
- [ ] T011 Implement a simple ripple effect for buttons in `src/js/main.js`.
- [ ] T012 Add a "Reset" button to `index.html`.
- [ ] T013 Implement the reset logic in `src/js/main.js` to stop the timer, reset time display, reset visual indicators, and reset input values.

## Phase 3.3: Polish
- [ ] T014 [P] Style the application in `src/css/style.css` to be visually appealing and user-friendly, following Material Design principles.
- [ ] T015 [P] Write documentation in a `README.md` file for the project.

## Dependencies
- T001, T002 block everything else.
- T005 blocks T006.
- T006 blocks T007, T008, T009, T010, T011.
- T007, T008, T009 block T010.
- T012 blocks T013.

## Parallel Example
```
# Launch T014 and T015 together:
Task: "Style the application in src/css/style.css to be visually appealing and user-friendly, following Material Design principles."
Task: "Write documentation in a `README.md` file for the project."
```
