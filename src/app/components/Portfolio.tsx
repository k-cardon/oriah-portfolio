const Portfolio = () => {
	const projects = [
		{
			title: 'Dissertation',
			image: '/project1.jpg',
			description: 'A brief description of Dissertation.',
		},
		{
			title: 'Project Two',
			image: '/project2.jpg',
			description: 'A brief description of Project Two.',
		},
	];

	return (
		<section id='portfolio' className='py-16'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-8'>Portfolio</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{projects.map((project, index) => (
						<div key={index} className='bg-gray-800 p-4 rounded-lg'>
							<img
								src={project.image}
								alt={project.title}
								className='mb-4 rounded-lg'
							/>
							<h3 className='text-xl font-semibold mb-2'>
								{project.title}
							</h3>
							<p className='text-gray-400'>
								{project.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
