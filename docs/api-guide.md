# API Guide - portfolio_db

## Base URL
- `http://localhost:3000/`

---

## Endpoints

### GET /tables
- Description: Returns all tables available in the database
- Parameters: none
- Response: JSON array with table names and labels

Example request: Tables
`baseUrl/tables`

Example response:
```json
[
  { "id": "education", "label": "Education" },
  { "id": "skills", "label": "Skills" },
  { "id": "experience", "label": "Experience" },
  { "id": "projects", "label": "Projects" }
]
```

#### GET /data/:table
- Description: Returns all records from the specified table
- Parameters: table (path) → name of the table (education, skills, experience, projects)
- Response: JSON array with all rows from that table

Example request: Education
`baseUrl/data/education`

##### GET /data/education
Example response:
```json
[
  {
    "id": 1,
    "institution": "University of Example",
    "degree": "Bachelor",
    "field": "Computer Science",
    "description": "Additional details about the course",
    "start_date": "2020-01-01",
    "end_date": "2024-01-01",
    "location": "City/Country",
    "created_at": "2024-05-10T12:00:00"
  }
]
```
Example request: Skills
`baseUrl/data/skill`

##### GET /data/skills

Example response:
```json
[
  {
    "id": 1,
    "name": "JavaScript",
    "category": "Frontend",
    "level": "Advanced",
    "years_exp": 5,
    "description": "Strong knowledge of ES6+",
    "created_at": "2024-05-10T12:00:00"
  }
]
```

Example request: Experience
`baseUrl/data/experience`

##### GET /data/experience
Example response:
```json
[
  {
    "id": 1,
    "company": "Tech Corp",
    "role": "Software Engineer",
    "description": "Developed web applications",
    "start_date": "2019-01-01",
    "end_date": "2022-01-01",
    "location": "City/Country",
    "created_at": "2024-05-10T12:00:00"
  }
]
```

Example request: Projects
`baseUrl/data/projects`

### GET /data/projects
Example response:
```json
[
  {
    "id": 1,
    "project_name": "Portfolio Website",
    "description": "Personal portfolio showcasing projects",
    "status": "completed",
    "start_date": "2023-01-01",
    "end_date": "2023-06-01",
    "created_at": "2024-05-10T12:00:00"
  }
]
```
