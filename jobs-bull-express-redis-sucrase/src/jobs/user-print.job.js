export default {
    key: 'user-print',
    options: {
        delay: 1000,
    },
    async handle ({ data }) {
        const { user } = data;

        console.log('user-print:', user);
    },
};