# Product Requirements Document (PRD)

## Product Name  
**YouLearn (MVP)**

---
## tl;dr  
YouLearn MVP delivers a structured, motivating learning path for career switchers targeting tech roles.  
It helps users define a goal, follow a curated track, and gain confidence via milestone feedback.  
This lays the foundation for a future learning platform that personalizes growth and integrates with hiring networks.

---

## Problem Statement  
Career changers and upskillers struggle to find a structured, high-signal learning path that builds confidence quickly.  
They need a guided path that helps them start, maintain momentum, and finish with measurable progress.

---

## Goals

### Business Goals
- Validate user appetite for structured learning experiences.
- Lay groundwork for future monetization through engagement loops.
- Prove core UX loop: intent → path → progress → motivation.

### User Goals
- Help learners quickly define a target role/skill and start learning.
- Provide a clear, ordered learning path with visible progress.
- Increase learner confidence through preparation steps, summaries, and checkpoint quizzes.
- Celebrate milestones to drive continued engagement.

### Non-Goals (MVP)
- Payments/subscriptions
- End-to-end authentication, profile, or data persistence
- Real-time AI recommendations or content ingestion
- Employer/job marketplace features

---

## Target Persona  
**Primary Persona: Career Switcher / Upskiller**  
- 25–38 years old, working full-time, wants to switch into tech-adjacent roles (data, PM, UX).  
- Needs time-efficient learning and validation that they’re making real progress.  
- Values curated content and proof that the path is worth finishing.

---

## User Stories  
- As a full-time worker switching to UX, I want a clear starting point so I don’t waste time searching.  
- As a learner, I want visible progress and quizzes so I know I’m retaining information.  
- As someone changing careers, I want to celebrate small wins so I feel like I’m on track.  
- As a busy professional, I want short prep resources so I can quickly gain context before diving in.  
- As a skeptical learner, I want to feel that this path is achievable and worth committing to.

---

## User Journey (Happy Path)  
1. User lands on **Home** and enters a target role/skill.  
2. User completes **Intent Capture** (goal + level) and generates a path.  
3. User reviews **Learning Path** and starts the first lesson.  
4. User optionally visits **Resources** to prepare.  
5. User watches the **Lesson**, reviews the AI summary and notes, and completes a quiz.  
6. User continues lessons and views **Achievements** for motivation.  
7. User discovers **Trending** tracks and optionally starts a new learning path.

---

## Functional Requirements

### Onboarding & Intent Capture
- Capture: target role/skill, learning goal, and experience level.
- Provide suggested topics and preview of estimated time and lesson count.
- Simulate AI path generation (with loading state and animation).

### Learning Path
- Display lessons by level (beginner/intermediate/advanced).
- Show lesson names, durations, and call-to-actions (start/continue).
- Allow entry into the Resources section.

### Resources
- Display curated prep resources with tags, durations, and action buttons.
- Option to skip and continue learning.

### Lesson View
- Video player with tabs for summary, notes, transcript, and quiz.
- Progress bar and motivational copy (e.g., “You’re 20% done!”).
- Quiz interaction with auto-grading and feedback toasts (success/fail).
- Mini celebration animation or message on completion.

### Achievements
- Visual progress tracker with milestones and earned badges.
- Draft achievement sharing flow (LinkedIn/Twitter copy prefill).

### Trending Discovery
- List popular, most-watched, or AI-suggested learning tracks.
- Click-through regenerates a new path for the selected topic.

### Authentication (Mock)
- Basic sign-in and create account flow (no backend).
- Client-side form validation for UX polish.

---

## Non-Functional Requirements
- **Usability**: Simple, low-friction flows; minimal steps; mobile-friendly.  
- **Performance**: All pages load within 2 seconds on typical broadband.  
- **Accessibility**: All interactive elements keyboard-accessible; sufficient contrast.  
- **Reliability**: Smooth loading states; graceful fallback if quiz/resources fail.

---

## Success Metrics (MVP)
- ≥60% of users who start intent capture complete it.  
- ≥50% of users who view a learning path start a lesson.  
- ≥40% of users complete at least one quiz.  
- ≥25% of users view Achievements after completing a lesson.  
- Qualitative feedback: “Path feels structured and achievable.”

---

## Technical Considerations  
- **Frontend**: React (Next.js). Simulated state for AI generation/loading.  
- **Backend**: No backend for MVP. Static JSONs to power learning paths, resources, and quizzes.  
- **Quizzes**: Questions embedded in lesson data; auto-graded locally.  
- **Data Persistence**: Session-based tracking only. No long-term storage.  
- **Mocking AI**: Use loading animations and dynamic-feeling placeholders for AI-driven features.

---

## Milestones & Sequencing  
- **Week 1–2**: Onboarding & Intent Capture  
- **Week 3–4**: Learning Path + Resource integration  
- **Week 5–6**: Lesson Player + Quizzes  
- **Week 7**: Achievements & Progress Logic  
- **Week 8**: Trending Discovery + Final polish + Mock Auth

---

## Open Questions  
- How realistic should the AI simulation feel — basic animation or more interactive?  
- Should we track user progress locally or explore a lightweight backend?  
- Do we include sample content for 1–2 real tracks or multiple “fake” ones for breadth?  
- How much effort to put into celebration mechanics vs. learning content polish?
