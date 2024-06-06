import { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [responseMessage, setResponseMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setResponseMessage('');

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		const result = await res.json();
		if (res.ok) {
			setFormData({ name: '', email: '', message: '' });
		}
		setResponseMessage(result.message);
		setIsLoading(false);
	};

	return (
		<section
			id='contact'
			className='bg-gray-800 py-16 text-center text-white'
		>
			<div className='container mx-auto'>
				<h2 className='text-3xl font-bold mb-8'>Contact</h2>
				<form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
					<div className='mb-4'>
						<input
							type='text'
							name='name'
							placeholder='Name'
							className='w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-4'>
						<input
							type='email'
							name='email'
							placeholder='Email'
							className='w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-4'>
						<textarea
							name='message'
							placeholder='Message'
							className='w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500'
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button
						type='submit'
						className='w-full py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300'
						disabled={isLoading}
					>
						{isLoading ? 'Sending...' : 'Submit'}
					</button>
					{responseMessage && (
						<p className='text-green-500 mt-4'>{responseMessage}</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default Contact;
