import React from 'react'
import MentorCard from '../Components/MentorCard'
import Stack from '@mui/material/Stack'
import { Grid, TableContainer } from '@mui/material'
import Table from '@mui/material/Table'

function LikesPage({ updateFaves, favoritesList }) {

	const renderPosts = favoritesList.map(mentor => {
		return (
				<MentorCard
					key={mentor.id}
					mentor={mentor}
					{...mentor}
					updateFaves={updateFaves}
				/>
		)
	})

	return (
		<body className="likespage">
		<div>
			
			<img
				className="likespage-mentorsign"
				src="https://cdn-images-1.medium.com/max/1600/1*2Rc1QY-C5NRN9vgDZWTB2Q.png" />
			<div className="wrapper">
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				marginTop={'50px'}
				spacing={3}
			>

	
				{renderPosts}
			
			

				</Stack>
				</div>
		
			</div>
			</body>
	)
}

export default LikesPage