# Database Design (Proposed Relational Schema)

> This schema is a forward-looking proposal to support the current MVP features (learning paths, lessons, resources, progress, achievements, and sharing) with a relational database.

## Core Entities
- **Users**: learner accounts and preferences.
- **Learning Paths**: role/skill-based tracks generated or curated.
- **Lessons**: content within a path (video, transcript, summaries).
- **Resources**: prep materials tied to a path or level.
- **Progress**: user progress through lessons and paths.
- **Quizzes**: checkpoint questions per lesson.
- **Achievements**: badges and milestones per user.
- **Notes**: user-created notes during lessons.

## Tables (Proposed)
### users
- id (PK)
- full_name
- email (unique)
- password_hash
- created_at

### learning_paths
- id (PK)
- title
- description
- target_role
- level (beginner/intermediate/advanced)
- estimated_hours
- created_at

### lessons
- id (PK)
- learning_path_id (FK → learning_paths.id)
- title
- description
- order_index
- duration_minutes
- video_url
- summary
- transcript

### resources
- id (PK)
- learning_path_id (FK → learning_paths.id, nullable)
- title
- category
- duration_minutes
- url

### user_learning_paths (enrollments)
- id (PK)
- user_id (FK → users.id)
- learning_path_id (FK → learning_paths.id)
- status (active/paused/completed)
- started_at
- completed_at

### lesson_progress
- id (PK)
- user_id (FK → users.id)
- lesson_id (FK → lessons.id)
- progress_percent
- completed_at

### quizzes
- id (PK)
- lesson_id (FK → lessons.id)
- question
- options (JSON)
- correct_option_index

### quiz_attempts
- id (PK)
- user_id (FK → users.id)
- quiz_id (FK → quizzes.id)
- selected_option_index
- is_correct
- attempted_at

### achievements
- id (PK)
- title
- description
- criteria_type (lesson_count, streak_days, hours)
- criteria_value

### user_achievements
- id (PK)
- user_id (FK → users.id)
- achievement_id (FK → achievements.id)
- earned_at

### lesson_notes
- id (PK)
- user_id (FK → users.id)
- lesson_id (FK → lessons.id)
- content
- created_at

## ER Diagram (Text)
```
users ──< user_learning_paths >── learning_paths ──< lessons ──< quizzes ──< quiz_attempts
  │                 │                     │             │
  │                 │                     └──< resources
  │                 └──< lesson_progress
  │
  └──< user_achievements >── achievements
  └──< lesson_notes
```
