# Data Dictionary - portfolio_db

## Table: education
- id: INT PK AI - Unique identifier for the education record
- institution: VARCHAR(100) - Name of the institution
- degree: VARCHAR(50) - Type of degree (Bachelor, Technical, Certification)
- field: VARCHAR(100) - Field of study
- description: TEXT - Additional details
- start_date: DATE - Start date
- end_date: DATE - End date
- location: VARCHAR(100) - City/Country
- created_at: TIMESTAMP - Record creation date

### Relationships
- No direct relationship (isolated).  
- Possible future relationship: `education.id` → FK in a `certificates` table.

### Business Rules
- `end_date` can be NULL if the course is still ongoing.  
- `institution` is required.

---

## Table: skills
- id: INT PK AI - Unique identifier for the skill
- name: VARCHAR(100) - Name of the skill
- category: VARCHAR(50) - Category (Frontend, Backend, Database, Soft Skill)
- level: VARCHAR(20) - Proficiency level
- years_exp: INT - Years of experience
- description: TEXT - Short explanation
- last_used: DATE - Last time the skill was applied
- proficiency_score: INT - Numeric score (0–100)
- created_at: TIMESTAMP - Record creation date

### Relationships
- May be related to `projects.tech_stack` (even without explicit FK).  

### Business Rules
- `proficiency_score` must be between 0 and 100.  
- `name` is required and unique.

---

## Table: experience
- id: INT PK AI - Unique identifier for the experience
- company: VARCHAR(100) - Company name
- role: VARCHAR(100) - Job title
- description: TEXT - Main responsibilities
- start_date: DATE - Start date
- end_date: DATE - End date (NULL if current)
- location: VARCHAR(100) - City/Country
- email: VARCHAR(100) - Contact email (if applicable)
- message: TEXT - Additional notes
- created_at: TIMESTAMP - Record creation date

### Relationships
- May be related to `projects` (projects done at the company).  
- Future: `company` could become FK to a `companies` table.

### Business Rules
- `end_date` can be NULL if still active.  
- `company` is required.

---

## Table: projects
- id: INT PK AI - Unique identifier for the project
- project_name: VARCHAR(150) - Project name
- description: TEXT - Project details
- status: ENUM('planned','in_progress','completed','paused') - Project status
- start_date: DATE - Start date
- end_date: DATE - End date
- tech_stack: VARCHAR(255) - Technologies used (e.g., React, Node.js, MySQL)
- repository_url: VARCHAR(255) - Link to repository (GitHub/GitLab)
- demo_url: VARCHAR(255) - Link to online demo
- created_at: TIMESTAMP - Record creation date

### Relationships
- `tech_stack` may be related to `skills`.  
- Could have a future FK to `experience.id` (project done at a specific company).

### Business Rules
- `status` must follow the ENUM values.  
- `project_name` is required and unique.