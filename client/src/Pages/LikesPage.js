import React from 'react'
import MentorCard from '../Components/MentorCard'
import Stack from '@mui/material/Stack'

function LikesPage({updateFaves, favoritesList}) {

  const renderPosts = favoritesList.map(mentor => {
		return (
      <body className="likespage-body">
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={-11}
        >
			<MentorCard
				key={mentor.id}
				mentor={mentor}
				{...mentor}
				updateFaves={updateFaves}
			/>
      </Stack>
      </body>
		)
	})

	return (
		<div>
			{renderPosts}
		</div>
	)
}

export default LikesPage