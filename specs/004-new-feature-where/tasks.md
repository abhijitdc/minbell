# Tasks: Engaging Graphics for Interval Timer

**Input**: Design documents from `/Users/abhijitdc/workspace/minbell/specs/004-new-feature-where/`
**Prerequisites**: plan.md, research.md, data-model.md, quickstart.md

## Phase 3.1: Styling
- [ ] T001: **Modify CSS for background and image container.**
    - **File**: `src/css/style.css`
    - **Action**: Set the background color of the main application container to `white`.
    - **Action**: Create a new CSS class `.character-image` for the image container. This class should handle centering (flexbox or grid), responsive sizing (e.g., `max-width: 80vw; max-height: 80vh;`), and a fade-in/fade-out transition (`opacity` and `transition` properties).

## Phase 3.2: Image Display Logic (TDD)
**CRITICAL: Test T002 must be written and fail before implementing T003.**

- [ ] T002: **[P] Write failing unit test for the image display module.**
    - **File**: `tests/unit/image-display.test.js`
    - **Action**: Create a new test file for the image display module.
    - **Action**: Write a test suite using `vitest` and `jsdom` to verify the functionality of the `image-display.js` module.
    - **Tests should cover**:
        - A function that returns a random image path from the expected list of images.
        - A function that updates the `src` attribute of a given `img` element.
    - **Note**: The test should fail because the module doesn't exist yet.

- [ ] T003: **Implement the image display module.**
    - **File**: `src/js/image-display.js`
    - **Action**: Create the `image-display.js` module.
    - **Action**: Implement the functions tested in T002 to make the unit test pass.
        - Export a function `getRandomImage` that returns a random image path.
        - Export a function `updateImage` that takes an `img` element and a new `src` path and updates the element.
    - **Dependency**: T002

## Phase 3.3: Integration with Timer
**CRITICAL: Test T004 should be adapted from existing tests and fail before implementing T005.**

- [ ] T004: **[P] Write failing integration test for image change on interval end.**
    - **File**: `tests/unit/timer.test.js` (or a new integration test file if more appropriate)
    - **Action**: Add a test case to simulate a timer interval ending.
    - **Action**: Assert that the `updateImage` function from the `image-display.js` module is called when the interval ends.
    - **Note**: This test will likely require mocking the `image-display.js` module to spy on the `updateImage` function.

- [ ] T005: **Integrate image display with the timer logic.**
    - **File**: `src/js/main.js` (assuming this is where the timer logic resides)
    - **Action**: Import the `image-display.js` module.
    - **Action**: Add an `img` element to `index.html` to display the character.
    - **Action**: On application start, call the functions from `image-display.js` to show the initial random image.
    - **Action**: In the timer's interval-end callback, call the function to update the image to a new random one.
    - **Dependency**: T003, T004

## Phase 3.4: Polish
- [ ] T006: **[P] Manual Verification.**
    - **Action**: Run the application using `npm run dev`.
    - **Action**: Follow the steps in `specs/004-new-feature-where/quickstart.md` to manually verify all acceptance criteria are met.
    - **Action**: Check for any visual glitches or performance issues.

## Dependencies
- `T002` (Test) must be done before `T003` (Implementation).
- `T004` (Test) must be done before `T005` (Implementation).
- `T003` is needed for `T005`.

## Parallel Example
The test creation tasks can be run in parallel:
```
Task: "T002: [P] Write failing unit test for the image display module."
Task: "T004: [P] Write failing integration test for image change on interval end."
```
