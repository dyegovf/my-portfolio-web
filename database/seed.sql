-- Initial seed for portfolio_db

USE portfolio_db;

-- Education
INSERT INTO education (institution, degree, field, description, start_date, end_date, location)
VALUES
('University of Example', 'Bachelor', 'Computer Science', 'Curso focado em desenvolvimento de software', '2020-01-01', '2024-01-01', 'Brasília, Brasil'),
('Instituto Técnico', 'Technical', 'Web Development', 'Formação técnica em desenvolvimento web', '2018-01-01', '2019-12-01', 'São Paulo, Brasil');

-- Skills
INSERT INTO skills (name, category, level, years_exp, description, last_used, proficiency_score)
VALUES
('JavaScript', 'Frontend', 'Advanced', 5, 'Experiência com ES6+, React e Node.js', '2026-01-01', 95),
('MySQL', 'Database', 'Intermediate', 3, 'Modelagem e otimização de queries', '2025-12-01', 80),
('Comunicação', 'Soft Skill', 'Advanced', 7, 'Boa comunicação em equipes ágeis', '2026-02-01', 90);

-- Experience
INSERT INTO experience (company, role, description, start_date, end_date, location, email, message)
VALUES
('Tech Corp', 'Software Engineer', 'Desenvolvimento de aplicações web e APIs REST', '2019-01-01', '2022-01-01', 'São Paulo, Brasil', 'contato@techcorp.com', 'Experiência relevante em projetos grandes'),
('Startup X', 'Fullstack Developer', 'Atuação em frontend e backend com foco em escalabilidade', '2022-02-01', NULL, 'Brasília, Brasil', 'jobs@startupx.com', 'Atualmente trabalhando nesta empresa');

-- Projects
INSERT INTO projects (project_name, description, status, start_date, end_date, tech_stack, repository_url, demo_url)
VALUES
('Portfolio Website', 'Site pessoal para exibir projetos e experiências', 'completed', '2023-01-01', '2023-06-01', 'React, Node.js, MySQL', 'https://github.com/dyego/portfolio', 'https://dyego.vercel.app'),
('API REST', 'API para gerenciamento de portfólio', 'in_progress', '2024-01-01', NULL, 'Express, MySQL', 'https://github.com/dyego/portfolio-api', NULL);
