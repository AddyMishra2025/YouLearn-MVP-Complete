# Product Requirements Document (PRD)

## Product Name
YouLearn (MVP)

## Problem Statement
Career changers and upskillers struggle to find a structured, high-signal learning path that builds confidence quickly. They need a guided path that helps them start, maintain momentum, and finish with measurable progress.

## Goals
- Help learners quickly define a target role/skill and start learning.
- Provide a clear, ordered learning path with visible progress.
- Increase learner confidence through preparation steps, summaries, and checkpoint quizzes.
- Celebrate milestones to drive continued engagement.

## Non-Goals (MVP)
- Payments/subscriptions
- End-to-end authentication, profile, or data persistence
- Real-time AI recommendations or content ingestion
- Employer/job marketplace features

## Target Persona
**Primary Persona: Career Switcher / Upskiller**
- 25–38 years old, working full-time, wants to switch into tech-adjacent roles (data, PM, UX).
- Needs time-efficient learning and validation that they’re making real progress.
- Values curated content and proof that the path is worth finishing.

## User Journey (Happy Path)
1. User lands on **Home** and enters a target role/skill.
2. User completes **Intent Capture** (goal + level) and generates a path.
3. User reviews **Learning Path** and starts the first lesson.
4. User optionally visits **Resources** to prepare.
5. User watches the **Lesson**, reviews the AI summary and notes, and completes a quiz.
6. User continues lessons and views **Achievements** for motivation.

## Functional Requirements
### Onboarding & Intent Capture
- Capture: target role/skill, learning goal, and experience level.
- Provide suggested topics and preview of estimated time and lesson count.

### Learning Path
- Display lessons by level (beginner/intermediate/advanced or basic/intermediate/advanced).
- Provide CTA to start a lesson and continue to resources.
- Simulate path generation state.

### Resources
- Show a curated set of prep resources with categories, durations, and CTAs.
- Allow skip or continue into the learning path.

### Lesson View
- Video player with summary, notes, transcript, and quiz tabs.
- Progress bar with encouraging feedback.
- Quiz interaction with success/fail toast and celebration.

### Achievements
- Display progress milestones and earned/in-progress achievements.
- Provide shareable achievement flow (LinkedIn/Twitter draft).

### Trending Discovery
- Show popular, AI-picked, and most-watched tracks.
- Allow click-through to generate a new path.

### Authentication (Mock)
- Sign-in and account creation screens with form validation feedback.

## Non-Functional Requirements
- **Usability**: Simple, low-friction flows; minimal form steps.
- **Performance**: Page loads within 2 seconds on typical broadband.
- **Accessibility**: Keyboard-navigable interactive elements; readable contrast.
- **Reliability**: Graceful loading states during simulated AI generation.

## Success Metrics (MVP)
- ≥60% of users who start intent capture complete it.
- ≥50% of users who view a learning path start a lesson.
- ≥40% of users complete at least one quiz.
- ≥25% of users view Achievements after completing a lesson.
- Qualitative feedback: “Path feels structured and achievable.”
