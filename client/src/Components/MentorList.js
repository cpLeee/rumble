import React from 'react'
import MentorCard from './MentorCard'


function MentorList({mentors}) {
  return (
    <ul>
    {mentors.map((mentor) => {
      return (
        <MentorCard
          key={mentor.id}
          mentor={mentor}
        />
      );
    })}
  </ul>
);
}

export default MentorList