export default function handler(req, res) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;
		// Here you can handle the form data, e.g., save it to a database or send an email
		res.status(200).json({ message: 'Message sent successfully!' });
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
