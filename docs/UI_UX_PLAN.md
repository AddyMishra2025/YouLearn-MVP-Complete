# UI/UX Plan

## Page Flows
### Primary Flow
1. **Home** → enter role/skill and open intent capture modal.
2. **Intent Capture** → goal + level → generate path (loading state).
3. **Learning Path** → review lessons → start a lesson or continue.
4. **Resources** → optionally prepare → begin lesson.
5. **Lesson View** → watch video → AI summary/notes → quiz → continue.
6. **Achievements** → view milestones and share progress.

### Secondary Flow
- **Trending** → select a track → generate a learning path.

### Authentication Flow (Mock)
- **Start** → create account → return to Home.
- **Sign In** → sign in → return to Home.

## Key UI States
- **Loading**: AI path generation skeleton + progress hints.
- **Active**: Lesson tabs for video, summary, notes, transcript.
- **Success**: Quiz success toast + confetti; achievement modal.
- **Error/Empty**: Generic error/empty states (component-level).

## UX Laws Applied
- **Hick’s Law**: Limited choices per step in intent capture (goal/level).
- **Fitts’s Law**: Large, primary CTAs for “Build My Career Path” and “Start Lesson.”
- **Progressive Disclosure**: Step-by-step modal and tabs in lesson view.
- **Goal-Gradient Effect**: Progress bar and “X of 8 lessons completed.”
- **Peak–End Rule**: Achievement modal and confetti at completion.

## Component Patterns
- **Cards**: Learning path lessons, resources, trending tracks, achievements.
- **Badges**: Role labels, status tags, and category highlights.
- **Tabs**: Lesson content sections (video, summary, notes, transcript).
- **Modals**: Intent capture and achievement share flow.
- **Progress Bars**: Lesson progress + achievement progress.
- **Toasts**: Feedback for sign-in, quiz results, and path generation.
