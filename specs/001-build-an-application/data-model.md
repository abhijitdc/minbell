# Data Model: Meditation Timer

## Session
Represents a single meditation session.

**Attributes**:
- `duration`: (Number) The total duration of the session in minutes.
- `interval`: (Number) The interval for reminders in minutes.
- `sound`: (String) The name of the selected reminder sound.

**Validation Rules**:
- `duration` must be a positive number.
- `interval` must be a positive number.
- `interval` should not be greater than `duration`.

## Sound
Represents a reminder sound option.

**Attributes**:
- `name`: (String) The display name of the sound (e.g., "Meditation Bell").
- `file`: (String) The path to the audio file.