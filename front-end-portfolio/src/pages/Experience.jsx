import React from 'react';
import settings from '../settings.json';
import Timeline from '../components/Timeline';

function Experience() {
  const { title, timeline } = settings.experience;

  return (
    <section className="experience">
      <h2>{title}</h2>
      <Timeline items={timeline} />
    </section>
  );
}

export default Experience;
