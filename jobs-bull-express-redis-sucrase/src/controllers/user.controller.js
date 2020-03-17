import Queue from '../lib/Queue';

export default {
	async store(req, res) {
		const { name, email } = req.body;

		const user = { name, email };

		await Queue.add('user-print', { user });

		await Queue.add('user-report', { user });

		return res.json(user);
	}
};
