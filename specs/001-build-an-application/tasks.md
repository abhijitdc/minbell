# Tasks: Interval Timer (WAV Assets)

**Input**: Design documents from `/Users/abhijitdc/workspace/minbell/specs/001-build-an-application/`
**Prerequisites**: plan.md (required), research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create the project structure in the root directory as defined in `plan.md`. This includes `src/js/main.js`, `src/css/style.css`, `index.html`, `assets/`, and `tests/unit/`.
- [ ] T002 Initialize a new Vite project and install dependencies (`vite`, `vitest`).
- [ ] T003 [P] Configure `vite.config.js` for the project.

## Phase 3.2: Core Implementation
- [ ] T004 Implement the basic HTML structure in `index.html`.
- [ ] T005 Implement the timer logic in `src/js/timer.js`.
- [ ] T006 Connect the UI to the timer logic in `src/js/main.js`. This includes dynamically populating the interval options based on the duration.
- [ ] T007 Add the sound files (`meditation-bell.wav`, `gentle-water-drop.wav`) to the `assets/` directory.
- [ ] T008 Implement the sound playback logic in `src/js/main.js` to play the selected sound at each interval.

## Phase 3.3: Polish
- [ ] T009 [P] Style the application in `src/css/style.css` to be visually appealing and user-friendly.
- [ ] T010 [P] Write documentation in a `README.md` file for the project.

## Dependencies
- T001, T002 block everything else.
- T004, T005 block T006.
- T006 blocks T007.
- T007 blocks T008.

## Parallel Example
```
# Launch T009 and T010 together:
Task: "Style the application in src/css/style.css to be visually appealing and user-friendly."
Task: "Write documentation in a `README.md` file for the project."
```