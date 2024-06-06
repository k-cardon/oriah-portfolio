const Introduction = () => {
	return (
		<section
			id='introduction'
			className='container mx-auto py-16 text-center'
		>
			<img
				src='..\..\bookshelf.jpg'
				alt='Bookshelf'
				className='w-32 h-32 rounded-full mx-auto mb-4'
			/>
			<img
				src='..\..\headshot.jpg'
				alt='Profile'
				className='w-32 h-32 rounded-full mx-auto mb-4'
			/>
			<h1 className='text-4xl font-bold mb-2'>Oriah Amit</h1>
			<p className='text-lg text-gray-400'>
				Educator, Researcher, UCLA PhD Candidate
			</p>
		</section>
	);
};

export default Introduction;
