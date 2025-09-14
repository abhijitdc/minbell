# Research: Engaging Graphics for Interval Timer

## Research Summary
This document addresses the open questions from the feature specification and technical context for the "Engaging Graphics" feature.

### 1. Image Repetition
**Question**: What happens if there are no more character images to display?
**Decision**: The images will be selected randomly from the available pool (`ch-1.png` to `ch-12.png`). With random selection, true "running out" isn't an issue. The same image may be shown again, which is acceptable for this feature.

### 2. Pop-up Placement and Size
**Question**: Specify placement or size constraints for character pop-ups.
**Decision**: The character image will be displayed in the center of the screen. The size will be responsive, maintaining a consistent portion of the screen's width or height, whichever is smaller, to avoid interfering with other UI elements. A CSS class will be used to control the size and position.

### 3. "Visually Engaging" Definition
**Question**: Define "visually engaging" - e.g., animation, size, position?
**Decision**: For the initial implementation, "visually engaging" will be defined as a simple fade-in/fade-out transition when the character image changes. This provides a smooth visual update without being overly distracting.

### 4. Technical Implementation
**Approach**:
- **CSS**: The background color will be set to `white` in the main stylesheet. A dedicated CSS class will be created for the character image container to handle centering, sizing, and transitions.
- **JavaScript**: A new JavaScript module will be created to manage the image logic.
    - It will contain an array of the image filenames (`ch-1.png` to `ch-12.png`).
    - A function will select a random image from the array.
    - This module will be called by the main application logic at startup and at the end of each timer interval.
