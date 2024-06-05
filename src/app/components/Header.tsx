import Link from 'next/link';

const Header = () => {
	return (
		<header className='bg-gray-800 py-4 shadow-md'>
			<nav className='container mx-auto flex justify-between items-center'>
				<div className='text-lg font-bold text-white'>My Portfolio</div>
				<ul className='flex space-x-4'>
					<li>
						<Link href='#introduction'>
							<a className='hover:text-gray-400'>Home</a>
						</Link>
					</li>
					<li>
						<Link href='#skills'>
							<a className='hover:text-gray-400'>Skills</a>
						</Link>
					</li>
					<li>
						<Link href='#portfolio'>
							<a className='hover:text-gray-400'>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='#contact'>
							<a className='hover:text-gray-400'>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
