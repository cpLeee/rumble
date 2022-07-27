import React from 'react'
import MentorCard from '../Components/MentorCard'

function LikesPage({updateFaves, favoritesList}) {

  const renderPosts = favoritesList.map(mentor => {
		return (
      <ul>
			<MentorCard
				key={mentor.id}
				mentor={mentor}
				{...mentor}
				updateFaves={updateFaves}
			/>
      </ul>
		)
	})

	return (
		<div>
			{renderPosts}
		</div>
	)
}

export default LikesPage