export default {
	key: 'user-report',
	options: {
		delay: 5000
	},
	async handle({ data }) {
		const { user } = data;

        console.log('user-report: ', user);
	}
};
