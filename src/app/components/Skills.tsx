const Skills = () => {
	const skills = [
		{ name: 'JavaScript', level: 90 },
		{ name: 'React', level: 85 },
		{ name: 'Node.js', level: 80 },
		{ name: 'CSS', level: 75 },
	];

	return (
		<section id='skills' className='bg-gray-800 py-16'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-8'>Skills</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{skills.map((skill, index) => (
						<div key={index} className='bg-gray-700 p-4 rounded-lg'>
							<h3 className='text-xl font-semibold mb-2'>
								{skill.name}
							</h3>
							<div className='w-full bg-gray-600 rounded-full h-4'>
								<div
									className='bg-blue-500 h-4 rounded-full'
									style={{ width: `${skill.level}%` }}
								></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
