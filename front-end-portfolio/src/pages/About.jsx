import React from 'react';
import settings from '../settings.json';

function About() {
  const { title, description } = settings.about;

  return (
    <section className="about">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default About;
