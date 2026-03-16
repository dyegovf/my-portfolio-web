-- SQL Schema for personal portfolio

-- Create database and select for use
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Create TABLES
CREATE TABLE education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institution VARCHAR(100) NOT NULL,       -- Institution name
    degree VARCHAR(50),                      -- Type of degree (Bachelor, Technical, Certification)
    field VARCHAR(100),                      -- Field of study
    description TEXT,                        -- Additional details
    start_date DATE,                         -- Start date
    end_date DATE,                           -- End date
    location VARCHAR(100),                   -- City/Country
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,              -- Skill name
    category VARCHAR(50),                    -- Category (Frontend, Backend, Database, Soft Skill)
    level VARCHAR(20),                       -- Level (Basic, Intermediate, Advanced)
    years_exp INT,                           -- Years of experience
    description TEXT,                        -- Short explanation
    last_used DATE,                          -- Last time used
    proficiency_score INT,                   -- Numeric score (0–100)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(100) NOT NULL,           -- Company name
    role VARCHAR(100),                       -- Job title
    description TEXT,                        -- Main responsibilities
    start_date DATE,                         -- Start date
    end_date DATE,                           -- End date (NULL if current)
    location VARCHAR(100),                   -- City/Country
    email VARCHAR(100),                      -- Contact email (if applicable)
    message TEXT,                            -- Additional notes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(150) NOT NULL,       -- Project name
    description TEXT,                         -- Project details
    status ENUM('planned','in_progress','completed','paused') DEFAULT 'planned', -- Controlled status
    start_date DATE,                          -- Start date
    end_date DATE,                            -- End date
    tech_stack VARCHAR(255),                  -- Technologies used (e.g., React, Node.js, MySQL)
    repository_url VARCHAR(255),              -- Repository link (GitHub/GitLab)
    demo_url VARCHAR(255),                    -- Online demo link
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
