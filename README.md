
# YouLearn MVP
YouLearn is an AI-guided learning experience for career changers and upskillers. The MVP focuses on helping learners define a target role, generate a structured learning path, and stay motivated with progress tracking and achievements.

## Key Features
- **AI-guided intent capture** to define role/skill, goal, and level.
- **Personalized learning paths** with curated lessons by difficulty.
- **Lesson experience** with video, AI summary, notes, transcript, and quizzes.
- **Preparation resources** to build confidence before starting lessons.
- **Progress tracking & achievements** with milestone badges and shareable moments.
- **Trending tracks discovery** for popular role-based paths.

## Tech Stack
**Frontend**
- React (Create React App + CRACO)
- Tailwind CSS
- Radix UI primitives
- React Router

**Backend (starter)**
- FastAPI
- MongoDB driver (Motor)

## Project Structure
```
/README.md
/docs
  MOSCOW_PRIORITIZATION.md
  PRD.md
  RESEARCH_SYNTHESIS.md
  UI_UX_PLAN.md
  DATABASE_DESIGN.md
/backend
/frontend
```

## Getting Started
### Frontend
```
cd frontend
npm install
npm start
```

### Backend
```
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn server:app --reload
```

## Future Work
- Persist user accounts, paths, and progress.
- Replace simulated AI with real recommendation logic.
- Add search, filters, and content ingestion.
- Expand analytics and cohort progress tracking.
- Build admin tooling for curriculum management.
