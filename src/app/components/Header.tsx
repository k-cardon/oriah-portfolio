import Link from 'next/link';

const Header = () => {
	return (
		<header className='bg-gray-800 p-4 shadow-md'>
			<nav className='container mx-auto flex justify-between items-center'>
				<div className='text-lg font-bold text-white'>My Portfolio</div>
				<ul className='flex space-x-4'>
					<li>
						<Link
							href='#home'
							className='text-white hover:text-gray-400'
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href='#about'
							className='text-white hover:text-gray-400'
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href='#skills'
							className='text-white hover:text-gray-400'
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							href='#portfolio'
							className='text-white hover:text-gray-400'
						>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							href='#contact'
							className='text-white hover:text-gray-400'
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
