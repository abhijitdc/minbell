# Research: Visual Progress Indicator

## Visual Element Implementation

**Decision**: Pure JavaScript (Canvas or SVG)

**Rationale**: 
- Directly addresses the user's constraint of not using static assets.
- Provides maximum flexibility for dynamic updates and animations.

**Alternatives considered**:
- CSS animations: Limited in complex dynamic scenarios.
- GIF/Image: Explicitly disallowed by user.

**Research Task**: How to create a dynamic progress indicator (e.g., circular progress bar, filling bar) using only JavaScript (Canvas or SVG)?

## UI Framework

**Decision**: Material Design principles with vanilla HTML, CSS, and JavaScript

**Rationale**: 
- Provides a consistent and aesthetically pleasing UI.
- Avoids heavy framework dependencies, keeping the project lightweight.

**Research Task**: How to implement Material Design principles (shadows, typography, colors, ripple effects) in vanilla JavaScript and CSS?