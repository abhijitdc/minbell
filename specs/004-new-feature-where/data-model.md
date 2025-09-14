# Data Model: Engaging Graphics

This feature introduces one primary data entity, which is managed on the client-side.

## Entities

### CharacterImage
Represents a single character image that can be displayed to the user.

**Fields**:
- `src` (string): The path to the image file (e.g., `/assets/images/ch-1.png`).

**Relationships**:
- None. This is a simple, flat list of image sources.

**State Transitions**:
- The application will maintain a state representing the currently displayed `CharacterImage`.
- This state will be updated:
    1. On application load.
    2. At the end of each timer interval.
