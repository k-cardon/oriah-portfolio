export default function handler(
	req: {
		method: string;
		body: { name: string; email: string; message: string };
	},
	res: {
		status: (arg0: number) => {
			(): any;
			new (): any;
			json: { (arg0: { message: string }): void; new (): any };
		};
	},
) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;
		console.log(req.body);
		// Here you can handle the form data, e.g., save it to a database or send an email
		res.status(200).json({ message: 'Message sent successfully!' });
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
