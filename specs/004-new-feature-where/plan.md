# Implementation Plan: Engaging Graphics for Interval Timer

**Branch**: `004-new-feature-where` | **Date**: 2025-09-13 | **Spec**: [./spec.md](./spec.md)
**Input**: Feature specification from `/Users/abhijitdc/workspace/minbell/specs/004-new-feature-where/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md.
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
This plan outlines the implementation of a new feature to enhance the user experience of the interval timer by adding engaging graphics. The application background will be set to solid white, and a random character image will be displayed at the start and at the end of each interval.

## Technical Context
**Language/Version**: JavaScript (ES6+)
**Primary Dependencies**: vite, vitest
**Storage**: N/A
**Testing**: vitest, jsdom
**Target Platform**: Web Browser
**Project Type**: single
**Performance Goals**: Smooth image transitions (60 fps).
**Constraints**: The feature should not significantly impact the application's loading time or performance. The images are provided in the `public/assets/images` directory (`ch-1.png` to `ch-12.png`).
**Scale/Scope**: This feature is limited to the main screen of the timer application.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (frontend)
- Using framework directly? Yes
- Single data model? Yes
- Avoiding patterns? Yes

**Architecture**:
- EVERY feature as library? No, this is a direct application modification.
- Libraries listed: N/A
- CLI per library: N/A
- Library docs: N/A

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? Yes
- Git commits show tests before implementation? Yes
- Order: Contract→Integration→E2E→Unit strictly followed? N/A for this feature. Unit tests will be created.
- Real dependencies used? Yes
- Integration tests for: N/A
- FORBIDDEN: Implementation before test, skipping RED phase.

**Observability**:
- Structured logging included? N/A
- Frontend logs → backend? N/A
- Error context sufficient? N/A

**Versioning**:
- Version number assigned? 1.0.0
- BUILD increments on every change? N/A
- Breaking changes handled? N/A

## Project Structure

### Documentation (this feature)
```
specs/004-new-feature-where/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── js/
└── css/

tests/
└── unit/
```

**Structure Decision**: Option 1: Single project

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - Resolved in `research.md`.

2. **Generate and dispatch research agents**:
   - N/A, research conducted directly.

3. **Consolidate findings** in `research.md`

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - `CharacterImage` entity.

2. **Generate API contracts** from functional requirements:
   - N/A. This is a front-end only feature.

3. **Generate contract tests** from contracts:
   - N/A.

4. **Extract test scenarios** from user stories:
   - Scenarios are documented in `quickstart.md`.

5. **Update agent file incrementally**:
   - N/A

**Output**: data-model.md, quickstart.md

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base.
- Generate tasks from Phase 1 design docs.
- Create tasks for:
    1. Modifying the CSS to set a white background.
    2. Creating a JavaScript module to handle image display logic.
    3. This module will have functions to:
        - Get a random image path.
        - Display the initial image.
        - Display a new random image.
    4. Integrating this module with the existing timer logic to trigger image changes on interval ends.
    5. Writing unit tests for the new image display module.

**Ordering Strategy**:
- TDD order: Tests before implementation.
- Dependency order: CSS changes -> Image display module -> Integration with timer.

**Estimated Output**: 5-7 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md following constitutional principles)
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A       | N/A        | N/A                                 |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented: N/A
