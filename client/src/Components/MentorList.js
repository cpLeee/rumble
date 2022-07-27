import React, {useState} from 'react'
import MentorCard from './MentorCard'

function MentorList({mentors}) {
  const [current, setCurrent]= useState(0)
  const length= mentors.length; 

  const nextImage= () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const previousImage = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  }


  if (!Array.isArray(mentors) || mentors.length <=0) {
    return null;
  }


  return (
    <section className="slider">

     <img 
     className='mentorcard-left-arrow'
     src= "https://cdn-images-1.medium.com/max/800/1*UC5JK7wWPzUW6DFov8WrEA.png" 
     onClick={previousImage}
     />

    {mentors.map((mentor, index) => {
      
      return (
        <div className= {index === current ? 'mentor active' : 'mentor'} key={index}>
          {index === current && (<MentorCard
          key={mentor.id}
          mentor={mentor}
        />)}
        
        </div>
      );
    })}
    <img 
    className= "mentorcard-right-arrow"
    src="https://cdn-images-1.medium.com/max/800/1*YQEIDVTv2oWP2d_USO-P9Q.png"
    onClick={nextImage} />

  </section>
);
}

export default MentorList